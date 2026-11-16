import { site } from "../data/site.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          &copy; {year} {site.name}. All rights reserved.
        </p>
        <ul className="footer-links">
          <li>
            <a href={`mailto:${site.email}`}>Email</a>
          </li>
          {site.socials.map((social) => (
            <li key={social.href}>
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
