"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ["hero", "about", "journey", "stories", "dashboard", "skills", "education", "contact"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Journey", href: "#journey", id: "journey" },
    { name: "Stories", href: "#stories", id: "stories" },
    { name: "Dashboard", href: "#dashboard", id: "dashboard" },
    { name: "Toolkit", href: "#skills", id: "skills" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[1240px] transition-all duration-300 ${
          isScrolled ? "scale-[0.99]" : "scale-100"
        }`}
      >
        <div className="w-full flex items-center justify-between px-5 py-3 md:px-7 md:py-3.5 rounded-full bg-white/75 backdrop-blur-xl border border-white/90 shadow-[0_12px_36px_-6px_rgba(91,65,193,0.09),0_2px_8px_rgba(0,0,0,0.02)]">
          {/* Brand Logo */}
          <Link
            href="#hero"
            className="flex items-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B41C1] rounded-lg"
          >
            <span className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#5B41C1] via-[#5893E0] to-[#43C2C2] p-[1.5px] shadow-sm shadow-purple-500/20">
              <span className="w-full h-full bg-white rounded-full flex items-center justify-center font-bold text-sm text-[#5B41C1] group-hover:scale-105 transition-transform">
                SM
              </span>
            </span>
            <div className="flex flex-col">
              <span className="font-bold text-slate-800 tracking-tight text-base group-hover:text-[#5B41C1] transition-colors">
                Swathy Moorthy
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 -mt-1 hidden sm:inline">
                E-Commerce Strategist
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-slate-100/60 border border-slate-200/40">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-white text-[#5B41C1] shadow-sm font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Quick Actions */}
          <div className="flex items-center gap-2.5">
            <a
              href="/Swathy_Resume.pdf"
              download="Swathy_Moorthy_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-[#5B41C1] to-[#5893E0] text-white shadow-md shadow-purple-600/15 hover:shadow-lg hover:shadow-purple-600/25 hover:brightness-105 active:scale-[0.98] transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <Link
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1 px-3.5 py-2 rounded-full text-xs font-semibold text-slate-700 bg-white/80 hover:bg-white border border-slate-200/80 shadow-sm hover:text-[#5B41C1] transition-all"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden p-2 rounded-full bg-slate-100/80 text-slate-700 hover:text-[#5B41C1] hover:bg-white border border-slate-200/80 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-md transition-opacity">
          <div className="fixed top-24 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-3xl p-6 border border-white/90 shadow-2xl flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#5B41C1]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Navigation</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-purple-50/80 hover:text-[#5B41C1] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="/Swathy_Resume.pdf"
                download="Swathy_Moorthy_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-[#5B41C1] text-white shadow-md shadow-purple-500/20"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
