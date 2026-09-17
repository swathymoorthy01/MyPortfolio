"use client";

import React, { useState } from "react";
import { Globe, MapPin, Compass, ShieldCheck } from "lucide-react";
import GlassCard from "./ui/GlassCard";
import GlassBadge from "./ui/GlassBadge";

interface Hub {
  id: string;
  name: string;
  region: string;
  role: string;
  x: number; // percentage
  y: number;
  type: "primary-hub" | "marketplace";
  metrics?: string;
  platforms?: string[];
  description: string;
}

const HUBS: Hub[] = [
  {
    id: "paris",
    name: "Paris, France",
    region: "Europe HQ & CSM",
    role: "Neteven — Lectra Group",
    x: 48,
    y: 38,
    type: "primary-hub",
    metrics: "20+ Marketplaces • 90%+ Exposure",
    platforms: ["Farfetch", "Zalando", "Amazon", "La Redoute"],
    description: "Led marketplace expansion, seasonal sales analysis, and back-office listing optimization across European fashion channels."
  },
  {
    id: "india",
    name: "Pondicherry & Chennai, India",
    region: "Analytics & Content Hub",
    role: "Cognizant & Lumina Datamatics",
    x: 71,
    y: 56,
    type: "primary-hub",
    metrics: "Walmart SBU Management • Wireframing",
    platforms: ["Walmart", "Highbourne", "E-commerce Retail"],
    description: "Curated large-scale retail catalog operations, customer journey wireframing, and discoverability enrichment."
  },
  {
    id: "zalando",
    name: "Zalando",
    region: "Pan-European Fashion",
    role: "Catalog Sync & Brand Exposure",
    x: 52,
    y: 32,
    type: "marketplace",
    metrics: "Fashion & Lifestyle Tier 1",
    description: "Seasonal catalog curation, attribute mapping, and listing issue resolution."
  },
  {
    id: "farfetch",
    name: "Farfetch",
    region: "Global Luxury",
    role: "Luxury Brand Visibility",
    x: 44,
    y: 33,
    type: "marketplace",
    metrics: "High-GMV Luxury Placement",
    description: "Premium fashion catalog synchronization and high-intent customer search enrichment."
  },
  {
    id: "amazon",
    name: "Amazon EU & US",
    region: "Multi-Region Marketplace",
    role: "Organic Discovery & Buy Box",
    x: 32,
    y: 42,
    type: "marketplace",
    metrics: "60% Search Lift",
    description: "Keyword-rich copy, schema optimization, and continuous error resolution."
  },
  {
    id: "laredoute",
    name: "La Redoute",
    region: "France & Iberia",
    role: "Omnichannel Merchandising",
    x: 46,
    y: 46,
    type: "marketplace",
    metrics: "French Consumer Reach",
    description: "Localization, seasonal promotional calendars, and retail compliance."
  },
  {
    id: "walmart",
    name: "Walmart US",
    region: "North American Enterprise",
    role: "SBU Category Management",
    x: 24,
    y: 45,
    type: "marketplace",
    metrics: "Beauty, Baby, Pets & Wellness",
    description: "Launch campaign planning, promotional wireframing, and SKU performance merchandising."
  }
];

export default function MarketplaceNetwork() {
  const [activeHub, setActiveHub] = useState<Hub>(HUBS[0]);

  return (
    <section id="network" className="relative w-full py-24 px-5 sm:px-8 lg:px-12 max-w-[1300px] mx-auto">
      {/* Background Soft Atmospheric Elements */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-4 mb-14">
        <GlassBadge variant="purple" size="md" className="gap-2">
          <Globe className="w-3.5 h-3.5" />
          <span>Cross-Border Ecosystem</span>
        </GlassBadge>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          Global Marketplace Network
        </h2>

        <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
          Anchored in <strong className="font-semibold text-slate-800">Paris, France</strong> and <strong className="font-semibold text-slate-800">India</strong>, bridging international marketplace operations, catalog feeds, and high-converting consumer touchpoints across 20+ channels.
        </p>
      </div>

      {/* Interactive Map & Glass Grid Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Visual Map Canvas Card */}
        <GlassCard className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden min-h-[460px] border-white/95 shadow-xl shadow-purple-900/5">
          
          {/* Subtle Top Metadata Bar */}
          <div className="flex items-center justify-between z-10 mb-4 pb-3 border-b border-slate-200/60">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-700 tracking-wide uppercase">
                Active Cross-Marketplace Sync
              </span>
            </div>
            <div className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#5B41C1]" />
              <span>Interactive Operations Map</span>
            </div>
          </div>

          {/* Interactive Graphic Area */}
          <div className="relative w-full h-[340px] sm:h-[380px] rounded-2xl bg-gradient-to-b from-purple-50/40 via-blue-50/30 to-indigo-50/40 border border-white/80 overflow-hidden flex items-center justify-center">
            
            {/* Ambient Map Grid & Lat/Long Guides */}
            <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
            <div className="absolute inset-x-0 top-1/2 h-px border-t border-dashed border-indigo-200/50 pointer-events-none" />
            <div className="absolute inset-y-0 left-1/2 w-px border-l border-dashed border-indigo-200/50 pointer-events-none" />
            
            {/* Stylized World Latitude Circles */}
            <div className="absolute w-[500px] h-[500px] rounded-full border border-purple-200/30 pointer-events-none" />
            <div className="absolute w-[360px] h-[360px] rounded-full border border-blue-200/40 pointer-events-none" />
            <div className="absolute w-[220px] h-[220px] rounded-full border border-teal-200/40 pointer-events-none" />

            {/* SVG Connecting Arcs */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#5B41C1" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#5893E0" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#43C2C2" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Arcs connecting Paris to Marketplaces */}
              <path d="M 48% 38% Q 40% 30% 24% 45%" fill="none" stroke="url(#lineGrad)" strokeWidth="1.8" strokeDasharray="4 4" className="animate-pulse opacity-70" />
              <path d="M 48% 38% Q 40% 34% 32% 42%" fill="none" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="4 4" className="opacity-80" />
              <path d="M 48% 38% Q 50% 34% 52% 32%" fill="none" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="3 3" className="opacity-85" />
              <path d="M 48% 38% Q 46% 34% 44% 33%" fill="none" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="3 3" className="opacity-85" />
              <path d="M 48% 38% Q 47% 42% 46% 46%" fill="none" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="3 3" className="opacity-85" />

              {/* Trans-Continental Spine: Paris to India */}
              <path d="M 48% 38% Q 60% 42% 71% 56%" fill="none" stroke="#5B41C1" strokeWidth="2.5" filter="url(#glow)" className="opacity-90" />
            </svg>

            {/* Hub Nodes */}
            {HUBS.map((hub) => {
              const isSelected = activeHub.id === hub.id;
              const isPrimary = hub.type === "primary-hub";

              return (
                <button
                  key={hub.id}
                  onClick={() => setActiveHub(hub)}
                  style={{ left: `${hub.x}%`, top: `${hub.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 z-10 focus:outline-none`}
                  aria-label={`Select hub ${hub.name}`}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Ring aura for primary hubs */}
                    {isPrimary && (
                      <span className="absolute w-12 h-12 rounded-full bg-purple-400/25 animate-ping pointer-events-none" />
                    )}

                    {/* Node Core */}
                    <div
                      className={`rounded-full transition-all duration-300 flex items-center justify-center shadow-lg ${
                        isPrimary
                          ? isSelected
                            ? "w-8 h-8 bg-[#5B41C1] text-white ring-4 ring-purple-200/90 scale-110"
                            : "w-7 h-7 bg-white text-[#5B41C1] border-2 border-[#5B41C1] hover:scale-110"
                          : isSelected
                          ? "w-6 h-6 bg-[#5893E0] text-white ring-4 ring-blue-200/90 scale-110"
                          : "w-5 h-5 bg-white text-slate-700 border border-slate-300 hover:border-[#5893E0] hover:scale-110"
                      }`}
                    >
                      {isPrimary ? (
                        <MapPin className="w-4 h-4" />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-current" />
                      )}
                    </div>

                    {/* Permanent Label for Primaries or Active */}
                    {(isPrimary || isSelected) && (
                      <span className={`absolute top-full mt-1.5 whitespace-nowrap px-2 py-0.5 rounded-md text-[11px] font-bold shadow-sm backdrop-blur-md transition-all ${
                        isSelected
                          ? "bg-slate-900 text-white"
                          : "bg-white/90 text-slate-800 border border-slate-200/80"
                      }`}>
                        {hub.name}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Quick Hub Selector Pills */}
          <div className="mt-4 pt-3 border-t border-slate-200/50 flex flex-wrap items-center justify-center gap-2 z-10">
            {HUBS.map((hub) => (
              <button
                key={hub.id}
                onClick={() => setActiveHub(hub)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  activeHub.id === hub.id
                    ? "bg-[#5B41C1] text-white shadow-sm shadow-purple-900/20 scale-105"
                    : "bg-white/70 hover:bg-white text-slate-600 border border-slate-200/70"
                }`}
              >
                {hub.name}
              </button>
            ))}
          </div>
        </GlassCard>

        {/* Selected Node Details Card */}
        <GlassCard className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between border-white/95 shadow-xl shadow-purple-900/5 relative overflow-hidden">
          
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                activeHub.type === "primary-hub"
                  ? "bg-purple-100/80 text-[#5B41C1] border border-purple-200"
                  : "bg-blue-100/80 text-[#5893E0] border border-blue-200"
              }`}>
                {activeHub.region}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                Channel Spec
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                {activeHub.name}
              </h3>
              <p className="text-sm font-semibold text-[#5B41C1] mt-0.5">
                {activeHub.role}
              </p>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {activeHub.description}
            </p>

            {activeHub.metrics && (
              <div className="p-3.5 rounded-xl bg-purple-50/60 border border-purple-100/80">
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Operational Impact
                </p>
                <p className="text-sm font-extrabold text-[#5B41C1] mt-0.5">
                  {activeHub.metrics}
                </p>
              </div>
            )}

            {activeHub.platforms && (
              <div className="space-y-2">
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Key Connected Portals
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {activeHub.platforms.map((plat) => (
                    <span
                      key={plat}
                      className="px-2.5 py-1 rounded-lg bg-white/80 border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs"
                    >
                      {plat}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Recruiter Callout */}
          <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Verified Multi-Marketplace Experience
            </span>
          </div>
        </GlassCard>

      </div>
    </section>
  );
}
