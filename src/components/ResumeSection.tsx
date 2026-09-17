"use client";

import React, { useState } from "react";
import {
  Download,
  FileText,
  GraduationCap,
  Languages,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";
import GlassCard from "./ui/GlassCard";
import GlassBadge from "./ui/GlassBadge";
import { portfolioData } from "../data/portfolioData";

export default function ResumeSection() {
  const { personal, education, languages, metrics } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="education" className="relative w-full py-24 md:py-32 overflow-hidden bg-mesh-canvas">
      <div className="w-full max-w-[1300px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50/80 border border-emerald-200/60 text-xs font-bold uppercase tracking-wider text-[#059669]">
            <FileText className="w-3.5 h-3.5" />
            <span>Credentials & Verification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Academic Degrees & Resume Preview
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Direct access to verified credentials, French dual Master's degrees, and the official downloadable resume document.
          </p>
        </div>

        {/* 2-Column Grid: Education on Left, Resume Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Education Degrees & Languages */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            
            <GlassCard className="p-6 sm:p-8 flex-1">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-purple-50 flex items-center justify-center text-[#5B41C1]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                      Formal Higher Education
                    </h3>
                    <p className="text-xs text-slate-500">Business School in France & University in India</p>
                  </div>
                </div>
                <GlassBadge size="sm" variant="purple">
                  Verified
                </GlassBadge>
              </div>

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-white/70 border border-slate-200/70 hover:bg-white transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xs font-bold text-[#5B41C1] bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-100">
                        {edu.period}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        {edu.location}
                      </span>
                    </div>
                    <h4 className="text-base font-extrabold text-slate-900 mt-2">
                      {edu.degree}
                    </h4>
                    <div className="text-xs font-semibold text-[#5B41C1] mt-0.5">
                      {edu.focus}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {edu.institution}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Language Fluency Glass Strip */}
            <GlassCard className="p-6 sm:p-7">
              <div className="flex items-center gap-2.5 mb-4">
                <Languages className="w-4 h-4 text-[#5B41C1]" />
                <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
                  International Working Languages
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {languages.map((l) => (
                  <div
                    key={l.language}
                    className="p-3.5 rounded-xl bg-white/80 border border-slate-200/70 text-center shadow-2xs"
                  >
                    <div className="text-sm font-black text-slate-900">{l.language}</div>
                    <div className="text-xs font-semibold text-[#5B41C1] mt-0.5">{l.status}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{l.level}</div>
                  </div>
                ))}
              </div>
            </GlassCard>

          </div>

          {/* Right Column: PDF Resume Preview & Download Center */}
          <div className="lg:col-span-6 flex flex-col">
            <GlassCard className="p-6 sm:p-8 flex-1 flex flex-col justify-between border-purple-200/80 shadow-xl shadow-purple-900/5">
              <div>
                {/* Header with Download Action */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#5B41C1] to-[#5893E0] flex items-center justify-center text-white shadow-md shadow-purple-500/20">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                        Official Resume Document
                      </h3>
                      <p className="text-xs text-slate-500">
                        Swathy_Resume.pdf • Updated September 2026
                      </p>
                    </div>
                  </div>

                  <a
                    href="/Swathy_Resume.pdf"
                    download="Swathy_Moorthy_Resume.pdf"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-[#5B41C1] hover:bg-[#4d34ad] text-white text-xs font-bold shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 transition-all shrink-0"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </a>
                </div>

                {/* Resume Summary Box */}
                <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-purple-50/40 border border-purple-100/70 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#5B41C1]">
                      Resume Snapshot
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      Pondicherry, India / Paris, France
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    E-commerce strategist with 3+ years of experience in e-commerce analytics, marketplace content management, digital operations, and campaign management. Successfully boosted brand visibility and drove sales growth across fashion, accessories, personal care, and home segments.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-purple-100/60">
                    {metrics.map((m) => (
                      <div key={m.label} className="text-center p-2 rounded-xl bg-white/70">
                        <div className="text-base font-black text-[#5B41C1]">{m.value}</div>
                        <div className="text-[10px] text-slate-500 font-medium line-clamp-1">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Links in Preview */}
                <div className="mt-6 space-y-2.5">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/70 border border-slate-200/80 text-xs">
                    <span className="text-slate-500 font-medium">Email Address:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-800">{personal.email}</span>
                      <button
                        onClick={handleCopyEmail}
                        className="p-1 text-slate-400 hover:text-[#5B41C1] rounded"
                        title="Copy email"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/70 border border-slate-200/80 text-xs">
                    <span className="text-slate-500 font-medium">LinkedIn Profile:</span>
                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-bold text-[#5B41C1] hover:underline"
                    >
                      <span>linkedin.com/in/swathy-moorthy</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Direct CTA */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <a
                  href="/Swathy_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-semibold text-xs shadow-sm hover:text-[#5B41C1] transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open PDF in New Browser Tab</span>
                </a>
              </div>

            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
}
