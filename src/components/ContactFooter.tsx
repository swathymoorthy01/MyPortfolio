"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  ArrowUpRight,
  Copy,
  Check,
  Sparkles,
  Send,
} from "lucide-react";
import GlassCard from "./ui/GlassCard";
import { portfolioData } from "../data/portfolioData";

export default function ContactFooter() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="relative w-full pt-20 pb-12 overflow-hidden bg-mesh-canvas border-t border-slate-200/60">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-300/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-[1300px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main Glass Contact Banner */}
        <GlassCard className="p-8 sm:p-12 lg:p-16 border-white/95 shadow-2xl shadow-purple-900/10 mb-16 text-center relative overflow-hidden">
          
          {/* Ambient Inner Shimmer */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-purple-200/40 via-blue-100/20 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50/80 border border-purple-200/70 text-xs font-bold uppercase tracking-wider text-[#5B41C1]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Let's Build Better Commerce Together.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Available for full-time opportunities, high-growth marketplace expansion roles, and strategic digital commerce advisory.
            </p>

            {/* Email Copy Card */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`mailto:${personal.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#5B41C1] to-[#5893E0] text-white font-bold text-sm shadow-lg shadow-purple-600/20 hover:shadow-xl hover:shadow-purple-600/30 hover:brightness-105 active:scale-[0.98] transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email Directly</span>
                <Send className="w-3.5 h-3.5 ml-1" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200/90 shadow-sm active:scale-[0.98] transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 font-bold">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Details Strip */}
            <div className="pt-8 mt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#5B41C1]" />
                <span>Pondicherry, India / Paris, France</span>
              </span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-bold text-[#5B41C1] hover:underline"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
                </svg>
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </GlassCard>

        {/* Footer Navigation & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6 border-t border-slate-200/60 text-xs text-slate-500">
          
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#5B41C1] to-[#5893E0] p-[1px] flex items-center justify-center">
              <span className="w-full h-full bg-white rounded-full flex items-center justify-center font-bold text-xs text-[#5B41C1]">
                SM
              </span>
            </span>
            <span className="font-bold text-slate-800 text-sm">Swathy Moorthy</span>
            <span className="text-slate-300">|</span>
            <span>E-Commerce & Marketplace Strategist</span>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 font-semibold text-slate-600">
            <Link href="#hero" className="hover:text-[#5B41C1] transition-colors">Home</Link>
            <Link href="#about" className="hover:text-[#5B41C1] transition-colors">About</Link>
            <Link href="#journey" className="hover:text-[#5B41C1] transition-colors">Journey</Link>
            <Link href="#stories" className="hover:text-[#5B41C1] transition-colors">Stories</Link>
            <Link href="#dashboard" className="hover:text-[#5B41C1] transition-colors">Dashboard</Link>
            <Link href="#skills" className="hover:text-[#5B41C1] transition-colors">Toolkit</Link>
            <a href="/Swathy_Resume.pdf" download="Swathy_Moorthy_Resume.pdf" className="text-[#5B41C1] hover:underline">
              Resume (PDF)
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-slate-400">
            © {new Date().getFullYear()} Swathy Moorthy. All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}
