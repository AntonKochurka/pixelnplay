from sqlalchemy.ext.asyncio import AsyncSession
from passlib.context import CryptContext
from . import crud

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def verify_password(raw: str, hashed: str) -> bool:
    return pwd_context.verify(raw, hashed)

async def authenticate_user(db: AsyncSession, identifier: str, password: str):
    user = await crud.get_user_by_identifier(db, identifier)
    if not user:
        return None
    if not verify_password(password, user.hashed_password):
        return None
    return user
