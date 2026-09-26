import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, FileDown, Mail } from "lucide-react";
import { ClientCanvas } from "@/components/ClientCanvas";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "K Yogeshwaran — Automation Test Engineer & Software Developer" },
      {
        name: "description",
        content:
          "Portfolio of K Yogeshwaran, an automation test engineer and software developer building Selenium/PyTest frameworks, APIs and AI-driven tools.",
      },
      { property: "og:title", content: "K Yogeshwaran — Automation Test Engineer" },
      {
        property: "og:description",
        content: "Test automation frameworks and AI-driven solutions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-4 pt-32 pb-16">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 inline-flex rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.3em] text-primary">
            Available for work
          </p>
          <h1 className="text-5xl font-bold leading-[1.05] sm:text-7xl">
            K <span className="text-gradient">Yogeshwaran</span>
          </h1>
          <h2 className="mt-4 text-lg font-medium text-foreground/90 sm:text-xl">
            Automation Test Engineer &amp; Software Developer
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Detail-oriented engineer specialised in test automation frameworks
            and AI-driven solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/projects" className="btn-neon">
              Explore Work <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-ghost">
              <Mail size={16} /> Hire Me
            </Link>
            <a href="/K_Yogeshwaran.pdf" download="K Yogeshwaran.pdf" className="btn-ghost group">
              <FileDown size={16} className="transition-transform group-hover:translate-y-0.5" />
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[320px] w-full sm:h-[440px]"
        >
          <ClientCanvas />
        </motion.div>
      </div>
    </main>
  );
}
