"use client";
import { useState } from "react";
import axios from "axios";

interface Props { source: "hero" | "cta"; dark?: boolean; }

export default function WaitlistForm({ source, dark = false }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) return;
    setStatus("loading");
    try {
      const { data } = await axios.post("/api/waitlist", { Name: name, Email: email, Source: source });
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="py-4">
        <p className="font-bebas text-4xl" style={{color: dark ? "white" : "var(--color-black)"}}>[ YOU&apos;RE ON THE LIST. ]</p>
        <p className="font-sans-custom text-sm mt-2" style={{color: dark ? "rgba(255,255,255,0.5)" : "var(--color-text-muted)"}}>We&apos;ll reach out when doors open.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-md">
      <input
        className={dark ? "input-field-dark" : "input-field"}
        placeholder="Your Name"
        value={name}
        onChange={e => setName(e.target.value)}
        disabled={status === "loading"}
      />
      <input
        type="email"
        className={dark ? "input-field-dark" : "input-field"}
        placeholder="Your Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        disabled={status === "loading"}
        required
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className={dark ? "btn-outline-white" : "btn-primary"}
        style={{width:"100%",justifyContent:"center",display:"flex",alignItems:"center",gap:"8px"}}
      >
        {status === "loading" ? "JOINING..." : "JOIN THE WAITLIST →"}
      </button>
      {status === "error" && (
        <p className="font-mono-custom text-xs" style={{color:"var(--color-error)",letterSpacing:"0.08em"}}>[ ERROR — PLEASE TRY AGAIN ]</p>
      )}
    </form>
  );
}
