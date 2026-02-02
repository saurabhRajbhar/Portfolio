import React, { useRef, useEffect } from "react";

export default function ParticleBg() {
    const ref = useRef();

    useEffect(() => {
        const canvas = ref.current;
        const ctx = canvas.getContext("2d");
        let w = canvas.width = canvas.clientWidth;
        let h = canvas.height = canvas.clientHeight;
        let dots = Array.from({ length: 40 }).map(() => ({
            x: Math.random() * w,
            y: Math.random() * h,
            r: 0.8 + Math.random() * 2.4,
            vx: (Math.random() - 0.5) * 0.2,
            vy: (Math.random() - 0.5) * 0.2,
            hue: 30 + Math.random() * 40
        }));
        let raf;
        function resize() { w = canvas.width = canvas.clientWidth; h = canvas.height = canvas.clientHeight; }
        function step() {
            ctx.clearRect(0, 0, w, h);
            for (let d of dots) {
                d.x += d.vx; d.y += d.vy;
                if (d.x < 0) d.x = w;
                if (d.x > w) d.x = 0;
                if (d.y < 0) d.y = h;
                if (d.y > h) d.y = 0;
                ctx.beginPath();
                ctx.fillStyle = `hsla(${d.hue},80%,60%,0.09)`;
                ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
                ctx.fill();
                // soft glow
                ctx.beginPath();
                ctx.fillStyle = `hsla(${d.hue},80%,60%,0.04)`;
                ctx.arc(d.x, d.y, d.r * 3, 0, Math.PI * 2);
                ctx.fill();
            }
            raf = requestAnimationFrame(step);
        }
        window.addEventListener("resize", resize);
        step();
        return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); }
    }, []);

    return <canvas ref={ref} style={{ position: "absolute", inset: 0, zIndex: 0 }} />;
}
