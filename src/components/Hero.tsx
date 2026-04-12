import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg-container">
        <Image
          src="/victor-assets/victor-presence.png"
          alt="Victor operational environment background"
          fill
          sizes="100vw"
          className="hero-bg-image"
          priority
        />
        <div className="hero-bg-overlay" />
      </div>
      <div className="hero-rings" aria-hidden="true">
        <div className="hero-ring hero-ring-1" />
        <div className="hero-ring hero-ring-2" />
      </div>

      <div className="hero-content">
        <span className="mono hero-eyebrow">
          Companion Intelligence For Critical Work
        </span>
        <h1 className="mask-text">
          Victor keeps context alive
          <br />
          <span className="accent">when decisions cannot wait.</span>
        </h1>
        <p className="hero-sub">
          A local-first companion intelligence layer for high-stakes teams.
          Helps clinicians, field operators, and command leaders keep the right
          context in view, move faster under pressure, and keep final decisions
          human-led.
        </p>
        <div className="hero-ctas">
          <a href="#contact" className="btn-victor primary">
            Request a working session
          </a>
          <a href="#architecture" className="btn-victor secondary">
            See the architecture
          </a>
        </div>
      </div>

      <div className="scroll-ind">
        <div className="scroll-line" />
        <span className="mono scroll-text">SCROLL</span>
      </div>
    </section>
  );
}
