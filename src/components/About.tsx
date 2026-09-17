"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  MapPin,
  Languages,
  Award,
  Sparkles,
  TrendingUp,
  BarChart2,
  FileCheck2,
  Compass,
  ArrowUpRight,
} from "lucide-react";
import GlassCard from "./ui/GlassCard";
import GlassBadge from "./ui/GlassBadge";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const { personal, languages } = portfolioData;

  const pillars = [
    {
      title: "Data-Driven Channel Scaling",
      desc: "Analyzing seasonal marketplace GMV velocity and consumer search patterns to capture market share across 20+ global storefronts.",
      icon: <TrendingUp className="w-5 h-5 text-[#5B41C1]" />,
      badge: "Marketplace Strategy",
    },
    {
      title: "Content & Listing Precision",
      desc: "Resolving catalog attribute discrepancies, enriching product data, and lifting organic search visibility by over 60%.",
      icon: <FileCheck2 className="w-5 h-5 text-[#2563EB]" />,
      badge: "Listing Health",
    },
    {
      title: "Strategic Wireframing & UX",
      desc: "Designing high-converting digital storefront layouts and merchandising trending SKUs during peak holiday rushes for major retail SBUs.",
      icon: <BarChart2 className="w-5 h-5 text-[#0D9488]" />,
      badge: "Merchandising",
    },
    {
      title: "Cross-Border Account Leadership",
      desc: "Delivering structured executive reporting and aligning international multi-channel brand assortments across Europe and India.",
      icon: <Compass className="w-5 h-5 text-[#D97706]" />,
      badge: "Client Success",
    },
  ];

  return (
    <section id="about" className="relative w-full py-24 md:py-32 overflow-hidden bg-mesh-canvas">
      <div className="w-full max-w-[1300px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50/80 border border-purple-200/60 text-xs font-bold uppercase tracking-wider text-[#5B41C1]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Executive Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Bridging Analytical Precision with Global Commerce Growth
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A strategic mindset shaped by mathematical rigor, dual international Master's degrees in France, and hands-on execution across the world's most demanding digital retail channels.
          </p>
        </div>

        {/* Asymmetric 2-Column Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Portrait & Key Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Profile Card with Photo */}
            <GlassCard className="p-6 md:p-8 flex flex-col items-center text-center">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden p-1.5 bg-gradient-to-tr from-[#5B41C1] via-[#5893E0] to-[#43C2C2] shadow-xl shadow-purple-500/10 mb-6">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-purple-50">
                  <Image
                    src="/images/photo2.png"
                    alt="Swathy Moorthy"
                    fill
                    sizes="220px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                {personal.name}
              </h3>
              <p className="text-sm font-semibold text-[#5B41C1] mt-1">
                E-Commerce Strategist • Marketplace Specialist
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100/80 text-slate-700 border border-slate-200/80">
                  <MapPin className="w-3.5 h-3.5 text-[#5B41C1]" />
                  <span>Pondicherry, India</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-50 text-[#5B41C1] border border-purple-100">
                  <Award className="w-3.5 h-3.5" />
                  <span>Paris Experience</span>
                </span>
              </div>

              <p className="text-sm text-slate-600 mt-5 leading-relaxed text-left border-t border-slate-100 pt-5">
                {personal.aboutBio}
              </p>

              {/* Multilingual Badges */}
              <div className="w-full mt-6 pt-5 border-t border-slate-100 flex flex-col items-start gap-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Languages className="w-3.5 h-3.5 text-[#5B41C1]" />
                  <span>Languages</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {languages.map((l) => (
                    <span
                      key={l.language}
                      className="px-3 py-1 rounded-lg bg-white/90 border border-slate-200 text-xs font-medium text-slate-800 shadow-2xs"
                    >
                      <strong className="text-slate-900 font-semibold">{l.language}:</strong> {l.status}
                    </span>
                  ))}
                </div>
              </div>

            </GlassCard>

            {/* Academic Credentials Mini-Banner */}
            <GlassCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-[#5B41C1]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Academic Foundation</h4>
                  <p className="text-xs text-slate-500">Dual MBA in France & B.Sc. Mathematics</p>
                </div>
              </div>
              <div className="space-y-3 text-xs text-slate-600">
                <div className="p-3 rounded-xl bg-white/60 border border-slate-100">
                  <span className="font-semibold text-slate-900 block">MBA Marketing & E-Commerce Development</span>
                  <span>ESCC Business School, France (2024–2025)</span>
                </div>
                <div className="p-3 rounded-xl bg-white/60 border border-slate-100">
                  <span className="font-semibold text-slate-900 block">B.Sc. in Mathematics</span>
                  <span>Pondicherry University, India (2017–2020)</span>
                </div>
              </div>
            </GlassCard>

          </div>

          {/* Right Column: Strategic Pillars & Value Capabilities */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* 4 Pillars Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
              {pillars.map((p, idx) => (
                <GlassCard
                  key={p.title}
                  className="p-6 flex flex-col justify-between hover:border-purple-200/80"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center">
                        {p.icon}
                      </div>
                      <GlassBadge size="sm" variant={idx === 0 ? "purple" : idx === 1 ? "blue" : idx === 2 ? "teal" : "amber"}>
                        {p.badge}
                      </GlassBadge>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mb-2">
                      {p.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#5B41C1]">
                    <span>Verified Resume Skill</span>
                    <span>0{idx + 1}</span>
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* Proven Leadership Callout */}
            <GlassCard className="p-6 sm:p-7 bg-gradient-to-r from-purple-50/70 via-white/80 to-blue-50/60 border-purple-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#5B41C1]">
                      Leadership & Collaboration
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-extrabold text-slate-900">
                    Mentoring Teams & Coordinating Across Borders
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                    Proven track record leading content team revisions, onboarding junior analysts, and maintaining continuous delivery for multi-market retail operations.
                  </p>
                </div>
                <Link
                  href="#journey"
                  className="inline-flex items-center gap-1 px-4 py-2.5 rounded-xl bg-white font-semibold text-xs text-slate-800 border border-slate-200 shadow-sm hover:text-[#5B41C1] shrink-0"
                >
                  <span>View Career Timeline</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </GlassCard>

          </div>

        </div>

      </div>
    </section>
  );
}
