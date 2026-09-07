import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { WaveCanvas } from "@/components/ui/wave-canvas";

const items = [
  {
    title: "Fully Insured & Compliant",
    text: "CM3 prequalified, WorkSafe compliant, and covered by comprehensive public liability insurance—so you can engage us with complete confidence.",
    icon: "M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z",
  },
  {
    title: "Customized Solutions",
    text: "We tailor every cleaning plan to suit your site's unique needs and schedule—minimising disruption while ensuring spotless results every time.",
    icon: "M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4z",
  },
  {
    title: "Consistent Quality Control",
    text: "Supervisors run scheduled inspections against documented checklists, with findings logged and actioned—so quality never depends on chance.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 4a2 2 0 012-2h2a2 2 0 012 2v1H9V4zM9 13l2 2 4-4",
  },
];

export default function WhyUs() {
  return (
    <section id="process" className="relative overflow-hidden bg-navy-deep/75 py-20 text-white">
      <WaveCanvas className="absolute inset-0 h-full w-full opacity-70" />
      <div className="container-x relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block font-body text-sm font-semibold uppercase tracking-[0.2em] text-cyan">
            Why Us
          </span>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight sm:text-4xl">
            Our Commitment to Excellence
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <RevealItem
              key={item.title}
              className="glass rounded-2xl p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan/20">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d={item.icon} stroke="#3aa6b9" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-6 font-heading text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 font-body text-white/75">{item.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
