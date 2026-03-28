import WaitlistForm from "./WaitlistForm";

export default function FinalCTA() {
  return (
    <section style={{background:"var(--color-black)",borderBottom:"1px solid #2a2725"}}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="font-mono-custom text-xs mb-6" style={{color:"rgba(255,255,255,0.35)",letterSpacing:"0.16em",textTransform:"uppercase"}}>
              [ EARLY ACCESS ]
            </p>
            <h2 className="font-bebas" style={{
              fontSize:"clamp(64px,9vw,120px)",
              lineHeight:0.85,
              color:"white",
              letterSpacing:"0.01em"
            }}>
              BE FIRST.<br/>
              SHAPE<br/>
              THE SOUND.
            </h2>
          </div>

          {/* Right */}
          <div>
            <WaitlistForm source="cta" dark={true} />
            <p className="font-mono-custom text-xs mt-5" style={{color:"rgba(255,255,255,0.25)",letterSpacing:"0.12em"}}>
              [ NO SPAM. NO NOISE. JUST MUSIC. ]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
