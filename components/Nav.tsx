"use client";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: "rgba(240,237,230,0.95)", backdropFilter: "blur(8px)", borderBottom: "1px solid var(--color-border)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <span className="font-bebas text-2xl" style={{ letterSpacing: "0.14em" }}>myFM</span>
        <div className="hidden md:flex items-center gap-8">
          {["Discover", "Community", "About"].map(l => (
            <a key={l} href="#" className="font-mono-custom text-xs uppercase transition-colors duration-200" style={{ color: "var(--color-text-muted)", letterSpacing: "0.14em" }}
            // onMouseEnter={e=>(e.currentTarget.style.color="var(--color-text)")}
            // onMouseLeave={e=>(e.currentTarget.style.color="var(--color-text-muted)")}
            >
              {l}
            </a>
          ))}
          <button className="btn-outline py-2 px-5">Request Access</button>
        </div>
        <button className="md:hidden btn-outline py-2 px-4">Access</button>
      </div>
    </nav>
  );
}
