"use client";

import React, { useState } from "react";
import {
  Wrench,
  BarChart3,
  Palette,
  Layout,
  FileSpreadsheet,
  AppWindow,
  CheckCircle2,
  Cpu,
  Layers,
} from "lucide-react";
import GlassCard from "./ui/GlassCard";
import GlassBadge from "./ui/GlassBadge";
import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  const { tools, coreExpertise } = portfolioData;
  const [activeTool, setActiveTool] = useState<string>(tools[0].name);

  const getToolIcon = (icon: string) => {
    switch (icon) {
      case "BarChart3":
        return <BarChart3 className="w-6 h-6 text-[#5B41C1]" />;
      case "Palette":
        return <Palette className="w-6 h-6 text-[#E11D48]" />;
      case "Layout":
        return <Layout className="w-6 h-6 text-[#0D9488]" />;
      case "FileSpreadsheet":
        return <FileSpreadsheet className="w-6 h-6 text-[#16A34A]" />;
      case "Figma":
        return <AppWindow className="w-6 h-6 text-[#2563EB]" />;
      default:
        return <Cpu className="w-6 h-6 text-[#5B41C1]" />;
    }
  };

  return (
    <section id="skills" className="relative w-full py-24 md:py-32 overflow-hidden bg-mesh-canvas">
      <div className="w-full max-w-[1300px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50/80 border border-indigo-200/60 text-xs font-bold uppercase tracking-wider text-[#5B41C1]">
            <Wrench className="w-3.5 h-3.5" />
            <span>Strategic Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Verified Tools & Specialized Competencies
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Every software tool and strategic discipline verified on Swathy's resume, grounded in practical application across retail analytics, listing hygiene, and visual merchandising.
          </p>
        </div>

        {/* 5 Core Software Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tools.map((tool) => {
            const isSelected = activeTool === tool.name;
            return (
              <GlassCard
                key={tool.name}
                className={`p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? "border-purple-300/80 shadow-lg shadow-purple-500/10 bg-white/90"
                    : "hover:border-slate-300"
                }`}
                onClick={() => setActiveTool(tool.name)}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center">
                      {getToolIcon(tool.icon)}
                    </div>
                    <GlassBadge size="sm" variant="purple">
                      {tool.level}
                    </GlassBadge>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {tool.category}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                    {tool.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium">
                  <strong className="text-slate-800 font-semibold block mb-0.5">Applied At:</strong>
                  <span>{tool.appliedAt}</span>
                </div>
              </GlassCard>
            );
          })}

          {/* Bonus Card: Cross-Platform Expertise */}
          <GlassCard className="p-6 sm:p-7 bg-gradient-to-br from-purple-50/60 via-white/80 to-blue-50/50 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-[#5B41C1] mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600 block mb-1">
                Ecosystem Integration
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                Neteven SaaS & Multi-Channel APIs
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Centralized catalog distribution, attribute schema transformations, and automated listing synchronization across 20 European retail platforms.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100/80 text-xs font-semibold text-[#5B41C1] flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Multi-Platform Master Architecture</span>
            </div>
          </GlassCard>
        </div>

        {/* Core Expertise Chips Cloud */}
        <GlassCard className="p-8 sm:p-10 border-white/95 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                Specialized Strategic Disciplines
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                End-to-end commerce competencies demonstrated across enterprise retail engagements
              </p>
            </div>
            <span className="text-xs font-bold text-[#5B41C1] bg-purple-50 px-3 py-1 rounded-full border border-purple-100 self-start sm:self-auto">
              12 Core Capabilities
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {coreExpertise.map((exp) => (
              <span
                key={exp}
                className="px-4 py-2 rounded-xl bg-white/90 border border-slate-200/80 text-xs sm:text-sm font-semibold text-slate-700 shadow-2xs hover:border-[#5B41C1]/40 hover:text-[#5B41C1] transition-all"
              >
                {exp}
              </span>
            ))}
          </div>
        </GlassCard>

      </div>
    </section>
  );
}
