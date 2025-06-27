from sqlalchemy import or_, select
from sqlalchemy.ext.asyncio import AsyncSession
from .models import User

async def get_user_by_identifier(db: AsyncSession, identifier: str) -> User | None:
    query = select(User).where(
        or_(User.username == identifier, User.email == identifier)
    )
    result = await db.execute(query)
    return result.scalar_one_or_none()
