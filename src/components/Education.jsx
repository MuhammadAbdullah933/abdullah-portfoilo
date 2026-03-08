import React, { useState, useEffect } from 'react'
import { FaGraduationCap, FaCertificate, FaTimes, FaDownload, FaExternalLinkAlt } from 'react-icons/fa'
import './Education.css'

const education = [
  {
    icon: <FaGraduationCap />,
    degree: 'BS Accounting & Finance',
    institution: 'Hitec University Taxila',
    period: '2021 – 2025',
    highlights: [
      'Relevant Coursework: Financial Accounting, Corporate Finance, Investment Analysis, Financial Management, Research Methods ',
    ],
    transcript: '/transcript.jpeg',
  },
]


const extracurricular = [
  { label: 'Sports Certificate 1', file: '/7.jpeg' },
  { label: 'Sports Certificate 2', file: '/9.jpeg' },
  { label: 'Sports Certificate 3', file: '/10.jpeg' },
  { label: 'Sports Certificate 4', file: '/11.jpeg' },
  { label: 'Sports Certificate 5', file: '/12.jpeg' },
]

const recommendations = [
  { label: 'Recommendation Letter 1', file: '/1.jpeg' },
  { label: 'Recommendation Letter 2', file: '/2.jpeg' },
  { label: 'Recommendation Letter 3', file: '/3.jpeg' },
  { label: 'Recommendation Letter 4', file: '/4.jpeg' },
  { label: 'Recommendation Letter 5', file: '/5.jpeg' },
]

export default function Education() {
  const [preview, setPreview] = useState(null)

  useEffect(() => {
    document.body.style.overflow = preview ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [preview])

  const isImage = (src) => /\.(png|jpg|jpeg|webp|gif)$/i.test(src)

  return (
    <section id="education">
      <div className="section">
        <span className="section-tag">Academic Background</span>
        <h2 className="section-title">
          Education &amp; <span>Certifications</span>
        </h2>
        <p className="section-subtitle">
          Academic and professional credentials that form the foundation of my finance expertise.
        </p>

        <div className="edu-grid">
          {education.map((e, i) => (
            <div key={i} className="card edu-card">
              <div className="edu-icon">{e.icon}</div>
              <div className="edu-meta">
                <span className="edu-period">{e.period}</span>
                <span className={`edu-grade ${e.grade === 'In Progress' ? 'grade--progress' : ''}`}>
                  {e.grade}
                </span>
              </div>
              <h3 className="edu-degree">{e.degree}</h3>
              <p className="edu-institution">{e.institution}</p>
              <ul className="edu-highlights">
                {e.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
              {e.transcript && (
                <button
                  className="cert-view-btn"
                  onClick={() => setPreview(e.transcript)}
                >
                  <FaCertificate /> View Transcript
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Documents */}
        <div className="certifications">
          <h3 className="cert-title" style={{ marginTop: '32px' }}>Extracurricular Activities</h3>
          <div className="cert-grid">
            {extracurricular.map((c, i) => (
              <div key={i} className="cert-card cert-card--action">
                <FaCertificate className="cert-icon" />
                <span>{c.label}</span>
                {c.file && (
                  <button
                    className="cert-view-btn cert-view-btn--sm"
                    onClick={() => setPreview(c.file)}
                  >
                    View
                  </button>
                )}
              </div>
            ))}
          </div>

          <h3 className="cert-title" style={{ marginTop: '32px' }}>Recommendation Letters</h3>
          <div className="cert-grid">
            {recommendations.map((c, i) => (
              <div key={i} className="cert-card cert-card--action">
                <FaCertificate className="cert-icon" />
                <span>{c.label}</span>
                {c.file && (
                  <button
                    className="cert-view-btn cert-view-btn--sm"
                    onClick={() => setPreview(c.file)}
                  >
                    View
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transcript Modal */}
      {preview && (
        <div className="cert-modal-overlay" onClick={() => setPreview(null)}>
          <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal__header">
              <div className="cert-modal__title">
                <FaGraduationCap className="cert-modal__icon" />
                <span>Transcript Preview</span>
              </div>
              <div className="cert-modal__actions">
                <a href={preview} download className="cert-modal__action-btn" title="Download">
                  <FaDownload />
                </a>
                <a href={preview} target="_blank" rel="noopener noreferrer" className="cert-modal__action-btn" title="Open in new tab">
                  <FaExternalLinkAlt />
                </a>
                <button className="cert-modal__close" onClick={() => setPreview(null)} title="Close">
                  <FaTimes />
                </button>
              </div>
            </div>
            <div className="cert-modal__body">
              {isImage(preview) ? (
                <img src={preview} alt="Transcript" className="cert-modal__img" />
              ) : (
                <embed src={preview + '#toolbar=1&view=FitH'} type="application/pdf" className="cert-modal__embed" />
              )}
            </div>
            <div className="cert-modal__footer">
              <a href={preview} download className="btn btn-primary cert-modal__dl-btn">
                <FaDownload /> Download Transcript
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
