export default function Footer() {
  return (
    <footer style={{ background: "var(--color-black)", borderTop: "1px solid #2a2725" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <span className="font-bebas text-lg" style={{ color: "rgba(255,255,255,0.4)", letterSpacing: "0.14em" }}>myFM</span>
        <div className="flex items-center gap-6">
          {["TWITTER/X", "INSTAGRAM"].map(l => (
            <a key={l} href="#" className="font-mono-custom text-xs" style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", transition: "color 0.2s" }}
            // onMouseEnter={e=>(e.currentTarget.style.color="rgba(255,255,255,0.7)")}
            // onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
            >
              {l}
            </a>
          ))}
        </div>
        <span className="font-mono-custom text-xs" style={{ color: "rgba(255,255,255,0.25)", letterSpacing: "0.08em" }}>© 2026 myFM</span>
      </div>
    </footer>
  );
}
