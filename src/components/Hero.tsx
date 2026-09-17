"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  TrendingUp,
  Globe,
  Layers,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import GlassCard from "./ui/GlassCard";
import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const { personal, metrics } = portfolioData;

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen pt-28 md:pt-36 pb-16 flex flex-col justify-between overflow-hidden bg-mesh-canvas"
    >
      {/* Ambient background soft light blurs */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-blue-200/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Background Subtle Dot Grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none -z-10" />

      <div className="w-full max-w-[1300px] mx-auto px-5 sm:px-8 lg:px-12 flex-1 flex flex-col justify-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Strategic Executive Bio & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-purple-200/70 shadow-sm shadow-purple-500/5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22C55E]"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#5B41C1]">
                {personal.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Hi, I'm <span className="bg-gradient-to-r from-[#5B41C1] via-[#5893E0] to-[#43C2C2] bg-clip-text text-transparent">Swathy Moorthy</span>.
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-700 tracking-tight">
                E-Commerce & Marketplace Strategist
              </p>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {personal.subheadline}
            </p>

            {/* Animated Strategy Chain */}
            <div className="w-full pt-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                Core Commerce Lifecycle
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {personal.strategyChain.map((step, idx) => (
                  <React.Fragment key={step}>
                    <span className="px-3 py-1.5 rounded-xl bg-white/85 backdrop-blur-md border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-sm flex items-center gap-1.5 hover:border-[#5B41C1]/40 hover:text-[#5B41C1] transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B41C1]"></span>
                      {step}
                    </span>
                    {idx < personal.strategyChain.length - 1 && (
                      <span className="text-slate-300 font-bold text-sm select-none">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <Link
                href="#journey"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#5B41C1] via-[#634ed1] to-[#5893E0] text-white font-semibold text-sm shadow-lg shadow-purple-600/20 hover:shadow-xl hover:shadow-purple-600/30 hover:brightness-105 active:scale-[0.98] transition-all"
              >
                <span>Explore My Journey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#stories"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/85 hover:bg-white text-slate-800 font-semibold text-sm border border-slate-200/90 shadow-sm hover:shadow-md hover:text-[#5B41C1] active:scale-[0.98] transition-all"
              >
                <span>View Case Studies</span>
                <Layers className="w-4 h-4 text-slate-400" />
              </Link>

              <a
                href="/Swathy_Resume.pdf"
                download="Swathy_Moorthy_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-purple-50/80 hover:bg-purple-100/80 text-[#5B41C1] font-semibold text-sm border border-purple-200/70 shadow-sm transition-all"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download</span> CV
              </a>
            </div>

            {/* Verified Credentials Pills */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Neteven (Lectra Group, Paris)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Cognizant</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>ESCC Business School France</span>
              </span>
            </div>

          </div>

          {/* Right Column: Luminous Floating Glass Portrait Showcase */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Ambient Backlight Glow Ring */}
            <div className="absolute inset-4 rounded-[40px] bg-gradient-to-tr from-[#5B41C1]/25 via-[#5893E0]/25 to-[#43C2C2]/20 blur-2xl -z-10" />

            {/* Central Glass Showcase Container */}
            <div className="relative w-full max-w-[420px] rounded-[36px] p-4 sm:p-5 bg-white/70 backdrop-blur-2xl border border-white/90 shadow-[0_20px_50px_rgba(91,65,193,0.12),0_1px_3px_rgba(0,0,0,0.03)]">
              
              {/* Inner Portrait Card */}
              <div className="relative w-full aspect-[4/5] rounded-[28px] overflow-hidden bg-gradient-to-b from-purple-100/60 via-blue-50/50 to-white/90 shadow-inner flex items-end justify-center">
                <Image
                  src="/images/hero1.png"
                  alt="Swathy Moorthy - E-Commerce & Marketplace Strategist"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top hover:scale-102 transition-transform duration-700 ease-out"
                />

                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/90 via-white/40 to-transparent pointer-events-none" />

                {/* Bottom glass tag over portrait */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/85 backdrop-blur-md border border-white/90 shadow-lg shadow-purple-900/5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-xs font-bold text-slate-800">
                      Open for Strategic Roles
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#5B41C1] bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100">
                    Paris • Remote
                  </span>
                </div>
              </div>

              {/* Floating Glass Badge 1: Top Right */}
              <div className="absolute -top-4 -right-4 sm:-right-6 p-3.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/95 shadow-xl shadow-purple-600/10 flex items-center gap-3 animate-soft-pulse">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-[#5B41C1]">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-slate-900 leading-none">
                    +90%
                  </div>
                  <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                    Brand Exposure
                  </div>
                </div>
              </div>

              {/* Floating Glass Badge 2: Bottom Left */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 p-3.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/95 shadow-xl shadow-blue-600/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#2563EB]">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-slate-900 leading-none">
                    20+ Channels
                  </div>
                  <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                    European Platforms
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Hero Bottom Metric Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200/60 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((m) => (
            <GlassCard
              key={m.label}
              className="p-4 sm:p-5 rounded-2xl border-white/90 hover:border-purple-200"
            >
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#5B41C1] to-[#5893E0] bg-clip-text text-transparent">
                {m.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">
                {m.label}
              </div>
              <div className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                {m.sublabel}
              </div>
            </GlassCard>
          ))}
        </div>

      </div>

      {/* Subtle Scroll Cue */}
      <div className="w-full flex justify-center items-center pt-8 text-slate-400 text-xs font-medium gap-1.5">
        <Link
          href="#about"
          className="flex items-center gap-1.5 hover:text-[#5B41C1] transition-colors py-2"
        >
          <span>Explore the strategy behind the numbers</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </Link>
      </div>

    </section>
  );
}
