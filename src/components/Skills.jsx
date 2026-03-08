import React from 'react'
import './Skills.css'

const skills = [
  {
    category: 'Accounting & Finance',
    icon: '📊',
    items: [
      { name: 'Financial Reporting (IFRS)', level: 90 },
      { name: 'Cost & Management Accounting', level: 85 },
      { name: 'Bookkeeping', level: 95 },
      { name: 'Auditing & Assurance', level: 80 },
      { name: 'Taxation', level: 75 },
      { name: 'Budgeting & Forecasting', level: 85 },
    ],
  },
  {
    category: 'Software & Tools',
    icon: '💻',
    items: [
      { name: 'Microsoft Excel (Advanced)', level: 95 },
      { name: 'QuickBooks', level: 85 },
      { name: 'SAP (Basics)', level: 60 },
      { name: 'Microsoft Word', level: 90 },
      { name: 'PowerPoint', level: 88 },
      { name: 'Google Sheets', level: 85 },
    ],
  },
  {
    category: 'Professional Skills',
    icon: '🤝',
    items: [
      { name: 'Financial Analysis', level: 88 },
      { name: 'Data Interpretation', level: 82 },
      { name: 'Report Writing', level: 85 },
      { name: 'Critical Thinking', level: 90 },
      { name: 'Team Collaboration', level: 92 },
      { name: 'Time Management', level: 88 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--off-white)' }}>
      <div className="section">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-tag">What I Know</span>
          <h2 className="section-title" style={{ justifyContent: 'center', display: 'block' }}>
            My <span>Skills</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto 0' }}>
            A broad set of technical and professional skills developed through academic and
            practical experience in accounting and finance.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="card skill-card">
              <div className="skill-card__header">
                <span className="skill-emoji">{group.icon}</span>
                <h3>{group.category}</h3>
              </div>
              <div className="skill-bars">
                {group.items.map((item) => (
                  <div key={item.name} className="skill-bar-row">
                    <div className="skill-bar-label">
                      <span>{item.name}</span>
                      <span className="skill-percent">{item.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
