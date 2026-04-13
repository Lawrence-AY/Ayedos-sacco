import { HiArrowLeft, HiCheck } from 'react-icons/hi2'

function Pricing() {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small SACCOs getting started',
      price: 'KSh 15,000',
      period: '/month',
      features: [
        'Up to 500 members',
        'Member portal access',
        'Basic transaction management',
        'Email support',
        'Monthly reports'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      description: 'For growing SACCOs with advanced needs',
      price: 'KSh 35,000',
      period: '/month',
      features: [
        'Up to 2,000 members',
        'Full product suite',
        'Payroll integration',
        'Loan management',
        'Dividend calculations',
        'Priority support',
        'API access'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large SACCOs requiring custom solutions',
      price: 'Custom',
      period: '',
      features: [
        'Unlimited members',
        'Custom integrations',
        'Dedicated account manager',
        'On-premise deployment option',
        '24/7 phone support',
        'Training & onboarding',
        'Custom development'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ]

  const faqs = [
    { q: 'Is there a setup fee?', a: 'No, there are no hidden setup fees. All plans include free onboarding and training.' },
    { q: 'Can I change plans later?', a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect on the next billing cycle.' },
    { q: 'What payment methods do you accept?', a: 'We accept M-Pesa, bank transfers, and credit cards. Annual payments receive a 10% discount.' },
    { q: 'Do you offer a free trial?', a: 'Yes, all plans come with a 14-day free trial. No credit card required.' },
    { q: 'Is my data secure?', a: 'Absolutely. We use bank-grade encryption and are fully compliant with Kenyan data protection regulations.' }
  ]

  return (
    <div className="info-page-container">
      <div className="info-hero">
        <a href="/" className="back-link"><HiArrowLeft /> Back to Home</a>
        <h1>Pricing</h1>
        <p>Transparent pricing that scales with your SACCO</p>
      </div>

      <section className="info-section">
        <div className="info-section-header">
          <h2>Choose Your Plan</h2>
          <p>All plans include our core platform features. Choose the plan that best fits your needs.</p>
        </div>
      </section>

      <section className="info-section">
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <span className="popular-badge">Most Popular</span>}
              <h3>{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <div className="plan-price">
                <span className="price-amount">{plan.price}</span>
                <span className="price-period">{plan.period}</span>
              </div>
              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}><HiCheck className="check-icon" /> {feature}</li>
                ))}
              </ul>
              <a href="/register" className={`plan-cta ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>{plan.cta}</a>
            </div>
          ))}
        </div>
      </section>

      <section className="info-section">
        <div className="info-section-header">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h4>{faq.q}</h4>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="info-cta">
        <h2>Still Have Questions?</h2>
        <p>Our team is here to help you choose the right plan</p>
        <div className="cta-buttons">
          <a href="/contact" className="btn-primary">Talk to Sales</a>
        </div>
      </section>
    </div>
  )
}

export default Pricing