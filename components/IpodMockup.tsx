export default function IpodMockup() {
  return (
    <div className="relative hidden lg:block" style={{width:200,flexShrink:0}}>
      <div style={{
        width:180,height:320,
        background:"linear-gradient(180deg,#e8e5e0 0%,#d4d0ca 100%)",
        border:"1px solid #bbb",
        boxShadow:"4px 8px 32px rgba(0,0,0,0.12)",
        display:"flex",flexDirection:"column",alignItems:"center",
        padding:"14px 12px 12px",gap:10,
        position:"relative"
      }}>
        {/* Top bar */}
        <div style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:2}}>
          <span style={{fontFamily:"var(--font-mono)",fontSize:"0.5rem",color:"#555",letterSpacing:"0.05em"}}>▶</span>
          <span style={{fontFamily:"var(--font-mono)",fontSize:"0.5rem",color:"#555",letterSpacing:"0.05em"}}>iPod</span>
          <span style={{fontFamily:"var(--font-mono)",fontSize:"0.5rem",color:"#555"}}>▮▮▮</span>
        </div>
        {/* Screen */}
        <div style={{
          width:"100%",background:"#c8dfd0",
          border:"1px solid #9bb",overflow:"hidden"
        }}>
          <div style={{background:"#2a5f9e",padding:"3px 8px"}}>
            <span style={{fontFamily:"var(--font-mono)",fontSize:"0.52rem",color:"white",letterSpacing:"0.04em"}}>myFM</span>
          </div>
          {["Playlists","Artists","Songs","Settings","Now Playing"].map((item,i)=>(
            <div key={item} className={`ipod-screen-item ${item==="Songs"?"active":""}`}>
              <span>{item}</span>
              <span>›</span>
            </div>
          ))}
        </div>
        {/* Wheel */}
        <div style={{
          width:100,height:100,
          border:"1px solid #bbb",
          borderRadius:"50% !important",
          background:"linear-gradient(135deg,#ddd 0%,#c8c4be 100%)",
          display:"flex",alignItems:"center",justifyContent:"center",
          marginTop:6,
          boxShadow:"inset 0 2px 6px rgba(0,0,0,0.1)"
        }}>
          <div style={{
            width:36,height:36,
            background:"linear-gradient(135deg,#e8e5e0 0%,#d0ccc6 100%)",
            border:"1px solid #bbb",
            borderRadius:"50% !important",
          }}/>
        </div>
        {/* Menu label */}
        <div style={{fontFamily:"var(--font-mono)",fontSize:"0.5rem",color:"#777",letterSpacing:"0.1em",marginTop:-4}}>MENU</div>
      </div>
    </div>
  );
}
