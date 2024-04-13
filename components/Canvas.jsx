import React, { useRef, useEffect } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(20, 20);
    context.lineTo(20, 100);
    context.lineTo(200, 100);
    context.strokeStyle = "black";
    context.stroke();
    contextRef.current = context;

    // Add your drawing logic here
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Canvas;
