import { Link } from "@tanstack/react-router";
import { Github, Instagram, Linkedin, Menu, X, FileDown } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/coding", label: "Coding" },
  { to: "/articles", label: "Articles" },
  { to: "/contact", label: "Contact" },
] as const;

export const socials = [
  { href: "https://github.com/Yogeshwarank068", label: "GitHub", Icon: Github },
  { href: "https://www.linkedin.com/in/yogeshwaran-k-4b33b3251", label: "LinkedIn", Icon: Linkedin },
  { href: "https://www.instagram.com/_yogesh_ig_?stkn=MWpxb2p0YWtveWMwaA==", label: "Instagram", Icon: Instagram },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-4 py-2.5">
        <Link to="/" className="font-display text-sm font-bold tracking-widest">
          K<span className="text-gradient">Y</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "bg-secondary/70 text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="/K Yogeshwaran.pdf" download="K Yogeshwaran.pdf" className="btn-neon hidden !px-4 !py-2 !text-xs sm:inline-flex">
            <FileDown size={14} /> Resume
          </a>
          <button
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-border p-2 md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass mx-auto mt-2 max-w-5xl rounded-3xl p-3 md:hidden">
          <ul className="grid grid-cols-2 gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                  activeProps={{ className: "bg-secondary/70 text-foreground" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export function SocialBar() {
  return (
    <footer className="mt-24 border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 text-center">
        <div className="flex gap-3">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="glow-card rounded-full p-3 text-muted-foreground hover:text-foreground"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} K Yogeshwaran · Salem, Tamil Nadu
        </p>
      </div>
    </footer>
  );
}
