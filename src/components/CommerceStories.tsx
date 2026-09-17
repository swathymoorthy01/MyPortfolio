"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Layers,
  ShieldCheck,
  CheckCircle2,
  Workflow,
  Info,
} from "lucide-react";
import GlassCard from "./ui/GlassCard";
import GlassBadge from "./ui/GlassBadge";
import { portfolioData } from "../data/portfolioData";

export default function CommerceStories() {
  const { caseStudies } = portfolioData;
  const [selectedStory, setSelectedStory] = useState<string>(caseStudies[0].id);

  const activeCase = caseStudies.find((c) => c.id === selectedStory) || caseStudies[0];

  return (
    <section id="stories" className="relative w-full py-24 md:py-32 overflow-hidden bg-mesh-canvas">
      <div className="w-full max-w-[1300px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50/80 border border-teal-200/60 text-xs font-bold uppercase tracking-wider text-[#0D9488]">
            <Layers className="w-3.5 h-3.5" />
            <span>Commerce Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Strategic Playbooks & Operational Impact
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Real-world methodologies applied across fashion, personal care, and retail enterprise clients to resolve listing errors, accelerate discovery, and boost brand exposure.
          </p>
        </div>

        {/* Interactive Case Study Selector Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {caseStudies.map((story) => {
            const isSelected = story.id === selectedStory;
            return (
              <button
                key={story.id}
                onClick={() => setSelectedStory(story.id)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 backdrop-blur-md border ${
                  isSelected
                    ? "bg-white/95 border-[#5B41C1] shadow-lg shadow-purple-500/10 ring-2 ring-[#5B41C1]/10"
                    : "bg-white/70 border-slate-200/80 hover:bg-white/90 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#5B41C1]">
                    {story.category}
                  </span>
                  <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                    {story.metric}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 line-clamp-2 leading-snug">
                  {story.title}
                </h4>
                <div className="text-[11px] text-slate-500 mt-2 font-medium">
                  {story.client}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Case Study Detail Showcase */}
        <GlassCard className="p-6 sm:p-10 lg:p-12 border-purple-200/80 shadow-xl shadow-purple-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Col: Overview, Workflow & Impact */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <GlassBadge variant="purple" size="sm">
                    {activeCase.category}
                  </GlassBadge>
                  <span className="text-xs font-semibold text-slate-500">
                    Client Context: {activeCase.client}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {activeCase.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                  {activeCase.summary}
                </p>
              </div>

              {/* Challenge vs Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 sm:p-5 rounded-2xl bg-purple-50/50 border border-purple-100/80">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-900 block mb-1.5">
                    The Challenge
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {activeCase.challenge}
                  </p>
                </div>
                <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/50 border border-blue-100/80">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block mb-1.5">
                    The Solution
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {activeCase.solution}
                  </p>
                </div>
              </div>

              {/* Execution Workflow */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3 flex items-center gap-1.5">
                  <Workflow className="w-3.5 h-3.5 text-[#5B41C1]" />
                  <span>Strategic Execution Sequence</span>
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {activeCase.workflow.map((step, idx) => (
                    <div
                      key={step}
                      className="p-3 rounded-xl bg-white/80 border border-slate-200/80 text-center shadow-2xs"
                    >
                      <div className="text-[10px] font-black text-[#5B41C1] mb-0.5">
                        STEP 0{idx + 1}
                      </div>
                      <div className="text-xs font-bold text-slate-800 leading-snug">
                        {step}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Impact Points */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                  Verified Outcomes
                </span>
                <div className="space-y-2">
                  {activeCase.impact.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Confidentiality Notice */}
              {activeCase.confidentialityNote && (
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2 text-xs text-slate-500">
                  <Info className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{activeCase.confidentialityNote}</span>
                </div>
              )}
            </div>

            {/* Right Col: Metric Hero & Brand Badges */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              
              {/* Highlight Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#5B41C1] to-[#5893E0] text-white shadow-xl shadow-purple-600/20 text-center flex flex-col items-center justify-center">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-200">
                  Primary Strategic Metric
                </span>
                <div className="text-4xl sm:text-5xl font-black mt-2 tracking-tight">
                  {activeCase.metric}
                </div>
                <div className="text-sm font-semibold text-white/90 mt-1">
                  {activeCase.metricLabel}
                </div>
                <div className="mt-4 pt-4 border-t border-white/20 w-full text-xs text-purple-100 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Resume Outcome</span>
                </div>
              </div>

              {/* Partner Platform Logos */}
              {activeCase.logos && activeCase.logos.length > 0 && (
                <div className="p-5 rounded-2xl bg-white/60 border border-slate-200/80 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block text-center">
                    Platform Ecosystem
                  </span>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {activeCase.logos.map((logo, lIdx) => (
                      <div
                        key={lIdx}
                        className="w-16 h-12 rounded-xl bg-white p-2 border border-slate-200/80 flex items-center justify-center shadow-2xs"
                      >
                        <Image
                          src={logo}
                          alt="Platform Logo"
                          width={48}
                          height={28}
                          className="object-contain max-h-7"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Topic Tags */}
              <div className="flex flex-wrap gap-1.5 justify-center">
                {activeCase.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/80 border border-slate-200 text-slate-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

            </div>

          </div>
        </GlassCard>

      </div>
    </section>
  );
}
