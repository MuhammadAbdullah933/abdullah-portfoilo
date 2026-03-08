import React from 'react'
import { FaExternalLinkAlt, FaFileAlt, FaUsers, FaAward } from 'react-icons/fa'
import './Projects.css'

// ── Replace the href below with your actual research paper URL ──
const PAPER_LINK = 'https://doi.org/10.5281/zenodo.17062247'

export default function Projects() {
  return (
    <section id="projects">
      <div className="section">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Academic and research work demonstrating my finance and accounting expertise.
          </p>
        </div>

        {/* Single featured project card */}
        <div className="pfy-wrapper">
          <div className="pfy-card card">
            {/* Left accent */}
            <div className="pfy-accent" />

            <div className="pfy-content">
              {/* Badge */}
              <div className="pfy-badges">
                <span className="pfy-badge pfy-badge--featured">
                  <FaAward style={{ fontSize: '0.75rem' }} /> Published Research
                </span>
                <span className="pfy-badge pfy-badge--type">Final Year Project</span>
              </div>

              {/* Title */}
              <h3 className="pfy-title">
Personality Traits and Investment Decisions: A Study of the Big Five Personality Traits and Investors Behavior</h3>

              {/* Description */}
              <p className="pfy-desc">
              I contributed to the research study “Personality Traits and Investment Decisions: A Study of the Big Five Personality Traits and Investor Behavior,” analyzing how Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism influence investment choices, risk perception, and financial decision-making. Using quantitative methods and mediation modeling in SPSS, our work delivered clear insights into how psychological drivers shape investor responses in dynamic financial environments.

This project strengthened my capabilities in behavioral finance, advanced data analysis, and multi-author research collaboration. It also reinforced my commitment to integrating psychology and finance to better understand investor behavior and support more informed, evidence-based financial strategies
              </p>

              {/* Meta row */}
              <div className="pfy-meta">
                <span className="pfy-meta-item">
                  <FaFileAlt /> Research Paper
                </span>
                <span className="pfy-meta-item">
                  <FaUsers /> Co-authored &amp; Published
                </span>
              </div>

              {/* Tools */}
              <div className="project-tools" style={{ marginBottom: '28px' }}>
                {['Research', 'Data Analysis', 'Academic Writing', 'Finance'].map((t) => (
                  <span key={t} className="tool-tag">{t}</span>
                ))}
              </div>

              {/* CTA */}
              <a
                href={PAPER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary pfy-btn"
              >
                <FaExternalLinkAlt style={{ fontSize: '0.8rem' }} />
                View Published Research Paper
              </a>
            </div>

            {/* Right illustration */}
            <div className="pfy-illustration">
              <div className="pfy-illus-circle">
                <FaFileAlt />
              </div>
              <p className="pfy-illus-label">Published</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
