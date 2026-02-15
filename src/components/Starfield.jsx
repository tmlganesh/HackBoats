import { useEffect, useRef } from 'react';

export default function Starfield() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let animationFrameId;
        let stars = [];
        const numStars = 400; // Number of stars
        const speed = 2; // Base speed

        // Resize canvas
        const resize_canvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        window.addEventListener('resize', resize_canvas);
        resize_canvas();

        // Initialize stars
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                z: Math.random() * canvas.width // Depth
            });
        }

        const draw = () => {
            // Clear screen with a slight fade for trail effect (optional, here we clear fully for sharpness)
            ctx.fillStyle = '#030712'; // Base dark background
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#FFFFFF';

            const cx = canvas.width / 2;
            const cy = canvas.height / 2;

            for (let i = 0; i < numStars; i++) {
                const star = stars[i];

                // Move star closer
                star.z -= speed;

                // Reset if too close
                if (star.z <= 0) {
                    star.z = canvas.width;
                    star.x = Math.random() * canvas.width;
                    star.y = Math.random() * canvas.height;
                }

                // Project 3D position to 2D
                const k = 128.0 / star.z;
                const px = (star.x - cx) * k + cx;
                const py = (star.y - cy) * k + cy;

                // Calculate size based on depth
                const size = (1 - star.z / canvas.width) * 4; // Max size 4px

                // Check bounds
                if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height && size > 0) {
                    // Draw star
                    const alpha = (1 - star.z / canvas.width);
                    ctx.globalAlpha = alpha;
                    ctx.beginPath();
                    ctx.arc(px, py, size / 2, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize_canvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full -z-10"
            style={{ background: '#030712' }}
        />
    );
}
