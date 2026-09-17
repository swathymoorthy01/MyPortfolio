"use client";

import React, { useState } from "react";
import {
  Activity,
  TrendingUp,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import GlassCard from "./ui/GlassCard";
import { portfolioData } from "../data/portfolioData";

export default function Dashboard() {
  const { metrics } = portfolioData;
  const [activeTab, setActiveTab] = useState<"momentum" | "coverage" | "activity">("momentum");

  const activityFeed = [
    {
      time: "Recent Milestone",
      action: "Seasonal Sales Analysis",
      detail: "Completed multi-platform trend report across 20 European marketplaces",
      channel: "Neteven SaaS",
      badge: "Analytics",
    },
    {
      time: "Catalog Optimization",
      action: "Listing Error Triage",
      detail: "Automated attribute reconciliation for Farfetch & Zalando fashion assortments",
      channel: "20 Platforms",
      badge: "Operations",
    },
    {
      time: "Cross-Marketplace Expansion",
      action: "Brand Reach Scaling",
      detail: "Achieved +90% brand exposure expansion through strategic placement",
      channel: "Retail Channels",
      badge: "Strategy",
    },
    {
      time: "Retail Content Governance",
      action: "PDP Specification Alignment",
      detail: "100% on-time delivery for high-volume Hardware & Home retail categories",
      channel: "Walmart & Highbourne",
      badge: "Governance",
    },
  ];

  const platformCoverage = [
    { name: "Amazon", score: 95, focus: "Catalog & Buy-Box Hygiene" },
    { name: "Zalando", score: 90, focus: "Fashion Attribute Mapping" },
    { name: "Farfetch", score: 88, focus: "Luxury Assortment Curation" },
    { name: "La Redoute", score: 85, focus: "Cross-Border French Storefronts" },
    { name: "Walmart", score: 92, focus: "SBU Trending SKU Merchandising" },
  ];

  return (
    <section id="dashboard" className="relative w-full py-24 md:py-32 overflow-hidden bg-mesh-canvas">
      <div className="w-full max-w-[1300px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50/80 border border-purple-200/60 text-xs font-bold uppercase tracking-wider text-[#5B41C1]">
            <Activity className="w-3.5 h-3.5" />
            <span>Interactive Centerpiece</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Commerce Intelligence Dashboard
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A portfolio summary illustrating the analytical frameworks, operational health monitoring, and performance momentum driving verified outcomes.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] text-slate-500 font-medium mt-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Illustrative Portfolio Summary • Based on Verified Resume Data</span>
          </div>
        </div>

        {/* Top 4 Key Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {metrics.map((m, i) => (
            <GlassCard
              key={m.label}
              className="p-6 border-white/90 hover:border-purple-300 transition-all shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  KPI 0{i + 1}
                </span>
                <span className="w-8 h-8 rounded-xl bg-purple-50 flex items-center justify-center text-[#5B41C1]">
                  <Sparkles className="w-4 h-4" />
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#5B41C1] to-[#5893E0] bg-clip-text text-transparent tracking-tight">
                {m.value}
              </div>
              <div className="text-sm font-bold text-slate-800 mt-1">
                {m.label}
              </div>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                {m.sublabel}
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>{m.trend}</span>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Dashboard Main Console */}
        <GlassCard className="p-6 sm:p-8 lg:p-10 border-white/95 shadow-xl shadow-purple-900/5">
          
          {/* Dashboard Nav Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-sm font-bold text-slate-800">
                Strategy & Execution Monitor
              </span>
            </div>

            <div className="flex items-center gap-1 p-1 rounded-2xl bg-slate-100/80 border border-slate-200/60">
              <button
                onClick={() => setActiveTab("momentum")}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "momentum"
                    ? "bg-white text-[#5B41C1] shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Performance Momentum
              </button>
              <button
                onClick={() => setActiveTab("coverage")}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "coverage"
                    ? "bg-white text-[#5B41C1] shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Marketplace Coverage
              </button>
              <button
                onClick={() => setActiveTab("activity")}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "activity"
                    ? "bg-white text-[#5B41C1] shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Strategic Action Feed
              </button>
            </div>
          </div>

          {/* Tab 1: Momentum Chart View */}
          {activeTab === "momentum" && (
            <div className="pt-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Visibility & Exposure Trajectory
                  </h4>
                  <p className="text-xs text-slate-500">
                    Simulated index tracking catalog enrichment and multi-channel expansion impacts
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#5B41C1]" />
                    <span>Brand Exposure (+90%)</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#43C2C2]" />
                    <span>Product Visibility (+60%)</span>
                  </span>
                </div>
              </div>

              {/* Native SVG Chart */}
              <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-purple-50/40 via-white/50 to-blue-50/20 p-4 border border-slate-100 flex items-end">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 600 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#5B41C1" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#5B41C1" stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="tealGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#43C2C2" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#43C2C2" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Grid Lines */}
                  <line x1="0" y1="50" x2="600" y2="50" stroke="#e2e8f0" strokeDasharray="4 4" />
                  <line x1="0" y1="100" x2="600" y2="100" stroke="#e2e8f0" strokeDasharray="4 4" />
                  <line x1="0" y1="150" x2="600" y2="150" stroke="#e2e8f0" strokeDasharray="4 4" />

                  {/* Area 1: Exposure */}
                  <path
                    d="M 0 170 Q 150 140 300 80 T 600 20 L 600 200 L 0 200 Z"
                    fill="url(#purpleGrad)"
                  />
                  {/* Curve 1: Exposure */}
                  <path
                    d="M 0 170 Q 150 140 300 80 T 600 20"
                    fill="none"
                    stroke="#5B41C1"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />

                  {/* Curve 2: Visibility */}
                  <path
                    d="M 0 180 Q 150 160 300 110 T 600 65"
                    fill="none"
                    stroke="#43C2C2"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="6 3"
                  />
                </svg>

                {/* X Axis Labels */}
                <div className="absolute inset-x-4 bottom-2 flex justify-between text-[11px] font-semibold text-slate-400">
                  <span>Initial Audit</span>
                  <span>Listing Resolution</span>
                  <span>Content Enrichment</span>
                  <span>Cross-Channel Scaling</span>
                  <span>Peak Growth</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Coverage Breakdown */}
          {activeTab === "coverage" && (
            <div className="pt-8 space-y-5">
              <div>
                <h4 className="text-lg font-bold text-slate-900">
                  Platform Operations Coverage
                </h4>
                <p className="text-xs text-slate-500">
                  Operational proficiency across global marketplace ecosystems
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {platformCoverage.map((p) => (
                  <div
                    key={p.name}
                    className="p-5 rounded-2xl bg-white/80 border border-slate-200/80 shadow-2xs space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-slate-900 text-base">{p.name}</span>
                      <span className="text-xs font-bold text-[#5B41C1] bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100">
                        {p.score}% Sync
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-[#5B41C1] to-[#5893E0] h-full rounded-full transition-all duration-700"
                        style={{ width: `${p.score}%` }}
                      />
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      Focus: <strong className="text-slate-700 font-semibold">{p.focus}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Action Feed */}
          {activeTab === "activity" && (
            <div className="pt-8 space-y-4">
              <div>
                <h4 className="text-lg font-bold text-slate-900">
                  Operational & Strategic Action Log
                </h4>
                <p className="text-xs text-slate-500">
                  Representative workflows executed throughout professional tenures
                </p>
              </div>

              <div className="space-y-3">
                {activityFeed.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/70 border border-slate-200/70 hover:bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-[#5B41C1] shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-900">{item.action}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-0.5">{item.detail}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end sm:self-auto text-xs text-slate-400">
                      <span className="font-semibold text-[#5B41C1] bg-purple-50 px-2 py-0.5 rounded-md">
                        {item.channel}
                      </span>
                      <span>{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </GlassCard>

      </div>
    </section>
  );
}
