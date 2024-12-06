from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import numpy as np
import matplotlib.pyplot as plt
import io
import base64

app = FastAPI()

# Add CORS middleware to allow cross-origin requests from localhost:3000
origins = [
    "http://localhost:3000",  # Allow frontend to communicate from localhost:3000
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows requests from the listed origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

class BeamParameters(BaseModel):
    L: float  # Length of the beam (meters)
    P: float  # Point load (Newtons)
    a: float  # Distance from left support to point load (meters)

@app.get("/health")
def health_check():
    return {"status": "ok", "message": "API is running"}

@app.post("/generate_diagram/")
async def generate_diagram(params: BeamParameters):
    # Beam parameters
    L = params.L
    P = params.P
    a = params.a

    # Define x as the position along the beam (from 0 to L)
    x = np.linspace(0, L, 500)

    # Initialize shear force (V) and bending moment (M) arrays
    V = np.zeros_like(x)
    M = np.zeros_like(x)

    # Shear force calculation
    for i in range(len(x)):
        if x[i] < a:
            V[i] = 0  # No shear force to the left of the point load
        else:
            V[i] = -P  # Shear force after the point load (negative sign due to downward load)

    # Bending moment calculation
    for i in range(len(x)):
        if x[i] < a:
            M[i] = 0  # No moment to the left of the point load
        else:
            M[i] = -P * (x[i] - a)  # Moment caused by point load at distance (x - a)

    # Create figure for both diagrams
    fig, ax = plt.subplots(2, 1, figsize=(10, 8))

    # Shear Force Diagram
    ax[0].plot(x, V, label="Shear Force (V)", color="blue")
    ax[0].set_xlabel("Position along the beam (x) [m]")
    ax[0].set_ylabel("Shear Force (V) [N]")
    ax[0].set_title("Shear Force Diagram")
    ax[0].axhline(0, color="black",linewidth=0.5)
    ax[0].axvline(a, color="red", linestyle="--", label="Point Load Position")
    ax[0].legend()
    ax[0].grid(True)

    # Bending Moment Diagram
    ax[1].plot(x, M, label="Bending Moment (M)", color="red")
    ax[1].set_xlabel("Position along the beam (x) [m]")
    ax[1].set_ylabel("Bending Moment (M) [Nm]")
    ax[1].set_title("Bending Moment Diagram")
    ax[1].axhline(0, color="black",linewidth=0.5)
    ax[1].axvline(a, color="red", linestyle="--", label="Point Load Position")
    ax[1].legend()
    ax[1].grid(True)

    # Save plot to a bytes buffer
    buf = io.BytesIO()
    plt.tight_layout()
    plt.savefig(buf, format="png")
    buf.seek(0)

    # Convert the plot to base64 to send to frontend
    img_base64 = base64.b64encode(buf.read()).decode("utf-8")
    return {"image": img_base64}
