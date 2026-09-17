"use client";

import React, { useRef, useState, MouseEvent } from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  hoverEffect?: boolean;
  spotlight?: boolean;
  onClick?: () => void;
  id?: string;
}

export default function GlassCard({
  children,
  className = "",
  as: Component = "div",
  hoverEffect = true,
  spotlight = true,
  onClick,
  id,
}: GlassCardProps) {
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!ref.current || !spotlight) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <Component
      id={id}
      ref={ref as React.Ref<HTMLDivElement>}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => spotlight && setOpacity(1)}
      onMouseLeave={() => spotlight && setOpacity(0)}
      className={`glass-panel ${hoverEffect ? "glass-panel-hover" : ""} relative rounded-3xl overflow-hidden transition-all duration-300 ${className}`}
    >
      {spotlight && (
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none z-0"
          style={{ borderRadius: "inherit" }}
        >
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              opacity,
              background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.6), rgba(91, 65, 193, 0.04) 40%, transparent 70%)`,
            }}
          />
        </div>
      )}
      <div className="relative z-10 w-full h-full">{children}</div>
    </Component>
  );
}
