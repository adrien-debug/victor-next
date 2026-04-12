import VisionCard from "./VisionCard";

export default function SectionEnvironments() {
  return (
    <section id="environments" className="section-cards">
      <div className="container-xl">
        <div className="reveal">
          <h2 className="mask-text">
            Built for the teams that operate under pressure.
          </h2>
        </div>

        <div className="cards-grid">
          <VisionCard
            image="/victor-assets/victor_hero_03_field_ops_00001_.png"
            label="01 // FIELD OPERATIONS"
            title="Real-time situational awareness"
            description="Surface the signal, compress the noise, and keep operators aligned when conditions change faster than interfaces can keep up."
          />
          <VisionCard
            image="/victor-assets/victor-medical.png"
            label="02 // CLINICAL TEAMS"
            title="Clarity when seconds matter"
            description="Bring patient context, recent events, and decision support into one human-led flow instead of forcing clinicians to reconstruct it manually."
          />
          <VisionCard
            image="/victor-assets/victor-everyday.png"
            label="03 // COMMAND LEADERS"
            title="Shared context for faster coordination"
            description="Keep leadership, dispatch, and frontline teams grounded in the same evolving picture so escalation stays intentional and accountable."
          />
        </div>
      </div>
    </section>
  );
}
