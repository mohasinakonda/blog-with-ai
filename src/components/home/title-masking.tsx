"use client";
import React, { useEffect, useRef, useState } from "react";

export const BugEaterText = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Canvas size configuration
        const dpr = window.devicePixelRatio || 1;
        const width = 750;
        const height = 300;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.scale(dpr, dpr);

        // Initial Text Draw
        const drawText = () => {
            ctx.fillStyle = "#EDEDED";
            // Ensure the font matches your display font
            ctx.font = "900 120px 'Bebas Neue', Anton, sans-serif";
            ctx.letterSpacing = "-2px";
            ctx.textBaseline = "top";
            ctx.fillText("FRONTEND", 10, 10);
            ctx.fillText("ENGINEER", 10, 130);
        };

        drawText();

        // Bug parameters & paths
        // Coordinates through the words: FRONTEND -> ENGINEER
        let bugX = 0;
        let bugY = 70; // middle of "FRONTEND"
        let targetY = 70;
        let speed = 2.4;
        let frame = 0;
        let currentLine = 1;

        let animId: number;

        const render = () => {
            frame++;

            // 1. EAT THE TEXT (Carve holes using destination-out)
            ctx.save();
            ctx.globalCompositeOperation = "destination-out";

            // Bite shape with rough organic edges
            ctx.beginPath();
            const biteRadius = 14 + Math.sin(frame * 0.5) * 3;
            ctx.arc(bugX + 12, bugY, biteRadius, 0, Math.PI * 2);
            ctx.fill();

            // Small erratic bites (chewing effect)
            for (let i = 0; i < 3; i++) {
                const angle = Math.random() * Math.PI * 2;
                const dist = Math.random() * biteRadius;
                ctx.beginPath();
                ctx.arc(
                    bugX + 12 + Math.cos(angle) * dist,
                    bugY + Math.sin(angle) * dist,
                    4,
                    0,
                    Math.PI * 2
                );
                ctx.fill();
            }
            ctx.restore();

            // 2. DRAW THE PHYSICAL BUG (In a normal layer)
            ctx.save();
            ctx.globalCompositeOperation = "source-over";

            // Bug Body (Dark green/red cyber beetle)
            ctx.fillStyle = "#22C55E"; // or glowing matrix green
            ctx.beginPath();
            ctx.ellipse(bugX, bugY, 10, 6, 0, 0, Math.PI * 2);
            ctx.fill();

            // Bug Head & Mandibles (Chewing mouth)
            ctx.fillStyle = "#FFFFFF";
            ctx.beginPath();
            ctx.arc(bugX + 10, bugY, 4, 0, Math.PI * 2);
            ctx.fill();

            // Moving Legs (Simple crawling sine wave)
            ctx.strokeStyle = "#22C55E";
            ctx.lineWidth = 2;
            for (let i = -1; i <= 1; i++) {
                const legOffset = Math.sin(frame * 0.3 + i) * 6;
                // Top leg
                ctx.beginPath();
                ctx.moveTo(bugX + i * 5, bugY - 4);
                ctx.lineTo(bugX + i * 5 - 3, bugY - 12 + legOffset);
                ctx.stroke();

                // Bottom leg
                ctx.beginPath();
                ctx.moveTo(bugX + i * 5, bugY + 4);
                ctx.lineTo(bugX + i * 5 - 3, bugY + 12 - legOffset);
                ctx.stroke();
            }

            ctx.restore();

            // 3. MOTION & LINE LOGIC
            bugX += speed;

            // When finished first word "FRONTEND", move to "ENGINEER"
            if (currentLine === 1 && bugX > 540) {
                currentLine = 2;
                bugX = 0;
                bugY = 190; // Y coordinate for "ENGINEER"
            }

            // Finish when second word is eaten
            if (currentLine === 2 && bugX > 520) {
                setIsDone(true);
                // Clear remaining bug artifact
                ctx.clearRect(bugX - 20, bugY - 20, 40, 40);
                return;
            }

            animId = requestAnimationFrame(render);
        };

        // Small delay before bug starts crawling and eating
        const timeout = setTimeout(() => {
            render();
        }, 1000);

        return () => {
            clearTimeout(timeout);
            cancelAnimationFrame(animId);
        };
    }, []);

    return (
        <div className="relative inline-block select-none">
            <canvas
                ref={canvasRef}
                className="block cursor-pointer"
                title="A real bug in production!"
            />
            {/* Optional Reset Button */}
            {isDone && (
                <button
                    onClick={() => window.location.reload()}
                    className="absolute -bottom-6 left-0 font-mono text-[0.65rem] text-[#555555] hover:text-[#EDEDED] uppercase tracking-widest"
                >
                    [Reload Text]
                </button>
            )}
        </div>
    );
};