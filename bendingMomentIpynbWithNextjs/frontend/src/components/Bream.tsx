"use client"
import { useState } from "react";

export default function Beam() {
  const [L, setL] = useState<number>(10);
  const [P, setP] = useState<number>(1000);
  const [a, setA] = useState<number>(4);
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [apiStatus, setApiStatus] = useState<string>("");

  // Function to check the health of the API
  const checkApiHealth = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/health");
      const data = await res.json();
      if (res.ok && data.status === "ok") {
        setApiStatus("API is healthy");
        return true;
      } else {
        setApiStatus("API health check failed");
        return false;
      }
    } catch (error) {
      setApiStatus("Error connecting to API");
      return false;
    }
  };

  // Function to generate diagram
  const generateDiagram = async () => {
    const isApiHealthy = await checkApiHealth(); // Check API health first
    if (!isApiHealthy) {
      return; // Don't proceed with diagram generation if API is not healthy
    }

    const res = await fetch("http://127.0.0.1:8000/generate_diagram/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ L, P, a }),
    });

    const data = await res.json();
    setImgSrc(`data:image/png;base64,${data.image}`);
  };

  const handleLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setL(parseFloat(e.target.value));
  };

  const handlePChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setP(parseFloat(e.target.value));
  };

  const handleAChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setA(parseFloat(e.target.value));
  };

  return (
    <div>
      <h1>Beam Shear Force and Bending Moment Diagram</h1>
      <div>
        <label>
          Beam Length (L) [m]:
          <input type="number" value={L} onChange={handleLChange} />
        </label>
      </div>
      <div>
        <label>
          Point Load (P) [N]:
          <input type="number" value={P} onChange={handlePChange} />
        </label>
      </div>
      <div>
        <label>
          Distance to Load (a) [m]:
          <input type="number" value={a} onChange={handleAChange} />
        </label>
      </div>
      <button onClick={generateDiagram}>Generate Diagram</button>

      {apiStatus && <div>{apiStatus}</div>}

      {imgSrc && (
        <div>
          <h2>Shear Force and Bending Moment Diagram</h2>
          <img src={imgSrc} alt="Shear Force and Bending Moment Diagram" />
        </div>
      )}
    </div>
  );
}
