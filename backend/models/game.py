from sqlalchemy import Column, Integer, String, Text, ForeignKey
from sqlalchemy.orm import relationship
from database import Base
from models.mixins import BaseMixin

class Game(Base, BaseMixin):
    __tablename__ = "games"

    name = Column(String(256), unique=True, nullable=False)
    description = Column(Text, nullable=True)
    pg = Column(Integer, nullable=False, default=0)

    pfp_id = Column(Integer, ForeignKey("images.id"), nullable=True)
    pfp = relationship("Image", backref="games")
