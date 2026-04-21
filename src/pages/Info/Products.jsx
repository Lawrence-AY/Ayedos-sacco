import { useEffect, useMemo, useRef, useState } from 'react'
import {
  HiCurrencyDollar,
  HiBolt,
  HiCalculator
} from 'react-icons/hi2'
import { HiAcademicCap, HiHeart, HiOfficeBuilding } from 'react-icons/hi'

function Products({ onNavigate }) {
  const products = [
    {
      id: 'emergency-loan',
      icon: HiBolt,
      title: 'Emergency Loan',
      description: 'Fast access to short-term funds for urgent personal needs.',
      detailedContent:
        'The Emergency Loan is designed for members who need quick financial support with a short approval window and flexible entry requirements.',
      maxAmount: 50000,
      monthlyInterestRate: 0.01,
      maxRepaymentMonths: 12,
      defaultRepaymentMonths: 12,
      features: [
        'Eligibility: All members (100% share capital paid)',
        'Maximum amount: KSh 50,000',
        'Interest per month: 1%',
        'Processing time: 24hrs after application',
        'Processing Fee: 1%',
        'Maximum repayment period : 1 year',
        'Waiting period: 3 months membership',
        'Guarantors: Not required'
      ],
    },
    {
      id: 'education-loan',
      icon: HiAcademicCap,
      title: 'Education Loan',
      description: 'Support school fees and education expenses with a longer repayment window.',
      detailedContent:
        'The Education Loan helps members cover academic costs with manageable monthly repayments and a repayment period tailored to education planning.',
      maxAmount: 100000,
      monthlyInterestRate: 0.01,
      maxRepaymentMonths: 24,
      defaultRepaymentMonths: 18,
      features: [
        'Eligibility: 100% share capital paid',
        'Maximum amount: KSh 100,000',
        'Interest per month: 1%',
        'Processing time: 2 days after application',
        'Processing Fee: 1%',
        'Maximum repayment period: 2 years',
        'Waiting period: 6 months membership',
        'Guarantors: 2 required'
      ],
    },
    {
      id: 'welfare-loan',
      icon: HiHeart,
      title: 'Welfare Loan',
      description: 'A supportive loan option for member welfare and family needs.',
      detailedContent:
        'The Welfare Loan gives members room to handle personal and family obligations while spreading repayment over a practical medium-term schedule.',
      maxAmount: 100000,
      monthlyInterestRate: 0.01,
      maxRepaymentMonths: 24,
      defaultRepaymentMonths: 18,
      features: [
        'Eligibility: 100% share capital paid',
        'Maximum amount: KSh 100,000',
        'Interest per month: 1%',
        'Processing time: 3-5 days after application',
        'Processing Fee: 1%',
        'Maximum repayment period: 2 years',
        'Waiting period: 6 months membership',
        'Guarantors: 2 required'
      ],
    },
    {
      id: 'development-loan',
      icon: HiOfficeBuilding,
      title: 'Development Loan',
      description: 'For bigger long-term projects with a higher limit and extended tenure.',
      detailedContent:
        'The Development Loan is suited to larger goals and investments, combining a higher borrowing ceiling with a longer repayment period.',
      maxAmount: 250000,
      monthlyInterestRate: 0.015,
      maxRepaymentMonths: 72,
      defaultRepaymentMonths: 48,
      features: [
        'Eligibility: 100% share capital paid',
        'Maximum amount: KSh 250,000',
        'Interest per month: 1.5%',
        'Processing time: 5-10 days after application',
        'Processing Fee: 1%',
        'Maximum repayment period: 6 years',
        'Waiting period: 1 year membership',
        'Guarantors: 3 required'
      ],
    }
  ]

  const navigate = (route) => {
    if (onNavigate) {
      onNavigate(route)
      return
    }

    window.location.href = route ? `/${route}` : '/'
  }

  const [theme, setTheme] = useState(() => {
    return document.documentElement.getAttribute('data-theme') || 'light'
  })

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const newTheme = document.documentElement.getAttribute('data-theme') || 'light'
      setTheme(newTheme)
    })
    observer.observe(document.documentElement, { attributes: true })
    return () => observer.disconnect()
  }, [])

  const isDark = theme === 'dark'

  // Helper function to download a file
  const downloadForm = (filePath, fileName) => {
    const link = document.createElement('a')
    link.href = filePath
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [calculatorProductId, setCalculatorProductId] = useState(products[0].id)
  const [loanAmount, setLoanAmount] = useState(products[0].maxAmount / 2)
  const [repaymentMonths, setRepaymentMonths] = useState(products[0].defaultRepaymentMonths)
  const modalRef = useRef(null)
  const selectedCalculatorProduct =
    products.find((product) => product.id === calculatorProductId) ?? products[0]

  useEffect(() => {
    setLoanAmount((currentAmount) =>
      Math.min(Math.max(currentAmount, 1000), selectedCalculatorProduct.maxAmount)
    )
    setRepaymentMonths((currentMonths) =>
      Math.min(Math.max(currentMonths, 1), selectedCalculatorProduct.maxRepaymentMonths)
    )
  }, [selectedCalculatorProduct])

  const loanSummary = useMemo(() => {
    const principal = Number(loanAmount) || 0
    const months = Number(repaymentMonths) || 0
    const rate = selectedCalculatorProduct.monthlyInterestRate

    if (principal <= 0 || months <= 0) {
      return {
        monthlyPayment: 0,
        totalRepayment: 0,
        totalInterest: 0
      }
    }

    const monthlyPayment =
      rate === 0
        ? principal / months
        : (principal * rate) / (1 - Math.pow(1 + rate, -months))
    const totalRepayment = monthlyPayment * months
    const totalInterest = totalRepayment - principal

    return {
      monthlyPayment,
      totalRepayment,
      totalInterest
    }
  }, [loanAmount, repaymentMonths, selectedCalculatorProduct])

  const formatCurrency = (value) =>
    new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      maximumFractionDigits: 0
    }).format(value)

  const openModal = (product) => {
    setSelectedProduct(product)
    modalRef.current?.showModal()
  }

  const closeModal = () => {
    modalRef.current?.close()
    setSelectedProduct(null)
  }

  return (
    <div className={`info-page-container `}>
      <div className="info-hero mb-0     ">
        <div className={`text-4xl font-semibold`}>Products</div>
        <div className={`text-xl font-semibold`}>Complete solutions for modern SACCO management</div>
      </div>

      <div className={`min-h-screen ${isDark ? '  text-white' : '  text-gray-900'}`}>
      {/* DOWNLOAD FORMS SECTION */}
      <div className="max-w-6xl mx-auto px-4 pb-5 ">
        <div className={`rounded-xl border p-6 text-center ${
          isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
        }`}>
          <div className="text-xl font-semibold mb-4">Download Application Forms</div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => downloadForm(
                '/forms/AYEDOS SACCO - Membership application Form.pdf',
                'AYEDOS_Membership_Application.pdf'
              )}
              className="px-6 py-2 rounded-lg font-medium transition-colors"
              style={{ backgroundColor: '#8cc63f', color: 'white' }}
            >
             Membership Application Form
            </button>
            <button
              onClick={() => downloadForm(
                '/forms/AYEDOS SACCO Loan application form.pdf',
                'AYEDOS_Loan_Application.pdf'
              )}
              className="px-6 py-2 rounded-lg font-medium transition-colors"
              style={{ backgroundColor: '#8cc63f', color: 'white' }}
            >
             Loan Application Form
            </button>
              <button
              onClick={() => downloadForm(
                '/forms/AYEDOS SACCO LOAN POLICY.pdf',
                'AYEDOS_SACCO_LOAN_POLICY.pdf'
              )}
              className="px-6 py-2 rounded-lg font-medium transition-colors"
              style={{ backgroundColor: '#8cc63f', color: 'white' }}
            >
            Loan Policy
            </button>
          </div>
           
        </div>
      </div>

      {/* LOAN CALCULATOR */}
      <div className="max-w-6xl mx-auto px-4 pb-8">
        <div
          className={`grid gap-6 rounded-3xl border p-6 md:grid-cols-[1.15fr_0.85fr] ${
            isDark
              ? 'border-[#8cc63f]/25 bg-linear-to-br from-gray-900 via-black to-gray-950'
              : 'border-[#8cc63f]/20 bg-linear-to-br from-white via-[#f8fff0] to-[#eef7e2]'
          }`}
        >
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#8cc63f]/15 px-3 py-1 text-sm font-semibold text-[#8cc63f]">
              <HiCalculator />
              Loan calculator
            </div>
            <h2 className={`mb-2 text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Estimate your monthly repayment
            </h2>
            <p className={`mb-6 max-w-2xl text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
              Pick a product, set your amount, and adjust the repayment period to see an estimated monthly installment based on the listed monthly interest rate.
            </p>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className={`mb-2 block text-sm font-medium ${isDark ? 'text-gray-200' : 'text-slate-700'}`}>
                  Loan product
                </span>
                <select
                  value={calculatorProductId}
                  onChange={(event) => setCalculatorProductId(event.target.value)}
                  className={`w-full rounded-2xl border px-4 py-3 outline-none transition ${
                    isDark
                      ? 'border-gray-700 bg-gray-900 text-white focus:border-[#8cc63f]'
                      : 'border-gray-200 bg-white text-slate-900 focus:border-[#8cc63f]'
                  }`}
                >
                  {products.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.title}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className={`mb-2 block text-sm font-medium ${isDark ? 'text-gray-200' : 'text-slate-700'}`}>
                  Loan amount
                </span>
                <input
                  type="number"
                  min="1000"
                  max={selectedCalculatorProduct.maxAmount}
                   
                  value={loanAmount}
                  onChange={(event) => setLoanAmount(Number(event.target.value))}
                  className={`w-full rounded-2xl border px-4 py-3 outline-none transition ${
                    isDark
                      ? 'border-gray-700 bg-gray-900 text-white focus:border-[#8cc63f]'
                      : 'border-gray-200 bg-white text-slate-900 focus:border-[#8cc63f]'
                  }`}
                />
                <span className={`mt-2 block text-xs ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                  Maximum for this product: {formatCurrency(selectedCalculatorProduct.maxAmount)}
                </span>
              </label>
            </div>

            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-slate-700'}`}>
                  Repayment period
                </span>
                <span className="rounded-full bg-[#8cc63f]/15 px-3 py-1 text-sm font-semibold text-[#8cc63f]">
                  {repaymentMonths} months
                </span>
              </div>
              <input
                type="range"
                min="1"
                max={selectedCalculatorProduct.maxRepaymentMonths}
                step="1"
                value={repaymentMonths}
                onChange={(event) => setRepaymentMonths(Number(event.target.value))}
                className="range range-success w-full"
              />
              <div className={`mt-2 flex justify-between text-xs ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                <span>1 month</span>
                <span>{selectedCalculatorProduct.maxRepaymentMonths} months</span>
              </div>
            </div>
          </div>

          <div
            className={`rounded-3xl border p-6 ${
              isDark ? 'border-white/10 bg-white/5' : 'border-white/80 bg-white/80'
            }`}
          >
            <div className={`mb-4 text-sm font-medium ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
              Estimated repayment summary
            </div>
            <div className={`mb-5 text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {formatCurrency(loanSummary.monthlyPayment)}
              <span className={`ml-2 text-base font-medium ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                / month
              </span>
            </div>

            <div className="space-y-3">
              <div className={`flex items-center justify-between rounded-2xl px-4 py-3 ${isDark ? 'bg-black/40' : 'bg-slate-50'}`}>
                <span className={isDark ? 'text-gray-300' : 'text-slate-600'}>Total repayment</span>
                <strong>{formatCurrency(loanSummary.totalRepayment)}</strong>
              </div>
              <div className={`flex items-center justify-between rounded-2xl px-4 py-3 ${isDark ? 'bg-black/40' : 'bg-slate-50'}`}>
                <span className={isDark ? 'text-gray-300' : 'text-slate-600'}>Total interest</span>
                <strong>{formatCurrency(loanSummary.totalInterest)}</strong>
              </div>
              <div className={`flex items-center justify-between rounded-2xl px-4 py-3 ${isDark ? 'bg-black/40' : 'bg-slate-50'}`}>
                <span className={isDark ? 'text-gray-300' : 'text-slate-600'}>Monthly interest rate</span>
                <strong>{(selectedCalculatorProduct.monthlyInterestRate * 100).toFixed(1)}%</strong>
              </div>
            </div>

            <p className={`mt-5 text-xs leading-6 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
              This is an estimate for planning purposes and may vary from final approved loan terms, fees, or SACCO review outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-300 hover:-translate-y-2 flex flex-col ${
                  isDark
                    ? 'bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-[#8cc63f]/50'
                    : 'bg-white border-gray-200 hover:shadow-xl hover:border-[#8cc63f]/40'
                }`}
              >
                <div className="p-6 flex flex-col grow">
                  <div className="mb-4 text-3xl transition-transform duration-300 group-hover:scale-110" style={{ color: '#8cc63f' }}>
                    <Icon />
                  </div>
                  <div className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{product.title}</div>
                  <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {product.description}
                  </p>
                  <ul className="space-y-1 mb-4 text-sm">
                    {product.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#8cc63f]/20 flex items-center justify-center text-[#8cc63f] text-xs">✓</span>
                        <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                      </li>
                    ))}
                    {product.features.length > 3 && (
                      <li className="text-xs opacity-70">+{product.features.length - 3} more</li>
                    )}
                  </ul>
                  <button
                    onClick={() => openModal(product)}
                    className="inline-flex items-center gap-1 text-sm mt-auto transition-all duration-300 hover:gap-2"
                    style={{ color: '#8cc63f' }}
                  >
                    Learn more <span>→</span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

    

      {/* CTA SECTION */}
      <div className="py-0 mb-15">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className={`rounded-3xl p-10 text-center transition-all duration-300 hover:-translate-y-1 ${
            isDark 
              ? 'bg-linear-to-r from-[#8cc63f]/20 to-transparent border border-[#8cc63f]/30' 
              : 'bg-linear-to-r from-[#8cc63f]/10 to-transparent border border-[#8cc63f]/20'
          }`}>
            <div className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Need More Help?
            </div>
            <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
              If you can't find what you're looking for, our support team is ready to assist.
            </p>
            <button
              className="px-6 py-3 rounded-xl font-semibold bg-[#8cc63f] hover:bg-[#9fd858] text-slate-900 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              onClick={() => navigate('contact')}
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>

      {/* DaisyUI Modal for product details */}
      <dialog ref={modalRef} className="modal">
        <div className="modal-box max-w-md md:max-w-lg w-full">
          {selectedProduct && (
            <>
              <div className="flex items-center gap-2 mb-3">
                <div className="text-2xl" style={{ color: '#8cc63f' }}>
                  {(() => {
                    const Icon = selectedProduct.icon
                    return <Icon />
                  })()}
                </div>
                <div className="font-bold text-xl">{selectedProduct.title}</div>
              </div>
              <div className={`py-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="mb-3">{selectedProduct.detailedContent}</p>
                <div className="font-semibold mt-4 mb-2">Key Features:</div>
                <ul className="list-disc list-inside space-y-1">
                  {selectedProduct.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  <button
                    onClick={closeModal}
                    className="btn btn-sm bg-gray-200 hover:bg-gray-300 text-gray-800 border-0"
                  >
                    Close
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={closeModal}>close</button>
        </form>
      </dialog>
      </div>
    </div>
  )
}

export default Products
