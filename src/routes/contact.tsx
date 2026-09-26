import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Send, CheckCircle2, Loader2 } from "lucide-react";
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
          "Get in touch with K Yogeshwaran — krishyogesh8@gmail.com, Salem, Tamil Nadu, +91 9750367532.",
      },
      { property: "og:title", content: "Contact — K Yogeshwaran" },
      { property: "og:description", content: "Email, phone and social links." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const EMAIL = "krishyogesh8@gmail.com";

const schema = z.object({
  name: z.string().trim().min(1, "Please add your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(1, "Please add a message").max(1000),
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setError(null);
    setIsSubmitting(true);

    try {
      // Free endpoint - sends directly to krishyogesh8@gmail.com without any API keys
      const response = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: parsed.data.name,
          email: parsed.data.email,
          message: parsed.data.message,
          _subject: `New Portfolio Enquiry from ${parsed.data.name}`,
          _template: "table",
        }),
      });

      const result = await response.json();

      if (response.ok && (result.success === "true" || result.success === true)) {
        setIsSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setError("Failed to send message. Please try again or use direct email.");
      }
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
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
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <CheckCircle2 className="mb-3 text-emerald-500" size={42} />
                <h3 className="text-lg font-semibold">Message Sent!</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Thanks for reaching out! I will get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="btn-neon mt-6"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    className={field}
                    placeholder="Your name"
                    maxLength={100}
                    value={form.name}
                    disabled={isSubmitting}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <input
                    className={field}
                    placeholder="Your email"
                    type="email"
                    maxLength={255}
                    value={form.email}
                    disabled={isSubmitting}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <textarea
                  className={`${field} mt-3 min-h-36 resize-y`}
                  placeholder="Tell me about the role or project…"
                  maxLength={1000}
                  value={form.message}
                  disabled={isSubmitting}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-neon mt-4 flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      Sending... <Loader2 size={15} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Send message <Send size={15} />
                    </>
                  )}
                </button>
              </>
            )}
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