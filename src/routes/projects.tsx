import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { Page, Reveal } from "@/components/Page";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — K Yogeshwaran" },
      {
        name: "description",
        content:
          "AI road-safety detection with YOLO & LSTM, Flipkart Selenium automation, REST API testing and Smart LAN monitoring.",
      },
      { property: "og:title", content: "Projects — K Yogeshwaran" },
      {
        property: "og:description",
        content: "Selected automation and AI engineering projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    title: "AI Powered Road Safety Management & Accident Detection",
    short: "YOLO + LSTM pipeline for real-time accident detection.",
    details:
      "Real-time accident detection pipeline analysing spatial features and temporal video patterns. Covered data preprocessing, model evaluation and inference optimisation for live video streams.",
    tags: ["YOLO", "LSTM", "Python", "Computer Vision", "Deep Learning"],
  },
  {
    title: "Flipkart Product Search Automation",
    short: "Selenium + PyTest suite built on the Page Object Model.",
    details:
      "Test automation suite in Python, Selenium and PyTest using the Page Object Model. Automates search flows, multi-window switching, dynamic element and SVG handling, plus automated visual screenshot capture.",
    tags: ["Python", "Selenium", "PyTest", "POM", "Automation"],
  },
  {
    title: "REST API Testing & Documentation",
    short: "Postman collections with generated docs.",
    details:
      "Postman collection covering authentication and edge cases, with documentation generated automatically through the Docgen CLI.",
    tags: ["Postman", "API Testing", "Docgen", "QA"],
  },
  {
    title: "Smart LAN-Based Monitoring (Flask & Flutter)",
    short: "Network administration and monitoring tool.",
    details:
      "Network-based administration and monitoring tool with a Flask backend and Flutter client, showcased at TechXplore'25.",
    tags: ["Flask", "Flutter", "Network Security", "Python"],
  },
];

function Projects() {
  const [open, setOpen] = useState<number | null>(null);
  const active = open === null ? null : projects[open];

  return (
    <Page
      eyebrow="Projects"
      title="Selected work"
      intro="Click any card for the full breakdown."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.07}>
            <motion.button
              onClick={() => setOpen(i)}
              whileHover={{ rotateX: -6, rotateY: 6 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              style={{ transformStyle: "preserve-3d" }}
              className="glow-card h-full w-full rounded-2xl p-6 text-left"
            >
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.short}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass relative w-full max-w-lg rounded-3xl p-7"
            >
              <button
                aria-label="Close"
                onClick={() => setOpen(null)}
                className="absolute right-4 top-4 rounded-full border border-border p-2 text-muted-foreground hover:text-foreground"
              >
                <X size={16} />
              </button>
              <h3 className="pr-10 text-xl font-semibold">{active.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{active.details}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {active.tags.map((t) => (
                  <span key={t} className="rounded-full bg-secondary px-2.5 py-1 text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Page>
  );
}
