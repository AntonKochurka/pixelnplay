from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import engine, Base

from apps.games.router import router as games_router
from apps.images.router import router as images_router
from apps.users.router import router as users_router
from apps.users.auth import router as auth_router

def setup_routers(app: FastAPI):
    app.include_router(games_router)
    app.include_router(images_router)
    app.include_router(users_router)
    app.include_router(auth_router)
    
@asynccontextmanager
async def lifespan(app: FastAPI):
    print("[Startup] Initializing resources...")

    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    print("[Database] Tables wac created...")

    yield
    print("[Shutdown] Cleaning up...")

def setup_middlewares(app: FastAPI):
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )