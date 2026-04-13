import { HiArrowLeft, HiCreditCard, HiScale, HiChartPie, HiCurrencyDollar, HiShieldCheck, HiGlobeAlt, HiDeviceTablet } from 'react-icons/hi2'
import Card from '../../components/ui/Card'

function Products() {
  const products = [
    {
      icon: HiCreditCard,
      title: 'Member Portal',
      description: 'Comprehensive self-service portal for members to view balances, transactions, and manage their accounts.',
      features: ['Real-time balance viewing', 'Transaction history', 'Mobile money integration', 'Statement downloads']
    },
    {
      icon: HiScale,
      title: 'Share Capital Management',
      description: 'Track and manage member share holdings with automated calculations and transparent reporting.',
      features: ['Automated share calculations', 'Ownership tracking', 'Transfer processing', 'Capital reports']
    },
    {
      icon: HiChartPie,
      title: 'Dividend Engine',
      description: 'Calculate and distribute dividends based on member share holdings with full audit trail.',
      features: ['Custom dividend formulas', 'Batch processing', 'Tax calculations', 'Payment scheduling']
    },
    {
      icon: HiCurrencyDollar,
      title: 'Loan Management',
      description: 'End-to-end loan processing from application to approval, disbursement, and repayment tracking.',
      features: ['Application workflows', 'Credit scoring', 'Repayment schedules', 'Collateral tracking']
    },
    {
      icon: HiGlobeAlt,
      title: 'Payroll Integration',
      description: 'Seamless integration with employer payroll systems for automated deductions and remittances.',
      features: ['Auto deduction setup', 'Bulk file processing', 'Reconciliation reports', 'Multi-employer support']
    },
    {
      icon: HiShieldCheck,
      title: 'Compliance & Audit',
      description: 'Built-in regulatory compliance tools with automated reporting and audit trails.',
      features: ['SASRA compliance', 'Audit trails', 'Regulatory reports', 'Exception alerts']
    },
    {
      icon: HiDeviceTablet,
      title: 'Mobile App',
      description: 'Native mobile applications for iOS and Android enabling members to access their accounts on the go.',
      features: ['Biometric login', 'Push notifications', 'Quick actions', 'Offline support']
    },
    {
      icon: HiChartPie,
      title: 'Analytics Dashboard',
      description: 'Powerful analytics and reporting tools for strategic decision making.',
      features: ['Custom dashboards', 'Trend analysis', 'Forecasting', 'Export capabilities']
    },
  ]

  return (
    <div className="info-page-container">
      <div className="info-hero">
        <a href="/" className="back-link"><HiArrowLeft /> Back to Home</a>
        <h1>Products</h1>
        <p>Complete solutions for modern SACCO management</p>
      </div>

      <section className="info-section">
        <div className="info-section-header">
          <h2>Our Product Suite</h2>
          <p>Ayedous offers a comprehensive suite of integrated modules designed to meet the diverse needs of SACCOs of all sizes.</p>
        </div>
      </section>

      <section className="info-section">
        <div className="products-grid">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <Card key={index} className="product-card">
                <div className="product-icon"><Icon /></div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <ul className="product-features">
                  {product.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <a href="/contact" className="product-link">Learn more →</a>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="info-cta">
        <h2>Need a Custom Solution?</h2>
        <p>We offer tailored packages to meet your specific requirements</p>
        <div className="cta-buttons">
          <a href="/contact" className="btn-primary">Contact Sales</a>
          <a href="/pricing" className="btn-secondary">View Pricing</a>
        </div>
      </section>
    </div>
  )
}

export default Products