import { useEffect, useState } from "react";
import { site } from "../data/site.js";

// Rotating headline: "lead" is set light, "key" carries the weight.
// The first phrase is the identity, so it holds a little longer.
const phrases = [
  { lead: "Hi, I'm", key: `${site.firstName}.`, hold: 4500 },
  { lead: "What are you", key: "building?", hold: 3000 },
  { lead: "Got an", key: "idea?", hold: 3000 },
  { lead: "Let's", key: "build it.", hold: 3000 },
];

function CheckBadge() {
  return (
    <svg className="check-badge" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="currentColor" />
      <path d="M7 12.5l3.2 3.2L17 9" />
    </svg>
  );
}

export default function Hero() {
  const { photo } = site;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // respect "reduce motion": just show the greeting
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setTimeout(
      () => setIndex((i) => (i + 1) % phrases.length),
      phrases[index].hold
    );
    return () => clearTimeout(timer);
  }, [index]);

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
        <p className="label hero-role">
          <CheckBadge />
          {site.role}
        </p>

        <h1 id="hero-title" className="hero-title">
          {/* screen readers always get the plain greeting, not the animation */}
          <span className="visually-hidden">
            Hi, I'm {site.firstName}.
          </span>
          {/* all phrases share one grid cell, so the box is as tall as the
              longest one and nothing below jumps when they change */}
          <span className="rotator" aria-hidden="true">
            {phrases.map((p, i) => (
              <span key={p.key} className={`rotator-item${i === index ? " is-active" : ""}`}>
                <span className="nowrap hero-greeting">{p.lead}</span>{" "}
                <span className="nowrap">{p.key}</span>
              </span>
            ))}
          </span>
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
