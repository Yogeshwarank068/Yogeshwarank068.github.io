import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { Page, Reveal } from "@/components/Page";
import { socials } from "@/components/Navbar";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — K Yogeshwaran" },
      {
        name: "description",
        content:
          "Get in touch with K Yogeshwaran — yogeshwarank068@gmail.com, Salem, Tamil Nadu, +91 9750367532.",
      },
      { property: "og:title", content: "Contact — K Yogeshwaran" },
      { property: "og:description", content: "Email, phone and social links." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const EMAIL = "yogeshwarank068@gmail.com";

const schema = z.object({
  name: z.string().trim().min(1, "Please add your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(1, "Please add a message").max(1000),
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState<string | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }
    setError(null);
    const { name, email, message } = parsed.data;
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60";

  return (
    <Page
      eyebrow="Contact"
      title="Let's build something"
      intro="Open to automation, QA and software engineering roles as well as freelance work."
    >
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <form onSubmit={submit} className="glass rounded-2xl p-6">
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                className={field}
                placeholder="Your name"
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                className={field}
                placeholder="Your email"
                type="email"
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <textarea
              className={`${field} mt-3 min-h-36 resize-y`}
              placeholder="Tell me about the role or project…"
              maxLength={1000}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
            <button type="submit" className="btn-neon mt-4">
              Send message <Send size={15} />
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-4">
            <a href={`mailto:${EMAIL}`} className="glow-card flex items-center gap-3 rounded-2xl p-5">
              <Mail className="text-primary" size={18} />
              <span className="text-sm">{EMAIL}</span>
            </a>
            <a href="tel:+919750367532" className="glow-card flex items-center gap-3 rounded-2xl p-5">
              <Phone className="text-primary" size={18} />
              <span className="text-sm">+91 97503 67532</span>
            </a>
            <div className="glow-card flex items-center gap-3 rounded-2xl p-5">
              <MapPin className="text-primary" size={18} />
              <span className="text-sm">Salem, Tamil Nadu</span>
            </div>
            <div className="flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="glow-card flex-1 rounded-2xl p-5 text-center"
                >
                  <Icon className="mx-auto text-primary" size={18} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Page>
  );
}
