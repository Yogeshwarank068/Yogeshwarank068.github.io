import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Languages, Presentation, TestTube2 } from "lucide-react";
import { Page, Reveal } from "@/components/Page";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — K Yogeshwaran" },
      {
        name: "description",
        content:
          "Computer Science Engineering graduate from UCE Villupuram with a focus on modular test automation and applied AI.",
      },
      { property: "og:title", content: "About — K Yogeshwaran" },
      {
        property: "og:description",
        content: "Background, education and highlights of K Yogeshwaran.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const cards = [
  {
    Icon: GraduationCap,
    title: "Education",
    body: "B.E. Computer Science Engineering — University College of Engineering, Villupuram (2022–2026), 7.9 CGPA.",
    span: "sm:col-span-2",
  },
  {
    Icon: TestTube2,
    title: "Test Automation",
    body: "Modular frameworks built on the Page Object Model, robust locator strategies and rich HTML reporting.",
    span: "",
  },
  {
    Icon: Presentation,
    title: "Conferences & Contests",
    body: "NEURONIX'26 National Conference research presentation; TechXplore'25 presentation for Smart LAN Based Monitoring using Flask and Flutter.",
    span: "sm:col-span-2",
  },
  { Icon: Languages, title: "Languages", body: "English · Tamil", span: "" },
];

function About() {
  return (
    <Page
      eyebrow="About"
      title="Engineering quality into every build"
      intro="I design test automation that scales, and I like the systems work behind it — reliable locators, clean reports, and tooling that saves a team hours a week."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <div className={`glow-card h-full rounded-2xl p-6 ${c.span}`}>
              <c.Icon className="mb-4 text-primary" size={22} />
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Page>
  );
}
