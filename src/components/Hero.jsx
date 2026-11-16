import { site } from "../data/site.js";

export default function Hero() {
  const { photo } = site;

  return (
    <section id="top" className="hero container" aria-labelledby="hero-title">
      <div className="hero-photo">
        <img
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          fetchPriority="high"
        />
      </div>

      <div className="hero-text">
        <p className="label">{site.role}</p>
        <h1 id="hero-title" className="hero-title">
          {/* each part stays on one line; if it wraps, it breaks between them */}
          <span className="nowrap hero-greeting">Hi, I'm</span>{" "}
          <span className="nowrap">{site.firstName}.</span>
        </h1>
        {/* PLACEHOLDER copy: replace with your own intro when ready */}
        <p className="hero-intro">
          I design and build software, from shaping how an interface should feel to writing the
          code that brings it to life. I'm interested in where thoughtful design and solid
          engineering meet.
        </p>
        <div className="hero-actions">
          <a href="#about" className="btn btn-accent">
            Explore About Me
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
