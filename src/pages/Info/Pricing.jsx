import { useState, useEffect } from 'react'
import { HiCheck } from 'react-icons/hi2'

function Pricing() {
  const [theme, setTheme] = useState(() => {
    return document.documentElement.getAttribute('data-theme') || 'light'
  })

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const newTheme = document.documentElement.getAttribute('data-theme') || 'light'
          setTheme(newTheme)
        }
      })
    })
    observer.observe(document.documentElement, { attributes: true })
    return () => observer.disconnect()
  }, [])

  const isDark = theme === 'dark'
  const navigate = (route) => {
    window.location.href = route ? `/${route}` : "/";
  }

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
        <h1>Pricing</h1>
        <p>Transparent pricing that scales with your SACCO</p>
      </div>

      <div className={`flex-1 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Choose Your Plan
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
              All plans include our core platform features. Choose the plan that best fits your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div key={index} className={`relative rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? 'bg-[#8cc63f] text-white shadow-xl scale-105'
                  : isDark
                    ? 'bg-gray-800 border-gray-700 hover:border-[#8cc63f]/50 hover:shadow-2xl'
                    : 'bg-white border-gray-200 hover:shadow-2xl hover:border-[#8cc63f]/40'
              }`}>
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-[#8cc63f] text-slate-900 text-sm font-semibold rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-slate-900' : isDark ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`mb-4 ${plan.popular ? 'text-slate-800' : isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-slate-900' : isDark ? 'text-white' : 'text-slate-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.popular ? 'text-slate-700' : isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <HiCheck className={`w-5 h-5 ${plan.popular ? 'text-slate-900' : 'text-[#8cc63f]'}`} />
                      <span className={plan.popular ? 'text-slate-800' : isDark ? 'text-gray-300' : 'text-slate-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate(plan.cta === 'Contact Sales' ? 'contact' : 'register')}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 ${
                    plan.popular
                      ? 'bg-slate-900 hover:bg-slate-800 text-white shadow-lg'
                      : 'bg-[#8cc63f] hover:bg-[#9fd858] text-slate-900 shadow-lg'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Frequently Asked Questions
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`rounded-xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
                    isDark
                      ? 'bg-gray-800 border-gray-700 hover:border-[#8cc63f]/50'
                      : 'bg-white border-gray-200 hover:shadow-lg hover:border-[#8cc63f]/40'
                  }`}
                >
                  <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {faq.q}
                  </h4>
                  <p className={isDark ? 'text-gray-300' : 'text-slate-600'}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className={`rounded-3xl p-10 text-center transition-all duration-300 hover:-translate-y-1 ${
            isDark 
              ? 'bg-gradient-to-r from-[#8cc63f]/20 to-transparent border border-[#8cc63f]/30' 
              : 'bg-gradient-to-r from-[#8cc63f]/10 to-transparent border border-[#8cc63f]/20'
          }`}>
            <h2 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Still Have Questions?
            </h2>
            <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
              Our team is here to help you choose the right plan
            </p>
            <button
              onClick={() => navigate('contact')}
              className="px-6 py-3 rounded-xl font-semibold bg-[#8cc63f] hover:bg-[#9fd858] text-slate-900 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing