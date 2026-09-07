"use client";

import { useEffect, useRef } from "react";

interface WaveCanvasProps {
  className?: string;
  color?: [number, number, number];
}

export function WaveCanvas({ className, color = [58, 166, 185] }: WaveCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let time = 0;
    let raf = 0;
    const waveData = Array.from({ length: 8 }).map(() => ({
      value: Math.random() * 0.5 + 0.1,
      targetValue: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.02 + 0.01,
    }));

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      canvas!.width = parent.clientWidth;
      canvas!.height = parent.clientHeight;
    }

    function updateWaveData() {
      waveData.forEach((data) => {
        if (Math.random() < 0.01) data.targetValue = Math.random() * 0.7 + 0.1;
        const diff = data.targetValue - data.value;
        data.value += diff * data.speed;
      });
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      const [r, g, b] = color;

      waveData.forEach((data, i) => {
        const freq = data.value * 7;
        ctx!.beginPath();
        for (let x = 0; x < canvas!.width; x++) {
          const nx = (x / canvas!.width) * 2 - 1;
          const px = nx + i * 0.04 + freq * 0.03;
          const py = Math.sin(px * 10 + time) * Math.cos(px * 2) * freq * 0.1 * ((i + 1) / 8);
          const y = ((py + 1) * canvas!.height) / 2;
          x === 0 ? ctx!.moveTo(x, y) : ctx!.lineTo(x, y);
        }
        const intensity = Math.min(1, freq * 0.3);
        ctx!.lineWidth = 1 + i * 0.3;
        ctx!.strokeStyle = `rgba(${r},${g},${b},${0.12 + intensity * 0.18})`;
        ctx!.shadowColor = `rgba(${r},${g},${b},0.4)`;
        ctx!.shadowBlur = 6;
        ctx!.stroke();
        ctx!.shadowBlur = 0;
      });
    }

    function animate() {
      time += 0.02;
      updateWaveData();
      draw();
      raf = requestAnimationFrame(animate);
    }

    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);
    resize();
    animate();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [color]);

  // Waves are drawn centered on the canvas and swing outward by a randomized
  // amplitude, so they can reach either edge unpredictably as they animate.
  // Masking the canvas itself (rather than overlaying a fixed-height fade on
  // the section) guarantees the lines taper to nothing at top and bottom no
  // matter how far a given wave swings.
  const fadeMask = "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)";

  return (
    <canvas
      ref={canvasRef}
      className={className ?? "absolute inset-0 h-full w-full"}
      style={{ maskImage: fadeMask, WebkitMaskImage: fadeMask }}
    />
  );
}

export default WaveCanvas;
