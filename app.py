# uvicorn app:app --reload
from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.requests import Request

app = FastAPI()

# Подключаем папку static для статики
app.mount("/static", StaticFiles(directory="static"), name="static")
app.mount("/media", StaticFiles(directory="media"), name="media")

# Настраиваем шаблоны
templates = Jinja2Templates(directory="templates")


@app.get("/", response_class=HTMLResponse)
async def render_form(request: Request):
    return templates.TemplateResponse("home.html", {"request": request})
@app.get("/gallery", response_class=HTMLResponse)
async def render_form(request: Request):
    return templates.TemplateResponse("gallery.html", {"request": request})
