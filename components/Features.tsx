const cards = [
  {
    tag:"[ LOG ]",
    title:"LOG & RATE ARTISTS",
    body:"Keep a diary of every artist you discover. Rate them. Write a line about why they matter. Never lose a rec again.",
    bg:"var(--color-black)",
    color:"white",
    span:2
  },
  {
    tag:"[ SOCIAL ]",
    title:"FRIEND ACTIVITY FEED",
    body:"See what your network logged today. Read their reviews. Follow taste, not algorithms.",
    bg:"var(--color-accent)",
    color:"var(--color-black)",
    span:1
  },
  {
    tag:"[ PROFILE ]",
    title:"YOUR TASTE PROFILE",
    body:"A public page showing exactly who you've been listening to. Share it. Own it.",
    bg:"var(--color-surface)",
    color:"var(--color-black)",
    span:1
  },
  {
    tag:"[ WEEKLY ]",
    title:"SUNDAY DIGEST",
    body:"A personal radio-style recap of your listening week. What you logged. What your friends loved.",
    bg:"var(--color-surface)",
    color:"var(--color-black)",
    span:1
  },
];

export default function Features() {
  return (
    <section style={{borderBottom:"1px solid var(--color-border)",background:"var(--color-bg-2)"}}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-24">
        <p className="section-label mb-3">[ 03 ] BUILT FOR THIS</p>
        <h2 className="font-bebas mb-12" style={{fontSize:"clamp(48px,7vw,88px)",lineHeight:0.9,letterSpacing:"0.01em"}}>
          EVERYTHING MUSIC DESERVES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0" style={{border:"1px solid var(--color-border)"}}>
          {cards.map((c, i) => (
            <div
              key={i}
              className={`card-hover p-8 flex flex-col gap-4 ${i===0 ? "md:col-span-2" : ""}`}
              style={{
                background:c.bg,
                color:c.color,
                borderRight: i < cards.length-1 ? "1px solid var(--color-border)" : "none",
                borderBottom: i < 2 ? "1px solid var(--color-border)" : "none",
              }}
            >
              <span className="font-mono-custom text-xs" style={{
                letterSpacing:"0.14em",
                color: c.bg === "var(--color-black)" ? "rgba(255,255,255,0.4)" : "var(--color-text-muted)"
              }}>{c.tag}</span>
              <h3 className="font-bebas text-3xl" style={{letterSpacing:"0.04em",lineHeight:1}}>{c.title}</h3>
              <p className="font-sans-custom text-sm leading-relaxed" style={{
                color: c.bg === "var(--color-black)" ? "rgba(255,255,255,0.65)" : "var(--color-text-muted)"
              }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
