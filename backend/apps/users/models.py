from sqlalchemy import Column, String, Boolean, Date, ForeignKey, Integer
from sqlalchemy.orm import relationship
from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(32), unique=True, index=True, nullable=False)
    email = Column(String(128), unique=True, index=True, nullable=False)

    first_name = Column(String(64), nullable=False)
    last_name = Column(String(64), nullable=True)

    birthdate = Column(Date, nullable=True)

    is_superuser = Column(Boolean, default=False)
    is_writer = Column(Boolean, default=False)
    is_active = Column(Boolean, default=True)

    hashed_password = Column(String, nullable=False)

    pfp_id = Column(Integer, ForeignKey("images.id"), nullable=True)
    pfp = relationship("Image", backref="users")

    bio = Column(String(512), nullable=True)
    language = Column(String(10), default="en")
    timezone = Column(String(64), default="UTC")

    two_factor_enabled = Column(Boolean, default=False)
