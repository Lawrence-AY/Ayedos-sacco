import { HiArrowLeft, HiQuestionMarkCircle, HiChevronDown } from 'react-icons/hi2'
import { useState } from 'react'

function FAQ() {
  const faqs = [
    {
      category: 'General',
      questions: [
        { q: 'What is Ayedous SACCO?', a: 'Ayedous SACCO is a comprehensive financial management platform designed specifically for Savings and Credit Cooperatives. We provide tools for managing member accounts, savings, shares, dividends, and loans.' },
        { q: 'Who can use Ayedous?', a: 'Our platform is designed for SACCOs of all sizes, from small community cooperatives to large regional SACCOs. We serve both employee-based and non-employee member organizations.' },
        { q: 'Is my data secure?', a: 'Yes, we use bank-grade 256-bit encryption and are fully compliant with Kenyan data protection regulations. Our servers are hosted in secure data centers with 24/7 monitoring.' }
      ]
    },
    {
      category: 'Account & Login',
      questions: [
        { q: 'How do I register as a member?', a: 'Click the Register button on the homepage, fill in your details, and complete the verification process. Your employer may provide you with a registration code.' },
        { q: 'I forgot my password, how do I reset it?', a: 'Click "Forgot Password" on the login page, enter your registered email, and follow the reset instructions sent to your inbox.' },
        { q: 'Can I have multiple accounts?', a: 'Each member is typically associated with one account. If you have multiple memberships across different SACCOs, you will need separate credentials for each.' }
      ]
    },
    {
      category: 'Transactions',
      questions: [
        { q: 'How do I make a deposit?', a: 'Log in to your member portal, go to "Make Deposit", and follow the prompts. You can use mobile money, bank transfer, or cash at designated agents.' },
        { q: 'How long do withdrawals take?', a: 'Mobile money withdrawals are processed within minutes. Bank transfers typically take 1-2 business days. Cash withdrawals require visiting a designated agent.' },
        { q: 'What are the transaction limits?', a: 'Daily limits vary by membership level and verification status. Standard accounts have a KSh 100,000 daily limit, which can be increased upon request.' }
      ]
    },
    {
      category: 'Dividends & Shares',
      questions: [
        { q: 'When are dividends paid?', a: 'Dividends are typically distributed annually after the AGM. The exact timing is announced by your SACCO board and depends on financial performance.' },
        { q: 'How are dividends calculated?', a: 'Dividends are calculated based on your share capital at the end of the financial year. The rate is determined by the board and approved by members at the AGM.' },
        { q: 'Can I transfer my shares?', a: 'Yes, share transfers are allowed subject to SACCO rules. You need to submit a transfer request through your member portal or visit your SACCO office.' }
      ]
    },
    {
      category: 'Loans',
      questions: [
        { q: 'How do I apply for a loan?', a: 'Log in to your member portal, navigate to "Loans", and select "Apply". Complete the application form and submit required documents. You\'ll be notified of the decision within 5-7 business days.' },
        { q: 'What is the maximum loan amount?', a: 'Loan limits depend on your share capital, contribution history, and credit score. Typically, members can borrow up to 3x their share capital.' },
        { q: 'Can I repay my loan early?', a: 'Yes, you can make early repayments without penalty. Contact your SACCO for the exact payoff amount.' }
      ]
    }
  ]

  const [openIndex, setOpenIndex] = useState(null)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="info-page-container">
      <div className="info-hero">
        <a href="/" className="back-link"><HiArrowLeft /> Back to Home</a>
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about Ayedous SACCO</p>
      </div>

      <section className="info-section">
        <div className="faq-categories">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="faq-category">
              <h2>{category.category}</h2>
              <div className="faq-list">
                {category.questions.map((item, qIndex) => {
                  const globalIndex = catIndex * 10 + qIndex
                  return (
                    <div key={qIndex} className={`faq-item-wrapper ${openIndex === globalIndex ? 'open' : ''}`}>
                      <button className="faq-question" onClick={() => toggleFaq(globalIndex)}>
                        <span>{item.q}</span>
                        <HiChevronDown className="faq-chevron" />
                      </button>
                      <div className="faq-answer">
                        <p>{item.a}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="info-cta">
        <h2>Still Have Questions?</h2>
        <p>Can't find what you're looking for? Our support team is here to help.</p>
        <div className="cta-buttons">
          <a href="/contact" className="btn-primary">Contact Support</a>
        </div>
      </section>
    </div>
  )
}

export default FAQ