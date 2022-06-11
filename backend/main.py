from fastapi import FastAPI
from typing import ContextManager, Dict
from fastapi import FastAPI, Depends, HTTPException, status, Request
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from fastapi.middleware.cors import CORSMiddleware
from pydantic.main import BaseModel
from starlette import responses
from starlette.responses import FileResponse, HTMLResponse
import datetime
import uvicorn
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi import FastAPI, File, UploadFile
import os
import random
import string
from fastapi import Body
import json
from zipfile import ZipFile

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == "__main__":
    uvicorn.run("main:app", port=5000, host='0.0.0.0', reload=True)