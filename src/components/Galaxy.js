import React, { useEffect, useRef } from "react";
import "./Galaxy.css";

function Galaxy() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let stars = [];
    let shootingStars = [];
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // =========================
    // Create Twinkling Stars
    // =========================
    for (let i = 0; i < 300; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        alpha: Math.random(),
        speed: Math.random() * 0.02
      });
    }

    // =========================
    // Create Shooting Star
    // =========================
    function createShootingStar() {
      const startX = Math.random() * canvas.width;
      const startY = -100; // Start above screen

      const angle = Math.random() * (Math.PI / 6) + Math.PI / 4; 
      // Natural atmospheric entry angle (45°–75°)

      const speed = Math.random() * 4 + 5;

      shootingStars.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: Math.random() * 120 + 100,
        opacity: 1
      });
    }

    setInterval(createShootingStar, 5000);

    // =========================
    // Animation Loop
    // =========================
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ---- Twinkling Stars ----
      stars.forEach(star => {
        star.alpha += star.speed;
        if (star.alpha <= 0 || star.alpha >= 1) {
          star.speed = -star.speed;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
        ctx.fill();
      });

      // ---- Shooting Stars ----
      shootingStars.forEach((star, index) => {

        // Apply gravity acceleration
        star.vy += 0.04;

        star.x += star.vx;
        star.y += star.vy;

        // Tail behind the head
        const tailX = star.x - star.vx * star.length * 0.04;
        const tailY = star.y - star.vy * star.length * 0.04;

        const gradient = ctx.createLinearGradient(
          star.x,
          star.y,
          tailX,
          tailY
        );

        gradient.addColorStop(0, `rgba(255,255,255,${star.opacity})`);
        gradient.addColorStop(1, "rgba(255,255,255,0)");

        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Bright meteor head
        ctx.beginPath();
        ctx.arc(star.x, star.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;
        ctx.shadowBlur = 25;
        ctx.shadowColor = "white";
        ctx.fill();
        ctx.shadowBlur = 0;

        // Fade as it burns in atmosphere
        star.opacity -= 0.004;

        if (star.opacity <= 0 || star.y > canvas.height + 50) {
          shootingStars.splice(index, 1);
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };

  }, []);

  return <canvas ref={canvasRef} className="galaxy-canvas"></canvas>;
}

export default Galaxy;
