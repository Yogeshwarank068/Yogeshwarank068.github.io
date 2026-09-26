import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Page({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto w-full max-w-5xl px-4 pt-32"
    >
      <header className="mb-10">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl font-bold sm:text-5xl">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl text-muted-foreground">{intro}</p>}
      </header>
      {children}
    </motion.main>
  );
}

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
