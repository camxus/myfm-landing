const activity = [
  {
    initials:"AR",
    handle:"@alexrecs",
    name:"Alex R.",
    artist:"MAGDALENA BAY",
    genre:"SYNTH-POP",
    time:"2H AGO",
    stars:4,
    review:"genuinely the best thing i've heard this year. it feels like it was made for exactly this moment."
  },
  {
    initials:"SO",
    handle:"@soph.fm",
    name:"Soph",
    artist:"DRAIN GANG",
    genre:"CLOUD RAP",
    time:"5H AGO",
    stars:5,
    review:"sounds like the internet made a person and that person made music. essential if you grew up online."
  },
  {
    initials:"TK",
    handle:"@theok",
    name:"Theo K.",
    artist:"BLADEE",
    genre:"EXPERIMENTAL",
    time:"YESTERDAY",
    stars:3,
    review:"bleak in a beautiful way. not for everyone, but if it clicks, it really clicks."
  }
];

function Stars({ count }: { count: number }) {
  return (
    <span>
      {[1,2,3,4,5].map(i=>(
        <span key={i} style={{color: i<=count ? "var(--color-black)" : "var(--color-border)",fontSize:"0.85rem"}}>★</span>
      ))}
    </span>
  );
}

export default function FriendsActivity() {
  return (
    <section style={{borderBottom:"1px solid var(--color-border)"}}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="section-label mb-3">[ 02 ] FRIENDS ACTIVITY</p>
            <h2 className="font-bebas" style={{fontSize:"clamp(52px,7vw,88px)",lineHeight:0.9,letterSpacing:"0.01em"}}>
              SEE WHAT<br/>THEY&apos;RE INTO
            </h2>
          </div>
          <p className="font-sans-custom text-sm" style={{color:"var(--color-text-muted)",maxWidth:320}}>
            Follow your friends&apos; music taste in real time. Read their reviews. Steal their best recommendations.
          </p>
        </div>

        {/* Feed rows */}
        <div style={{border:"1px solid var(--color-border)"}}>
          {/* Table header */}
          <div className="hidden md:grid" style={{
            gridTemplateColumns:"40px 180px 1fr auto 120px",
            gap:"16px",
            padding:"10px 20px",
            borderBottom:"1px solid var(--color-border)",
            background:"var(--color-bg-2)"
          }}>
            {["","USER","ARTIST & REVIEW","RATING","WHEN"].map(h=>(
              <span key={h} className="font-mono-custom text-xs uppercase" style={{color:"var(--color-text-muted)",letterSpacing:"0.12em"}}>{h}</span>
            ))}
          </div>

          {activity.map((item, i) => (
            <div
              key={i}
              className="card-hover flex flex-col md:grid gap-4 md:gap-4 p-5 md:p-5 transition-all"
              style={{
                gridTemplateColumns:"40px 180px 1fr auto 120px",
                alignItems:"start",
                borderBottom: i < activity.length-1 ? "1px solid var(--color-border)" : "none",
                background: "var(--color-surface)"
              }}
            >
              {/* Avatar */}
              <div style={{
                width:38,height:38,
                border:"1px solid var(--color-border)",
                display:"flex",alignItems:"center",justifyContent:"center",
                fontFamily:"var(--font-mono)",fontSize:"0.6rem",
                color:"var(--color-text-muted)",
                background:"var(--color-bg-2)",
                flexShrink:0
              }}>
                {item.initials}
              </div>

              {/* User */}
              <div>
                <p className="font-mono-custom text-xs font-medium" style={{letterSpacing:"0.06em"}}>{item.name}</p>
                <p className="font-mono-custom text-xs" style={{color:"var(--color-text-muted)",letterSpacing:"0.06em"}}>{item.handle}</p>
                <p className="font-mono-custom text-xs mt-1" style={{color:"var(--color-text-muted)"}}>logged →</p>
              </div>

              {/* Artist + Review */}
              <div>
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="font-bebas text-xl" style={{letterSpacing:"0.06em"}}>{item.artist}</span>
                  <span className="font-mono-custom text-xs" style={{
                    color:"var(--color-text-muted)",
                    border:"1px solid var(--color-border)",
                    padding:"2px 6px",
                    letterSpacing:"0.08em"
                  }}>[ {item.genre} ]</span>
                </div>
                <p className="font-playfair italic text-sm leading-snug" style={{color:"var(--color-text-muted)",maxWidth:400}}>
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              {/* Rating */}
              <div className="flex flex-col gap-1">
                <Stars count={item.stars} />
                <span className="font-mono-custom text-xs" style={{color:"var(--color-text-muted)"}}>{item.stars}/5</span>
              </div>

              {/* Time */}
              <p className="font-mono-custom text-xs" style={{color:"var(--color-text-muted)",letterSpacing:"0.1em"}}>{item.time}</p>
            </div>
          ))}
        </div>

        <button className="btn-outline w-full mt-4 py-4" style={{display:"block",textAlign:"center"}}>
          [ SEE FULL FEED → ]
        </button>
      </div>
    </section>
  );
}
