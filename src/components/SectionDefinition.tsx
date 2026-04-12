export default function SectionDefinition() {
  return (
    <section id="definition" className="section-definition">
      <div className="container-lg">
        <div className="reveal">
          <h2 className="mask-text manifesto-title">
            Not a vague promise. A concrete intelligence layer.
          </h2>
          <p className="hero-sub manifesto-intro">
            Victor is a local-first operational layer that keeps context close to
            the user, structures it in real time, and suggests next steps without
            removing human judgment.
          </p>
          <div className="stats-grid stats-grid-alt">
            <div className="stat-item">
              <div className="mono stat-label stat-label-top">CATEGORY</div>
              <div className="stat-val stat-val-alt">
                Companion intelligence
              </div>
              <p className="stat-desc">
                Victor sits beside the operator, not above them. Designed to
                support workflow awareness, not replace professional
                accountability.
              </p>
            </div>
            <div className="stat-item">
              <div className="mono stat-label stat-label-top">DEPLOYMENT</div>
              <div className="stat-val stat-val-alt">
                Local-first execution
              </div>
              <p className="stat-desc">
                Runs close to the environment where work happens. Keeps latency
                lower and gives deployment choices aligned with privacy-sensitive
                contexts.
              </p>
            </div>
            <div className="stat-item">
              <div className="mono stat-label stat-label-top">OUTPUT</div>
              <div className="stat-val stat-val-alt">Actionable context</div>
              <p className="stat-desc">
                Not more text. Relevant context, clear recommendations, and
                better timing during high-consequence moments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
