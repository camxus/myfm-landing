import WaitlistForm from "./WaitlistForm";
import IpodMockup from "./IpodMockup";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-14" style={{borderBottom:"1px solid var(--color-border)"}}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 w-full py-24">
        <div className="flex items-center gap-16 justify-between">
          {/* Left */}
          <div className="flex-1 max-w-2xl">
            <p className="section-label fade-in-1 mb-6">[ EARLY ACCESS — 2026 ]</p>
            <h1 className="font-bebas fade-in-2 mb-8" style={{
              fontSize:"clamp(72px,10vw,140px)",
              lineHeight:0.88,
              letterSpacing:"0.01em",
              color:"var(--color-black)"
            }}>
              YOUR<br/>
              MUSIC<br/>
              <span style={{marginLeft:"",display:"block"}}>TASTE,</span>
              DOCUMENTED.
            </h1>
            <p className="font-sans-custom fade-in-3 mb-10 text-lg leading-relaxed" style={{color:"var(--color-text-muted)",maxWidth:460}}>
              myFM is where you log artists, write reviews, and see what your friends are actually listening to — before it blows up.
            </p>
            <div className="fade-in-4">
              <WaitlistForm source="hero" />
              <p className="font-mono-custom text-xs mt-4" style={{color:"var(--color-text-muted)",letterSpacing:"0.12em"}}>
                ✦ 2,400 PEOPLE ALREADY WAITING
              </p>
            </div>
          </div>
          {/* Right — iPod */}
          <IpodMockup />
        </div>
      </div>
    </section>
  );
}
