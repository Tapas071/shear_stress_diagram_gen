import React, { useRef, useEffect } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(10, 10);
    context.lineTo(10, 100);
    // context.lineTo(350, 50);
    context.lineTo(700, 100);
    context.strokeStyle = "black";
    context.stroke();
    contextRef.current = context;

    // Add your drawing logic here
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Canvas;
