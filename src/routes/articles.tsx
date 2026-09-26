import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, FileText } from "lucide-react";
import { Page, Reveal } from "@/components/Page";

export const Route = createFileRoute("/articles")({
  head: () => ({
    meta: [
      { title: "Articles & Publications — K Yogeshwaran" },
      {
        name: "description",
        content:
          "NEURONIX'26 conference paper on next-generation electronics and intelligent signal systems, plus technical writing on automation.",
      },
      { property: "og:title", content: "Articles & Publications — K Yogeshwaran" },
      {
        property: "og:description",
        content: "Conference papers and technical writing on QA automation and deep learning.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Articles,
});

const items = [
  {
    Icon: FileText,
    tag: "Conference paper",
    title: "NEURONIX'26 — Next-Generation Electronics & Intelligent Signal Systems",
    body: "Research presented at the NEURONIX'26 national conference.",
  },
  {
    Icon: BookOpen,
    tag: "Coming soon",
    title: "Automation patterns that survive a redesign",
    body: "Locator strategy, POM boundaries and keeping suites green when the UI shifts.",
  },
  {
    Icon: BookOpen,
    tag: "Coming soon",
    title: "PyTest best practices for real projects",
    body: "Fixtures, parametrisation and reporting that a whole team will actually read.",
  },
  {
    Icon: BookOpen,
    tag: "Coming soon",
    title: "Setting up a deep learning workflow",
    body: "From dataset prep to evaluation loops for YOLO and LSTM pipelines.",
  },
];

function Articles() {
  return (
    <Page
      eyebrow="Articles"
      title="Writing & publications"
      intro="Research work and notes from building test automation and AI pipelines."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.07}>
            <article className="glow-card h-full rounded-2xl p-6">
              <a.Icon className="mb-4 text-primary" size={20} />
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{a.tag}</p>
              <h3 className="mt-2 text-lg font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Page>
  );
}
