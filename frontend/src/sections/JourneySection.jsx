import SectionHeader from "../components/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Skill Assessment",
    description: "Evaluate your technical baseline and curate a customized learning roadmap aligned with industry goals.",
  },
  {
    number: "02",
    title: "Deep-Dive Training",
    description: "Learn modern frameworks, tooling, design principles, and engineering best practices hands-on.",
  },
  {
    number: "03",
    title: "Real-World Projects",
    description: "Collaborate in agile teams on production-grade client apps with code reviews and mentoring.",
  },
  {
    number: "04",
    title: "Career Placement",
    description: "Refine your resume, conquer technical interviews, and match directly with hiring enterprise partners.",
  },
];

function JourneySection() {
  return (
    <section className="path">
      <div className="container">
        <SectionHeader
          eyebrow="YOUR ROADMAP"
          title="From Student to Industry Professional"
          description="A clear, structured pathway designed to transform conceptual knowledge into production-ready capability."
        />

        <div className="steps">
          <div className="pathline" />

          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="stepno">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JourneySection;
