import { useEffect, useRef } from 'react';

export default function TechParticles() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let animationFrameId;
        let particles = [];
        const particleCount = 60; // Enough distinct particles
        const connectionDistance = 150;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        window.addEventListener('resize', resize);
        resize();

        // Init particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 1.5, // Velocity X
                vy: (Math.random() - 0.5) * 1.5, // Velocity Y
                size: Math.random() * 2 + 1
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#1e293b'; // Dark blue-ish background clearing (or transparent if over existing bg)
            // We want transparent so we can layer it.
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw path
            for (let i = 0; i < particleCount; i++) {
                let p = particles[i];

                // Move
                p.x += p.vx;
                p.y += p.vy;

                // Bounce edges
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = '#38bdf8'; // Cyan-400
                ctx.fill();

                // Connections
                for (let j = i + 1; j < particleCount; j++) {
                    let p2 = particles[j];
                    let dx = p.x - p2.x;
                    let dy = p.y - p2.y;
                    let dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(56, 189, 248, ${1 - dist / connectionDistance})`; // Cyan with fade
                        ctx.lineWidth = 1;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full bg-[#0b1121] -z-10">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
            {/* Subtle radial gradient to center focus */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#020617] opacity-80"
                style={{ background: 'radial-gradient(circle, transparent 20%, #020617 100%)' }} />
        </div>
    );
}
