import React from 'react'
import { FaLinkedin, FaEnvelope, FaFileDownload, FaChevronDown } from 'react-icons/fa'
import './Hero.css'

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="hero">
      {/* Green wave background */}
      <div className="hero__bg" aria-hidden="true">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#1a7340"
            fillOpacity="1"
            d="M0,160L60,170.7C120,181,240,203,360,192C480,181,600,139,720,128C840,117,960,139,1080,154.7C1200,171,1320,181,1380,186.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>

      <div className="hero__inner">
        {/* Avatar */}
        <div className="hero__avatar">
          <div className="avatar-ring">
            <img src="/image.png" alt="Muhammad Abdullah" className="avatar-img" />
          </div>
          <span className="hero__status">
            <span className="status-dot" />
            Open to Opportunities
          </span>
        </div>

        {/* Text */}
        <div className="hero__text">
          <p className="hero__greeting">Hello, I'm</p>
          <h1 className="hero__name">Muhammad<br />Abdullah</h1>
          <p className="hero__role">
            <span>Accounting</span> &amp; <span>Finance</span> Professional
          </p>
          <p className="hero__desc">
            Detail-oriented finance graduate passionate about financial analysis,
            accounting, budgeting, and delivering data-driven insights that drive smart
            business decisions.
          </p>

          {/* Buttons */}
          <div className="hero__actions">
            <button className="btn btn-primary" onClick={() => scrollTo('contact')}>
              <FaEnvelope /> Get in Touch
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo('projects')}>
              View My Work
            </button>
            <a
              className="btn btn-outline"
              href="/cv.pdf"
              download="Muhammad_Abdullah_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFileDownload /> Download CV
            </a>
          </div>

          {/* Social */}
          <div className="hero__social">
            <a
              href="https://linkedin.com/in/muhammadabdullah45"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:muhammadabdullahn888@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="hero__stats">
        {[
          { num: '3+', label: 'Years Experience' },
          { num: '2+', label: 'Projects Completed' },
          { num: 'HEC', label: 'Certified Student' },
          { num: '100%', label: 'Client Satisfaction' },
        ].map((s) => (
          <div key={s.label} className="stat-card">
            <strong>{s.num}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <button className="hero__scroll" onClick={() => scrollTo('about')} aria-label="Scroll down">
        <FaChevronDown />
      </button>
    </section>
  )
}
