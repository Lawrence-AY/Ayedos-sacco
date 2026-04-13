import { HiShieldCheck } from 'react-icons/hi2'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import { roleCards, saccoHighlights } from '../../data/dashboardData'
import { ROLES } from '../../utils/constants'

function LandingPage({ onEnterDashboard }) {
  return (
    <div className="landing">
      <header className="landing-navbar">
        <div className="brand brand--dark">
          <div className="brand__mark">A</div>
          <div>
            <strong>Ayedous SACCO</strong>
            <span>Savings and Credit Cooperative</span>
          </div>
        </div>

        <nav className="landing-links" aria-label="Landing navigation">
          <a href="#about">About</a>
          <a href="#dashboards">Dashboards</a>
          <a href="#security">Security</a>
        </nav>
      </header>

      <main className="landing-content">
        <section className="landing-hero">
          <div className="landing-copy">
            <p className="eyebrow">Secure Financial Platform</p>
            <h1>Professional SACCO operations for administrators, finance officers, and members</h1>
            <p className="muted-copy">
              Ayedous SACCO is designed as a modern office-based financial system for savings, shares, dividends,
              and member administration with a clean banking-grade experience.
            </p>

            <div className="hero-actions">
              <Button type="button" onClick={() => onEnterDashboard(ROLES.FINANCE)}>
                Open Finance Dashboard
              </Button>
              <Button type="button" variant="ghost" onClick={() => onEnterDashboard(ROLES.EMPLOYEE)}>
                Open Member Dashboard
              </Button>
            </div>

            <div className="landing-meta" id="about">
              <div>
                <span>Head Office</span>
                <strong>Nairobi Financial Centre</strong>
              </div>
              <div>
                <span>Membership</span>
                <strong>Employees and Non-Employees</strong>
              </div>
              <div>
                <span>Core Services</span>
                <strong>Savings, Shares, Loans, Dividends</strong>
              </div>
            </div>
          </div>

          <Card className="landing-panel" id="security">
            <div className="section-heading">
              <div>
                <h2>Why stakeholders trust Ayedous</h2>
                <p>Operational confidence for office teams and members</p>
              </div>
              <HiShieldCheck className="feature-icon" aria-hidden="true" />
            </div>

            <div className="trust-metrics">
              {saccoHighlights.map((item) => (
                <div key={item}>
                  <span>Control</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section className="roles-section" id="dashboards">
          <div className="roles-heading">
            <p className="eyebrow">Role Based Access</p>
            <h2>One shared dashboard system with four role-specific views</h2>
          </div>

          <div className="roles-grid">
            {roleCards.map((role) => {
              const Icon = role.icon

              return (
                <Card key={role.id} className="role-card">
                  <div className="role-card__icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{role.name}</h3>
                  <p>{role.description}</p>
                  <Button type="button" variant="ghost" onClick={() => onEnterDashboard(role.id)}>
                    Enter {role.shortRole}
                  </Button>
                </Card>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}

export default LandingPage
