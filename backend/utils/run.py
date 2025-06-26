from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import engine, Base

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