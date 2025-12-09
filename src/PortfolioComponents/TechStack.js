
// === TechStack.js ===
import React from "react";

export default function TechStack() {
  return (
    <div className="card tech-stack">
      <div className="tech-header">
        <h2 className="section-title">
          <span className="code-icon">⚙</span> Tech Stack
        </h2>
        <a href="#" className="view-all">View All →</a>
      </div>

      <div className="tech-category">
        <h3>Frontend</h3>
        <div className="tag-list">
          <span className="tag">HTML</span>
          <span className="tag">CSS</span>
          <span className="tag">JavaScript</span>
          <span className="tag">React</span>
          <span className="tag">Next.js</span>
          <span className="tag">Tailwind CSS</span>
        </div>
      </div>

      <div className="tech-category">
        <h3>Backend</h3>
        <div className="tag-list">
          <span className="tag">Java</span>
          <span className="tag">Node.js</span>
          <span className="tag">PHP</span>
          <span className="tag">Laravel</span>
          <span className="tag">MySQL</span>
        </div>
      </div>

      <div className="tech-category">
        <h3>DevOps & Cloud</h3>
        <div className="tag-list">
          <span className="tag">AWS</span>
          <span className="tag">Docker</span>
          <span className="tag">GitHub Actions</span>
        </div>
      </div>
    </div>
  );
}
