import React from 'react'
import { FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import './Footer.css'

const links = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <span className="footer__logo">
            <span style={{ color: 'var(--green-mid)' }}>{`{`}</span>
            MA
            <span style={{ color: 'var(--green-mid)' }}>{`}`}</span>
          </span>
          <p>Muhammad Abdullah</p>
          <p className="footer__tagline">Accounting &amp; Finance Professional</p>
        </div>

        {/* Nav */}
        <div className="footer__nav">
          <p className="footer__nav-title">Quick Links</p>
          {links.map((l) => (
            <button key={l} className="footer__link" onClick={() => scrollTo(l)}>
              {l}
            </button>
          ))}
        </div>

        {/* Social */}
        <div className="footer__social-col">
          <p className="footer__nav-title">Connect</p>
          <a
            href="https://linkedin.com/in/muhammadabdullah45"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a href="mailto:muhammadabdullahn888@gmail.com" className="footer__social">
            <FaEnvelope /> Email Me
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          Made with <FaHeart className="heart-icon" /> by Muhammad Abdullah &copy; {new Date().getFullYear()}
        </p>
        <p className="footer__sub">All rights reserved.</p>
      </div>
    </footer>
  )
}
