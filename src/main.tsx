import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";

const projects = [
  "Bostadshus Lärkstaden",
  "Skola i tegel",
  "Stadsradhus",
  "Ateljé och bostad",
  "Kvarter vid parken",
  "Ombyggnad innerstad",
];

function App() {
  return (
    <main>
      <header className="hero">
        <p className="eyebrow">Hermansson Hiller Lundberg</p>
        <h1>Architecture with permanence, complexity and civic value.</h1>
        <p className="intro">
          A calm, editorial archive for projects, notes, people and practice.
        </p>
      </header>

      <section className="grid section">
        <div>
          <p className="label">Practice</p>
          <h2>Buildings that hold many readings over time.</h2>
        </div>
        <p>
          The office works with housing, cultural buildings, restorations and civic spaces, with attention to material depth, urban context and long-term use.
        </p>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <p className="label">Selected projects</p>
          <span>Archive index</span>
        </div>
        <div className="projectGrid">
          {projects.map((project, index) => (
            <article className="projectCard" key={project}>
              <div className="imagePlaceholder">{String(index + 1).padStart(2, "0")}</div>
              <h3>{project}</h3>
              <p>Stockholm · Architecture · Public value</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="label">Notes</p>
          <h2>On permanence, craft and city-making.</h2>
        </div>
        <ul>
          <li>Architecture as a long conversation with place.</li>
          <li>Material presence, precision and restraint.</li>
          <li>Contemporary work grounded in continuity.</li>
        </ul>
      </section>

      <footer>
        <strong>HHL</strong>
        <span>Hermansson Hiller Lundberg Arkitekter</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
