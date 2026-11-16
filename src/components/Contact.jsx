import { site } from "../data/site.js";

export default function Contact() {
  return (
    <section id="contact" className="section container" aria-labelledby="contact-title">
      <p className="label">Contact</p>
      <h2 id="contact-title" className="section-title">
        Let's talk.
      </h2>
      <p className="section-intro">
        For projects, opportunities or questions, email is the best way to reach me.
      </p>

      <a href={`mailto:${site.email}`} className="contact-email">
        {site.email}
      </a>

      <ul className="contact-links">
        {site.socials.map((social) => (
          <li key={social.href}>
            <a href={social.href} target="_blank" rel="noopener noreferrer">
              {social.label} <span aria-hidden="true">&#8599;</span>
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
