"use client";

import React, { useState } from "react";
import {
  Briefcase,
  MapPin,
  Calendar,
  CheckCircle2,
  Building2,
} from "lucide-react";
import GlassCard from "./ui/GlassCard";
import GlassBadge from "./ui/GlassBadge";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  const { career } = portfolioData;
  const [activeItem, setActiveItem] = useState<string>(career[0].id);

  return (
    <section id="journey" className="relative w-full py-24 md:py-32 overflow-hidden bg-mesh-canvas">
      <div className="w-full max-w-[1300px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 text-xs font-bold uppercase tracking-wider text-[#2563EB]">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Professional Experience & Marketplace Milestones
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A proven career path scaling digital shelf presence, optimizing multi-platform catalogs, and orchestrating seasonal commerce operations.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Connecting Line on desktop */}
          <div className="hidden lg:block absolute left-[295px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#5B41C1] via-[#5893E0] to-[#43C2C2] opacity-30" />

          <div className="space-y-8 lg:space-y-12">
            {career.map((item, index) => {
              const isSelected = activeItem === item.id;
              return (
                <div
                  key={item.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start group"
                >
                  {/* Left Column: Date & Location Meta (Desktop) */}
                  <div className="lg:col-span-3 flex lg:flex-col lg:items-end lg:text-right justify-between items-center gap-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-slate-200/80 text-xs font-bold text-slate-700 shadow-2xs">
                      <Calendar className="w-3.5 h-3.5 text-[#5B41C1]" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 lg:mt-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Middle: Pulse Node (Desktop) */}
                  <div className="hidden lg:flex col-span-1 justify-center relative pt-2">
                    <div className="w-5 h-5 rounded-full bg-white border-2 border-[#5B41C1] flex items-center justify-center shadow-md shadow-purple-500/20 group-hover:scale-125 transition-transform duration-300">
                      <div className="w-2 h-2 rounded-full bg-[#5B41C1]" />
                    </div>
                  </div>

                  {/* Right Column: Experience Glass Card */}
                  <div className="lg:col-span-8">
                    <GlassCard
                      className={`p-6 sm:p-8 transition-all duration-300 ${
                        isSelected
                          ? "border-purple-300/80 shadow-lg shadow-purple-500/5 bg-white/85"
                          : "hover:border-slate-300/80"
                      }`}
                      onClick={() => setActiveItem(item.id)}
                    >
                      {/* Role & Company Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#5B41C1]">
                              0{index + 1} • {item.badge}
                            </span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                            {item.role}
                          </h3>
                          <div className="flex items-center gap-2 mt-1 text-sm font-semibold text-slate-700">
                            <Building2 className="w-4 h-4 text-slate-400" />
                            <span>{item.company}</span>
                          </div>
                        </div>

                        {/* Highlight metric chip */}
                        {item.highlights[0] && (
                          <div className="inline-flex flex-col items-start sm:items-end px-3.5 py-1.5 rounded-xl bg-purple-50/80 border border-purple-100">
                            <span className="text-base font-black text-[#5B41C1] leading-tight">
                              {item.highlights[0].metric}
                            </span>
                            <span className="text-[10px] font-semibold text-slate-500">
                              {item.highlights[0].text}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Responsibilities Bullets */}
                      <ul className="mt-5 space-y-3">
                        {item.description.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Verified Skills Footer */}
                      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold text-slate-400 mr-1">Skills:</span>
                        {item.skills.map((skill) => (
                          <GlassBadge key={skill} size="sm" variant="neutral">
                            {skill}
                          </GlassBadge>
                        ))}
                      </div>
                    </GlassCard>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
