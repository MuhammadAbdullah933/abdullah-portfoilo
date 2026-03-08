import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGraduationCap, FaBriefcase } from 'react-icons/fa'
import './About.css'

const highlights = [
  { icon: <FaGraduationCap />, label: 'Degree', value: 'BS Accounting & Finance' },
  { icon: <FaBriefcase />, label: 'Available', value: 'Full-time / Internship' },
  { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Pakistan' },
  { icon: <FaPhone />, label: 'Phone', value: '+92 3309264960' },
  { icon: <FaEnvelope />, label: 'Email', value: 'muhammadabdullahn888@gmail.com' },
]

export default function About() {
  return (
    <section id="about">
      <div className="section">
        <div className="about-grid">
          {/* Left: Text */}
          <div className="about__text">
            <span className="section-tag">Who I Am</span>
            <h2 className="section-title">
              About <span>Me</span>
            </h2>
            <p>
              I am a motivated and detail-oriented Accounting &amp; Finance graduate with
              strong experience in financial reporting, analysis, and business operations.
              I bring a solid understanding of modern financial tools, including ERP
              systems, and apply accuracy, discipline, and professionalism to all tasks.
            </p>
            <p style={{ marginTop: '16px' }}>
              My background includes preparing financial documents, supporting
              organizational processes, and applying analytical thinking to solve complex
              problems. I am recognized for my strong work ethic, teamwork, adaptability,
              and consistent commitment to high-quality results.
            </p>
            <p style={{ marginTop: '16px' }}>
              Focused on continuous growth, I aim to contribute effectively to professional
              financial and business environments while strengthening my expertise in modern
              accounting and analytical practice.
            </p>

            <div className="about__tags">
              {['Financial Analysis', 'Bookkeeping', 'IFRS', 'Taxation', 'Auditing', 'MS Excel'].map(
                (t) => (
                  <span key={t} className="about-tag">{t}</span>
                )
              )}
            </div>
          </div>

          {/* Right: Info cards */}
          <div className="about__info">
            {highlights.map((h) => (
              <div key={h.label} className="info-card">
                <span className="info-icon">{h.icon}</span>
                <div>
                  <p className="info-label">{h.label}</p>
                  <p className="info-value">{h.value}</p>
                </div>
              </div>
            ))}

            {/* Progress bar decoration */}
            <div className="info-card info-card--highlight">
              <div>
                <p className="info-label">ACCA Progress</p>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '55%' }} />
                </div>
                <p className="info-value">Applied Knowledge &amp; Skills Level</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
