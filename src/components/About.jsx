import { site } from "../data/site.js";

export default function About() {
  return (
    <section id="about" className="section container" aria-labelledby="about-title">
      <p className="label">About</p>
      <h2 id="about-title" className="section-title">
        Design and development, side by side.
      </h2>

      {/* PLACEHOLDER copy: replace with your own About description when ready */}
      <div className="prose">
        <p>
          I'm {site.name}, a software developer and UI designer. I enjoy working
          on both sides of a product: understanding the people who will use it, designing
          interfaces around what they need, and then building those designs in code.
        </p>
        <p>
          In software development, I'm interested in writing clean, maintainable code. In UI
          design, I'm interested in clear layouts, readable typography and interactions that feel
          straightforward.
        </p>
        {/* Space for a longer personal description: add more <p> paragraphs here. */}
      </div>
    </section>
  );
}
