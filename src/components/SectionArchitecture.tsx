export default function SectionArchitecture() {
  return (
    <section id="architecture" className="tech">
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
          <span className="mono tech-label">ARCHITECTURE</span>
          <h2>
            Closer to the edge. Closer to the team. Closer to the decision.
          </h2>
          <p>
            Context enters locally. Signals, notes, recent events, and workflow
            state stay near the operating environment whenever deployment allows
            it.
          </p>
          <p>
            Interpretation happens in real time. Victor is optimized to compress
            raw signal into relevant context before the moment is gone.
          </p>
          <p>
            Human confirmation stays central. Suggestions can accelerate
            decisions, but responsibility remains with the professional using the
            system.
          </p>
          <div className="stats-grid">
            <div>
              <div className="stat-val">&lt;100ms</div>
              <div className="mono stat-label">TARGET INTERACTION LOOP</div>
            </div>
            <div>
              <div className="stat-val">Local-first</div>
              <div className="mono stat-label">DEPLOYMENT STRATEGY</div>
            </div>
            <div>
              <div className="stat-val">Human-led</div>
              <div className="mono stat-label">DECISION MODEL</div>
            </div>
          </div>
          <p className="tech-disclaimer">
            Target performance depends on deployment environment, device, and
            workflow integration. This page frames design intent, not an
            unqualified guarantee.
          </p>
        </div>

        <div className="reveal">
          <div className="arch-diagram" aria-label="Victor architecture flow">
            <div className="arch-node">
              <span className="arch-node-label mono">INPUT</span>
              <span className="arch-node-title">Signal capture</span>
            </div>
            <div className="arch-connector" aria-hidden="true" />
            <div className="arch-node arch-node-active">
              <span className="arch-node-label mono">CONTEXT</span>
              <span className="arch-node-title">Local processing</span>
            </div>
            <div className="arch-connector" aria-hidden="true" />
            <div className="arch-node">
              <span className="arch-node-label mono">INTERPRET</span>
              <span className="arch-node-title">Compress &amp; prioritize</span>
            </div>
            <div className="arch-connector" aria-hidden="true" />
            <div className="arch-node">
              <span className="arch-node-label mono">RECOMMEND</span>
              <span className="arch-node-title">Surface next steps</span>
            </div>
            <div className="arch-connector" aria-hidden="true" />
            <div className="arch-node">
              <span className="arch-node-label mono">CONFIRM</span>
              <span className="arch-node-title">Human decision</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
