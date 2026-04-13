import { HiArrowLeft, HiCalendar, HiUserGroup, HiShieldCheck, HiChartBar } from 'react-icons/hi2'
import Card from '../../components/ui/Card'

function OurStory() {
  const timeline = [
    { year: '2018', title: 'Foundation', description: 'Ayedous SACCO was established with a vision to revolutionize cooperative financial management in Kenya.' },
    { year: '2019', title: 'First Members', description: 'Onboarded our first 50 member organizations across Nairobi and surrounding counties.' },
    { year: '2020', title: 'Digital Platform Launch', description: 'Launched our comprehensive digital platform enabling online member management and real-time transactions.' },
    { year: '2022', title: 'Expansion', description: 'Expanded services to include loan management, dividend distribution, and regulatory compliance tools.' },
    { year: '2024', title: 'Market Leader', description: 'Became the preferred SACCO management solution for over 200 organizations with 50,000+ active members.' },
    { year: '2025', title: 'Innovation', description: 'Introduced AI-powered analytics and automated compliance reporting features.' },
  ]

  const values = [
    { icon: HiShieldCheck, title: 'Trust & Security', description: 'We prioritize the security of member data and transactions above all else.' },
    { icon: HiUserGroup, title: 'Community Focus', description: 'Our success is measured by the success of our member organizations.' },
    { icon: HiChartBar, title: 'Transparency', description: 'Clear, auditable processes ensure complete visibility into all operations.' },
  ]

  return (
    <div className="info-page-container">
      <div className="info-hero">
        <a href="/" className="back-link"><HiArrowLeft /> Back to Home</a>
        <h1>Our Story</h1>
        <p>Building the future of cooperative finance since 2018</p>
      </div>

      <section className="info-section">
        <div className="info-section-header">
          <h2>Who We Are</h2>
          <p>Ayedous SACCO is a leading provider of comprehensive financial management solutions for Savings and Credit Cooperatives across East Africa. We combine deep industry expertise with cutting-edge technology to empower SACCOs to operate more efficiently, transparently, and profitably.</p>
        </div>
      </section>

      <section className="info-section">
        <div className="info-section-header">
          <h2>Our Journey</h2>
        </div>
        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="info-section">
        <div className="info-section-header">
          <h2>Our Values</h2>
        </div>
        <div className="values-grid">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card key={index} className="value-card">
                <div className="value-icon"><Icon /></div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="info-cta">
        <h2>Join Our Growing Community</h2>
        <p>Become part of a network of forward-thinking SACCOs</p>
        <div className="cta-buttons">
          <a href="/register" className="btn-primary">Get Started</a>
          <a href="/contact" className="btn-secondary">Contact Us</a>
        </div>
      </section>
    </div>
  )
}

export default OurStory