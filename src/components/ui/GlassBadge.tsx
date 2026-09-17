import React from "react";

interface GlassBadgeProps {
  children: React.ReactNode;
  variant?: "purple" | "blue" | "teal" | "green" | "amber" | "coral" | "neutral";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: React.ReactNode;
}

export default function GlassBadge({
  children,
  variant = "purple",
  size = "md",
  className = "",
  icon,
}: GlassBadgeProps) {
  const variantStyles = {
    purple: "bg-purple-50/80 text-[#5B41C1] border-purple-200/70 shadow-sm shadow-purple-500/5",
    blue: "bg-blue-50/80 text-[#2563EB] border-blue-200/70 shadow-sm shadow-blue-500/5",
    teal: "bg-teal-50/80 text-[#0D9488] border-teal-200/70 shadow-sm shadow-teal-500/5",
    green: "bg-emerald-50/80 text-[#059669] border-emerald-200/70 shadow-sm shadow-emerald-500/5",
    amber: "bg-amber-50/80 text-[#D97706] border-amber-200/70 shadow-sm shadow-amber-500/5",
    coral: "bg-rose-50/80 text-[#E11D48] border-rose-200/70 shadow-sm shadow-rose-500/5",
    neutral: "bg-slate-50/80 text-slate-700 border-slate-200/70 shadow-sm",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-1 gap-1",
    md: "text-xs md:text-sm px-3.5 py-1.5 gap-1.5",
    lg: "text-sm px-4 py-2 gap-2 font-medium",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium tracking-wide backdrop-blur-md border transition-all duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
