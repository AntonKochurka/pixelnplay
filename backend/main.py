import os

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from utils.run import lifespan, setup_middlewares

app = FastAPI(lifespan=lifespan)
setup_middlewares(app)

app.mount(
    "/static/uploads",
    StaticFiles(directory=os.path.join("static", "uploads")),
    name="uploads"
)
