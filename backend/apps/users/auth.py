from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import JSONResponse

from sqlalchemy.ext.asyncio import AsyncSession
from apps.users import schemas, service
from utils.token import create_access_token, create_refresh_token
from database import get_async_session

from config import settings

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/login")
async def login(data: schemas.LoginRequest, db: AsyncSession = Depends(get_async_session)):
    user = await service.authenticate_user(db, data.identifier, data.password)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    access_token = create_access_token({"sub": str(user.id)})
    refresh_token = create_refresh_token({"sub": str(user.id)})

    response = JSONResponse(
        content={
            "access_token": access_token,
            "token_type": "bearer",
            "user": {
                "id": user.id,
                "username": user.username,
                "email": user.email,
            }
        }
    )

    response.set_cookie(
        key="refresh_token",
        value=refresh_token,
        httponly=True,
        secure=True,
        samesite="strict",     
        max_age=60 * 60 * 24 * settings.REFRESH_TOKEN_EXPIRE_DAYS,
        path="/auth/refresh"
    )
    
    return response