import React, { useState, useEffect } from 'react'
import { FaCertificate, FaTimes, FaDownload, FaExternalLinkAlt } from 'react-icons/fa'
import './Experience.css'

const experiences = [
  {
    role: 'Finance Intern',
    company: 'LT Engineering & Trade Services (LTE)',
    period: '12 Aug 2024 – 20 Sep 2024',
    type: 'Internship',
    certificate: '\LTE internship.png',
    duties: [
      'Assisted the finance department in maintaining daily accounts and ledger entries.',
      'Prepared and reviewed invoices, purchase orders, and vendor payment schedules.',
      'Supported management in preparing financial summaries and periodic reports.',
      'Reconciled bank statements and identified discrepancies in accounts.',
      'Gained hands-on experience in trade finance operations and documentation.',
    ],
  },
  {
    role: 'Finance Intern – SAA Finance Department',
    company: 'Pakistan Ordnance Factories (POF)',
    period: '21 july 2025 – 11 Oct 2025',
    type: 'Internship',
    certificate: '\pof.jpeg',
    duties: [
      'Worked within the SAA Finance Department handling budget allocation and expense tracking.',
      'Assisted in preparing monthly financial statements and management accounts.',
      'Performed variance analysis and reported findings to the finance manager.',
      'Supported internal audit processes by organizing financial documentation.',
      'Gained exposure to government-sector accounting procedures and IFRS compliance.',
    ],
  },
  {
    role: 'Assistant Project & Finance Manager',
    company: 'Web Maven',
    period: 'june 2023 – Oct 2025',
    type: 'Full-time',
    certificate: '\Maven Experience letters.png',
    duties: [
      'Managed project budgets, tracked expenses, and ensured cost control across active projects.',
      'Coordinated with project teams to align financial planning with delivery timelines.',
      'Prepared financial reports, cash flow projections, and profit & loss summaries.',
      'Handled client invoicing, payment follow-ups, and accounts reconciliation.',
      'Assisted senior management in strategic financial decision-making and planning.',
    ],
  },
]

export default function Experience() {
  const [preview, setPreview] = useState(null)

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = preview ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [preview])

  const isImage = (src) => /\.(png|jpg|jpeg|webp|gif)$/i.test(src)

  return (
    <section id="experience" style={{ background: 'var(--off-white)' }}>
      <div className="section">
        <span className="section-tag">Work History</span>
        <h2 className="section-title">
          My <span>Experience</span>
        </h2>
        <p className="section-subtitle">
          Practical exposure in accounting, finance, and business operations.
        </p>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-dot" />
              <div className="card timeline-card">
                <div className="timeline-header">
                  <span className={`exp-type exp-type--${exp.type.toLowerCase().replace(' ', '-')}`}>
                    {exp.type}
                  </span>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <h3 className="exp-role">{exp.role}</h3>
                <p className="exp-company">{exp.company}</p>
                <ul className="exp-duties">
                  {exp.duties.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
                {exp.certificate && (
                  <button
                    className="cert-view-btn"
                    onClick={() => setPreview(exp.certificate)}
                  >
                    <FaCertificate /> View Certificate
                  </button>
                )}
              </div>
            </div>
          ))}
          <div className="timeline-line" />
        </div>
      </div>

      {/* Certificate Modal */}
      {preview && (
        <div className="cert-modal-overlay" onClick={() => setPreview(null)}>
          <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="cert-modal__header">
              <div className="cert-modal__title">
                <FaCertificate className="cert-modal__icon" />
                <span>Certificate Preview</span>
              </div>
              <div className="cert-modal__actions">
                <a
                  href={preview}
                  download
                  className="cert-modal__action-btn"
                  title="Download"
                >
                  <FaDownload />
                </a>
                <a
                  href={preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-modal__action-btn"
                  title="Open in new tab"
                >
                  <FaExternalLinkAlt />
                </a>
                <button
                  className="cert-modal__close"
                  onClick={() => setPreview(null)}
                  title="Close"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="cert-modal__body">
              {isImage(preview) ? (
                <img
                  src={preview}
                  alt="Certificate"
                  className="cert-modal__img"
                />
              ) : (
                <embed
                  src={preview + '#toolbar=1&view=FitH'}
                  type="application/pdf"
                  className="cert-modal__embed"
                />
              )}
            </div>

            {/* Footer */}
            <div className="cert-modal__footer">
              <a
                href={preview}
                download
                className="btn btn-primary cert-modal__dl-btn"
              >
                <FaDownload /> Download Certificate
              </a>
              <a
                href={preview}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline cert-modal__dl-btn"
              >
                <FaExternalLinkAlt /> Open in New Tab
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
