import { HiChevronDown } from 'react-icons/hi2'
import { useState, useEffect } from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/ui/Footer'
import '../../styles.css'

function FAQ({ onNavigate }) {
  const navigate = (route) => {
    if (onNavigate) onNavigate(route)
  }

  const [theme, setTheme] = useState(() => {
    return document.documentElement.getAttribute('data-theme') || 'light'
  })

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const newTheme =
            document.documentElement.getAttribute('data-theme') || 'light'
          setTheme(newTheme)
        }
      })
    })
    observer.observe(document.documentElement, { attributes: true })
    return () => observer.disconnect()
  }, [])

  const faqs = [
    {
      category: 'General',
      questions: [
        { q: 'What is Ayedos SACCO?', a: 'Ayedos SACCO is a comprehensive financial management platform designed specifically for Savings and Credit Cooperatives. We provide tools for managing member accounts, savings, shares, dividends, and loans.' },
        { q: 'Who can use Ayedos?', a: 'Our platform is designed for SACCOs of all sizes, from small community cooperatives to large regional SACCOs. We serve both employee-based and non-employee member organizations.' },
       // { q: 'Is my data secure?', a: 'Yes, we use bank-grade 256-bit encryption and are fully compliant with Kenyan data protection regulations. Our servers are hosted in secure data centers with 24/7 monitoring.' }
      ]
    },
    {
      category: 'Account & Login',
      questions: [
        { q: 'How do I register as a member?', a: 'Click the Get Started button on the navbar, fill in your details, and complete the verification process.' },
        { q: 'I forgot my password, how do I reset it?', a: 'Click "Forgot Password" on the login page, enter your registered email, and follow the reset instructions sent to your inbox.' },
        { q: 'Can I have multiple accounts?', a: 'Each member is typically associated with one account. If you have multiple memberships across different SACCOs, you will need separate credentials for each.' }
      ]
    },
    {
      category: 'Transactions',
      questions: [
        { q: 'How do I make a deposit?', a: 'Log in to your member portal, go to "Make Deposit", and follow the prompts. You can use mobile money, bank transfer, or cash at designated agents.' },
        { q: 'How long do withdrawals take?', a: 'Mobile money withdrawals are processed within minutes. Bank transfers typically take 1-2 business days. Cash withdrawals require visiting a designated agent.' },
       // { q: 'What are the transaction limits?', a: 'Daily limits vary by membership level and verification status. Standard accounts have a KSh 100,000 daily limit, which can be increased upon request.' }
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

  let counter = 0

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={onNavigate} />

      <main className={`flex-1 ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 py-16">

          {/* Header */}
          <div className="text-center mb-12 mt-10">
            <div className="text-3xl md:text-5xl font-bold">
              Frequently Asked Questions
            </div>
            <div className="mt-4 text-gray-500">
              Find answers to common questions about Ayedos SACCO
            </div>
          </div>

          {/* FAQ */}
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-10">
              <div className="text-xl font-semibold mb-4">
                {category.category}
              </div>

              <div className="space-y-3">
                {category.questions.map((item, qIndex) => {
                  const index = counter++
                  const isOpen = openIndex === index

                  return (
                    <div
                      key={qIndex}
                      className={`rounded-xl border transition ${
                        theme === 'dark'
                          ? 'bg-gray-800 border-gray-700'
                          : 'bg-white border-gray-200'
                      }`}
                    >
                      {/* Question */}
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between p-4 text-left"
                      >
                        <span className="font-medium">
                          {item.q}
                        </span>

                        <HiChevronDown
                          className={`transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* Answer */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? 'max-h-40 px-4 pb-4' : 'max-h-0'
                        }`}
                      >
                        <div
                          className={`text-sm ${
                            theme === 'dark'
                              ? 'text-gray-300'
                              : 'text-gray-600'
                          }`}
                        >
                          {item.a}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}

          {/* CTA */}
          <section
            className={`mt-16 rounded-2xl p-8 text-center ${
              theme === 'dark' ? 'bg-[#8cc63f]' : 'bg-[#8cc63f] text-white'
            }`}
          >
            <div className="text-2xl font-bold mb-2">
              Still Have Questions?
            </div>
            <div className="mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </div>

            <button
              onClick={() => navigate('contact')}
              className="border p-3 rounded-xl shadow-none"
            >
              Contact Support
            </button>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}

export default FAQ