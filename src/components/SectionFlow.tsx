const STEPS = [
  {
    step: "01",
    title: "Capture",
    description:
      "Bring signals, notes, and recent events into one context stream close to where work is happening.",
  },
  {
    step: "02",
    title: "Interpret",
    description:
      "Compress raw input into relevant facts, shifts, and emerging priorities instead of forcing users to scan everything manually.",
  },
  {
    step: "03",
    title: "Recommend",
    description:
      "Surface next-step suggestions, risk flags, and contextual reminders that fit the moment instead of generic assistant output.",
  },
  {
    step: "04",
    title: "Confirm",
    description:
      "Keep the final decision with the operator so action remains reviewable, accountable, and aligned with policy.",
  },
];

export default function SectionFlow() {
  return (
    <section className="section-flow">
      <div className="container-xl">
        <div className="reveal">
          <h2 className="mask-text">How Victor creates trust in the loop.</h2>
          <p className="hero-sub vision-intro-narrow">
            A stronger story needs a simple mechanism. Instead of abstract
            claims, here is a basic operating model you can evaluate.
          </p>
        </div>

        <div className="cards-grid cards-grid-flow">
          {STEPS.map((s) => (
            <div key={s.step} className="reveal flow-step">
              <span className="mono flow-step-label">STEP {s.step}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
