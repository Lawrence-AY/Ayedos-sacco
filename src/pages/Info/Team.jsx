import { HiArrowLeft, HiEnvelope, HiPhone } from 'react-icons/hi2'

function Team() {
  const team = [
    { name: 'Dr. James Kariuki', role: 'Chief Executive Officer', bio: 'Over 20 years of experience in financial services and cooperative leadership.', email: 'james.kariuki@ayedous.co.ke' },
    { name: 'Sarah Nekesa', role: 'Chief Technology Officer', bio: 'Former fintech engineer with expertise in secure financial systems and blockchain.', email: 'sarah.nekesa@ayedous.co.ke' },
    { name: 'Michael Ochieng', role: 'Head of Operations', bio: 'Certified SACCO specialist with deep knowledge of regulatory compliance and member services.', email: 'michael.ochieng@ayedous.co.ke' },
    { name: 'Grace Wanjiku', role: 'Head of Finance', bio: 'Chartered accountant with 15 years in cooperative finance and dividend management.', email: 'grace.wanjiku@ayedous.co.ke' },
    { name: 'David Kiprotich', role: 'Head of Product', bio: 'Product strategist focused on creating intuitive financial management experiences.', email: 'david.kiprotich@ayedous.co.ke' },
    { name: 'Elizabeth Akinyi', role: 'Customer Success Lead', bio: 'Dedicated to ensuring member satisfaction and seamless onboarding experiences.', email: 'elizabeth.akinyi@ayedous.co.ke' },
  ]

  return (
    <div className="info-page-container">
      <div className="info-hero">
        <a href="/" className="back-link"><HiArrowLeft /> Back to Home</a>
        <h1>Meet Our Team</h1>
        <p>The people driving innovation in cooperative finance</p>
      </div>

      <section className="info-section">
        <div className="info-section-header">
          <h2>Leadership</h2>
          <p>Our experienced team combines decades of SACCO industry knowledge with modern technology expertise to deliver solutions that transform how cooperatives operate.</p>
        </div>
      </section>

      <section className="info-section">
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-avatar">{member.name.split(' ').map(n => n[0]).join('')}</div>
              <h3>{member.name}</h3>
              <span className="team-role">{member.role}</span>
              <p className="team-bio">{member.bio}</p>
              <div className="team-contact">
                <a href={`mailto:${member.email}`}><HiEnvelope /> {member.email}</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="info-cta">
        <h2>Join Our Team</h2>
        <p>We're always looking for talented individuals passionate about cooperative finance</p>
        <div className="cta-buttons">
          <a href="/contact" className="btn-primary">View Openings</a>
        </div>
      </section>
    </div>
  )
}

export default Team