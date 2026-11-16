import { useEffect, useState } from "react";
import { site } from "../data/site.js";

const links = [
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  // only used on phones; on wider screens the links are always visible
  const [open, setOpen] = useState(false);

  // let Escape close the menu
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main">
        {/* alt text keeps the name available to screen readers and search engines */}
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          <img src={site.logo} alt={`${site.name}, back to top`} width="80" height="48" />
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>

        <ul id="nav-links" className={`nav-links${open ? " open" : ""}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
