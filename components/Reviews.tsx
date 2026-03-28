const reviews = [
  {
    artist:"YEULE",
    tags:["SHOEGAZE","EXPERIMENTAL","ELECTRONIC"],
    stars:5,
    text:"fragile like a transmission from another frequency. every listen reveals something new buried in the mix.",
    reviewer:"@soph.fm"
  },
  {
    artist:"JPEGMAFIA",
    tags:["HIP-HOP","NOISE","AVANT-GARDE"],
    stars:5,
    text:"sounds like if someone took every genre i love and put them in a blender. chaotic and completely intentional.",
    reviewer:"@alexrecs"
  },
  {
    artist:"CAROLINE POLACHEK",
    tags:["ART-POP","VOCAL"],
    stars:4,
    text:"the voice does things voices shouldn't do. technically pop but spiritually something stranger and better.",
    reviewer:"@theok"
  },
];

function Stars({ count }: { count: number }) {
  return (
    <span>{[1,2,3,4,5].map(i=>(
      <span key={i} style={{color:i<=count?"var(--color-black)":"var(--color-border)",fontSize:"0.85rem"}}>★</span>
    ))}</span>
  );
}

export default function Reviews() {
  return (
    <section style={{borderBottom:"1px solid var(--color-border)"}}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-24">
        <p className="section-label mb-3">[ 04 ] WHAT PEOPLE WRITE</p>
        <h2 className="font-bebas mb-12" style={{fontSize:"clamp(44px,6vw,80px)",lineHeight:0.9,letterSpacing:"0.01em"}}>
          REVIEWS THAT ACTUALLY<br/>SAY SOMETHING
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0" style={{border:"1px solid var(--color-border)"}}>
          {reviews.map((r, i) => (
            <div
              key={i}
              className="card-hover p-8 flex flex-col gap-5"
              style={{
                background:"var(--color-surface)",
                borderRight: i < reviews.length-1 ? "1px solid var(--color-border)" : "none",
              }}
            >
              <div>
                <p className="font-bebas text-2xl mb-2" style={{letterSpacing:"0.06em"}}>{r.artist}</p>
                <div className="flex flex-wrap gap-2">
                  {r.tags.map(t=>(
                    <span key={t} className="font-mono-custom text-xs" style={{
                      border:"1px solid var(--color-border)",
                      padding:"2px 6px",
                      color:"var(--color-text-muted)",
                      letterSpacing:"0.08em"
                    }}>[ {t} ]</span>
                  ))}
                </div>
              </div>
              <p className="font-playfair italic text-lg leading-snug flex-1" style={{color:"var(--color-text)"}}>
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <span className="font-mono-custom text-xs" style={{color:"var(--color-text-muted)",letterSpacing:"0.06em"}}>{r.reviewer}</span>
                <Stars count={r.stars} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
