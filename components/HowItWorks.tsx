const steps = [
  { num:"01", title:"SIGN UP", body:"Connect your listening history. Takes 30 seconds." },
  { num:"02", title:"LOG & REVIEW", body:"Find an artist. Log them. Write a review. Rate them." },
  { num:"03", title:"FOLLOW & DISCOVER", body:"See your friends' logs. Find your next obsession." },
];

export default function HowItWorks() {
  return (
    <section style={{borderBottom:"1px solid var(--color-border)",background:"var(--color-bg-2)"}}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-24">
        <p className="section-label mb-3">[ 05 ] GET STARTED</p>
        <h2 className="font-bebas mb-16" style={{fontSize:"clamp(48px,7vw,88px)",lineHeight:0.9,letterSpacing:"0.01em"}}>
          HOW IT WORKS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0" style={{border:"1px solid var(--color-border)"}}>
          {steps.map((s, i) => (
            <div
              key={i}
              className="card-hover p-10 flex flex-col gap-4"
              style={{
                background:"var(--color-surface)",
                borderRight: i < steps.length-1 ? "1px solid var(--color-border)" : "none",
              }}
            >
              <span className="font-bebas" style={{
                fontSize:120,
                lineHeight:0.85,
                color:"var(--color-border)",
                letterSpacing:"-0.02em",
                userSelect:"none"
              }}>{s.num}</span>
              <h3 className="font-bebas text-3xl mt-4" style={{letterSpacing:"0.04em"}}>{s.title}</h3>
              <p className="font-sans-custom text-sm leading-relaxed" style={{color:"var(--color-text-muted)"}}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
