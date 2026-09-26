import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Page, Reveal } from "@/components/Page";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — K Yogeshwaran" },
      {
        name: "description",
        content:
          "Python, JavaScript, SQL, Selenium WebDriver, PyTest, Page Object Model, API testing with Postman and more.",
      },
      { property: "og:title", content: "Skills — K Yogeshwaran" },
      {
        property: "og:description",
        content: "Programming, QA automation, tooling and soft skills.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Skills,
});

const groups = [
  { title: "Programming & Scripting", items: ["Python", "JavaScript", "SQL"] },
  {
    title: "Testing & QA Automation",
    items: [
      "Selenium WebDriver",
      "PyTest",
      "Page Object Model",
      "API Testing",
      "Postman",
      "Dynamic Locators",
      "XPath / SVG strategies",
    ],
  },
  {
    title: "Core Technical & Tools",
    items: ["Microsoft Excel", "Computer Troubleshooting", "REST API Docs (Docgen CLI)"],
  },
  {
    title: "Soft Skills",
    items: ["Problem Solving", "Adaptability", "Team Collaboration", "Time Management"],
  },
];

function Tilt({ label }: { label: string }) {
  return (
    <motion.span
      whileHover={{ rotateX: -8, rotateY: 8, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      style={{ transformStyle: "preserve-3d" }}
      className="glow-card inline-flex rounded-full px-4 py-2 text-sm"
    >
      {label}
    </motion.span>
  );
}

function Skills() {
  return (
    <Page
      eyebrow="Skills"
      title="The toolkit"
      intro="Hover the badges — everything here is used day to day, not just listed."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.08}>
            <div className="glass h-full rounded-2xl p-6" style={{ perspective: 800 }}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <Tilt key={s} label={s} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Page>
  );
}
