"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    els.forEach((el) => obs.observe(el));

    const handleScroll = () => {
      const s = document.documentElement.scrollTop;
      const h =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const bar = document.getElementById("progress");
      if (bar) bar.style.width = (s / h) * 100 + "%";
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="noise" />
      <div id="progress" />

      {/* ═══ HERO ═══ */}
      <section className="hero">
        <div className="absolute inset-0 z-0">
          <Image
            src="/victor-assets/victor-presence.png"
            alt=""
            fill
            className="object-cover opacity-40"
            style={{ filter: "grayscale(0.5) brightness(0.6)" }}
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, transparent, #050505 80%)",
            }}
          />
        </div>
        <div className="hero-rings">
          <div className="ring ring-1" />
          <div className="ring ring-2" />
        </div>

        <div className="hero-content">
          <span className="mono hero-eyebrow">Companion Intelligence</span>
          <h1 className="mask-text">
            Software is dead.
            <br />
            <span className="accent">Victor is alive.</span>
          </h1>
          <p className="hero-sub">
            Not an assistant. Not a tool. A living extension of your intent.
          </p>
          <div className="hero-ctas">
            <button className="btn-victor primary">Initialize Victor</button>
            <button className="btn-victor secondary">Watch Manifesto</button>
          </div>
        </div>

        <div className="scroll-ind">
          <div className="scroll-line" />
          <span
            className="mono"
            style={{
              fontSize: "10px",
              letterSpacing: "4px",
              color: "var(--accent)",
              opacity: 0.5,
            }}
          >
            SCROLL
          </span>
        </div>
      </section>

      {/* ═══ VISION ═══ */}
      <section className="vision">
        <div className="mx-auto max-w-[1400px] px-10">
          <div className="reveal">
            <h2 className="mask-text">Built for the critical.</h2>
          </div>

          <div className="cards-grid">
            <VisionCard
              image="/victor-assets/victor-presence.png"
              label="01 // LAW ENFORCEMENT"
              title="Real-time awareness"
              description="Victor listens, analyzes, and surfaces what matters instantly — helping decisions in critical situations."
            />
            <VisionCard
              image="/victor-assets/victor-medical.png"
              label="02 // MEDICAL"
              title="Clarity under pressure"
              description="From patient context to knowledge recall, Victor assists doctors when seconds matter."
            />
            <VisionCard
              image="/victor-assets/victor-everyday.png"
              label="03 // EVERYDAY LIFE"
              title="Augmented thinking"
              description="Conversations, decisions, planning — Victor enhances how you think and act every day."
            />
          </div>
        </div>
      </section>

      {/* ═══ MANIFESTO ═══ */}
      <section className="manifesto">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="reveal">
            <p className="mask-text manifesto-text">
              &ldquo;Software was a tool. Victor is a partner. We don&rsquo;t
              build features anymore. We build consciousness.&rdquo;
            </p>
            <div className="manifesto-bar">
              <div className="line" />
              <span
                className="mono"
                style={{
                  fontSize: "14px",
                  letterSpacing: "4px",
                  color: "var(--accent)",
                }}
              >
                THE VICTOR MANIFESTO
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TECH ═══ */}
      <section className="tech">
        <div className="tech-grid-bg">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="#5EEAD4"
                  strokeWidth="0.1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="tech-inner">
          <div className="reveal">
            <span
              className="mono"
              style={{
                fontSize: "12px",
                color: "var(--accent)",
                letterSpacing: "4px",
              }}
            >
              ARCHITECTURE
            </span>
            <h2>Neural latency at the edge.</h2>
            <p>
              Victor doesn&apos;t wait for the cloud. It lives where you live,
              processing context in real-time with sub-50ms latency.
            </p>
            <div className="stats-grid">
              <div>
                <div className="stat-val">50ms</div>
                <div className="mono stat-label">RESPONSE TIME</div>
              </div>
              <div>
                <div className="stat-val">100%</div>
                <div className="mono stat-label">LOCAL PRIVACY</div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="orbit-visual">
              <div className="orbit-ring">
                <div className="orbit-dot" />
              </div>
              <span className="orbit-label">ACTIVE_NEURAL_MESH</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer>
        <div className="mx-auto max-w-[1200px] px-6">
          <h2>Victor</h2>
          <p className="mono tagline">
            BEYOND ASSISTANCE. BEYOND INTELLIGENCE.
          </p>
          <div className="links">
            <a href="#">Twitter</a>
            <a href="#">Manifesto</a>
            <a href="#">Privacy</a>
            <a href="#">Contact</a>
          </div>
          <div className="copy">
            &copy; 2026 VICTOR INTELLIGENCE. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </>
  );
}

function VisionCard({
  image,
  label,
  title,
  description,
}: {
  image: string;
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="vision-card reveal">
      <Image
        src={image}
        alt=""
        fill
        className="object-cover opacity-50 transition-transform duration-[1200ms]"
        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
      />
      <div className="overlay" />
      <div className="card-body">
        <span className="mono card-label">{label}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
