import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
import './Contact.css'

// ── EmailJS credentials ──────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_djt3r7b'
const EMAILJS_TEMPLATE_ID = 'template_1fc7nxm'   // ← replace with your template ID
const EMAILJS_PUBLIC_KEY  = 'S3jFJcNrBPKOEV2PF'     // ← replace with your public key
// ────────────────────────────────────────────────────────────────

const info = [
  { icon: <FaEnvelope />, label: 'Email', value: 'muhammadabdullahn888@gmail.com', href: 'mailto:muhammadabdullahn888@gmail.com' },
  { icon: <FaPhone />, label: 'Phone', value: '0330 9264960', href: 'tel:+923309264960' },
  { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Wah Cantt, Pakistan', href: null },
  { icon: <FaLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/muhammadabdullah45', href: 'https://linkedin.com/in/muhammadabdullah45' },
]

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus]   = useState('idle') // idle | sending | success | error

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const templateParams = {
      from_name:    form.name,
      from_email:   form.email,
      subject:      form.subject,
      message:      form.message,
      reply_to:     form.email,
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" style={{ background: 'var(--off-white)' }}>
      <div className="section">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">
            Contact <span>Me</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Open to internships, full-time roles, freelance projects, or just a conversation
            about accounting and finance.
          </p>
        </div>

        <div className="contact-grid">
          {/* Info Panel */}
          <div className="contact__info">
            <h3>Let's Connect</h3>
            <p>
              Feel free to reach out through any of the channels below. I typically
              respond within 24 hours.
            </p>
            <div className="contact-cards">
              {info.map((i) => (
                <div key={i.label} className="contact-card">
                  <span className="contact-card__icon">{i.icon}</span>
                  <div>
                    <p className="contact-card__label">{i.label}</p>
                    {i.href ? (
                      <a href={i.href} className="contact-card__value">{i.value}</a>
                    ) : (
                      <p className="contact-card__value">{i.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__availability">
              <span className="avail-dot" />
              <span>Available for opportunities — immediate start</span>
            </div>
          </div>

          {/* Form */}
          <form className="contact__form card" onSubmit={submit}>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Smith"
                  value={form.name}
                  onChange={handle}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handle}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Job Opportunity / Project Inquiry"
                value={form.subject}
                onChange={handle}
                required
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about the opportunity or how I can help..."
                value={form.message}
                onChange={handle}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary form-submit"
              disabled={status === 'sending'}
            >
              {status === 'sending'
                ? <><span className="form-spinner" /> Sending…</>
                : <><FaPaperPlane /> Send Message</>
              }
            </button>

            {status === 'success' && (
              <p className="form-success">
                <FaCheckCircle /> Message sent! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="form-error">
                <FaExclamationCircle /> Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
