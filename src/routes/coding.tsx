import { createFileRoute } from "@tanstack/react-router";
import { Github, ArrowUpRight } from "lucide-react";
import { Page, Reveal } from "@/components/Page";

export const Route = createFileRoute("/coding")({
  head: () => ({
    meta: [
      { title: "Coding Portfolio — K Yogeshwaran" },
      {
        name: "description",
        content:
          "GitHub repositories, automated test suites and problem-solving milestones by K Yogeshwaran.",
      },
      { property: "og:title", content: "Coding Portfolio — K Yogeshwaran" },
      {
        property: "og:description",
        content: "Repositories, test suites and algorithmic practice.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Coding,
});

const metrics = [
  { value: "300+", label: "Problem-solving challenges" },
  { value: "50+", label: "Automated test cases written" },
  { value: "4", label: "End-to-end suites shipped" },
  { value: "3", label: "Languages in daily use" },
];

function Coding() {
  return (
    <Page
      eyebrow="Coding"
      title="Code, suites and practice"
      intro="Everything public lives on GitHub — frameworks, scripts and experiments."
    >
      <Reveal>
        <a
          href="https://github.com/Yogeshwarank068"
          target="_blank"
          rel="noreferrer"
          className="glow-card flex items-center justify-between gap-4 rounded-2xl p-6"
        >
          <div className="flex items-center gap-4">
            <Github className="text-primary" size={28} />
            <div>
              <h3 className="font-semibold">github.com/Yogeshwarank068</h3>
              <p className="text-sm text-muted-foreground">
                Automation frameworks, AI experiments and utilities.
              </p>
            </div>
          </div>
          <ArrowUpRight className="text-muted-foreground" size={20} />
        </a>
      </Reveal>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m, i) => (
          <Reveal key={m.label} delay={i * 0.08}>
            <div className="glow-card h-full rounded-2xl p-6">
              <p className="text-gradient font-display text-3xl font-bold">{m.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Page>
  );
}
