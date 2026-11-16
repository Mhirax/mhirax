import { site } from "../data/site.js";

export default function Nav() {
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main">
        {/* alt text keeps the name available to screen readers and search engines */}
        <a href="#top" className="logo">
          <img src={site.logo} alt={`${site.name}, back to top`} width="92" height="56" />
        </a>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
