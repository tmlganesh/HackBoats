import { useEffect, useRef } from 'react';

export default function IndustrialBackground() {
    return (
        <div className="fixed inset-0 w-full h-full bg-[#050A14] -z-10 overflow-hidden">
            {/* Base Grid */}
            <div className="absolute inset-0" style={{
                backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
                backgroundSize: '40px 40px'
            }} />

            {/* Major Grid Lines */}
            <div className="absolute inset-0" style={{
                backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px)
            `,
                backgroundSize: '200px 200px'
            }} />

            {/* Scanning Line Animation */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent w-full h-[20%] animate-scan" style={{
                animation: 'scan 8s linear infinite'
            }} />

            {/* Radial Vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050A14]/80 to-[#050A14] opacity-90"
                style={{ background: 'radial-gradient(circle at center, transparent 0%, #050A14 80%)' }} />

            <style>{`
            @keyframes scan {
                0% { transform: translateY(-100%); }
                100% { transform: translateY(500%); }
            }
        `}</style>
        </div>
    );
}
