import { useState, useEffect, useRef } from 'react'
import {
  HiCreditCard,
  HiScale,
  HiChartPie,
  HiCurrencyDollar,
  HiShieldCheck,
  HiGlobeAlt,
  HiDeviceTablet,
  HiBolt,
  HiArrowLeft
} from 'react-icons/hi2'
import { HiAcademicCap, HiHeart, HiOfficeBuilding } from 'react-icons/hi'

function Products({ onNavigate }) {
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

  const products = [
    {
      icon: HiBolt,
      title: 'Emergency Loan',
      features: [
        'Eligibility: All members (100% share capital paid)',
        'Maximum amount: KSh 50,000',
        'Interest per month: 1%',
        'Processing time: 24hrs after application',
        'Maximum repayment period : 1 year',
        'Waiting period: 3 months membership',
        'Guarantors: Not required'
      ],
    },
    {
      icon: HiAcademicCap,
      title: 'Education Loan',
      features: [
        'Eligibility: 100% share capital paid',
        'Maximum amount: KSh 100,000',
        'Interest per month: 1%',
        'Processing time: 2 days after application',
        'Maximum repayment period: 2 years',
        'Waiting period: 6 months membership',
        'Guarantors: 2 required'
      ],
    },
    {
      icon: HiHeart,
      title: 'Welfare Loan',
      features: [
        'Eligibility: 100% share capital paid',
        'Maximum amount: KSh 100,000',
        'Interest per month: 1%',
        'Processing time: 3-5 days after application',
        'Maximum repayment period: 2 years',
        'Waiting period: 6 months membership',
        'Guarantors: 2 required'
      ],
    },
    {
      icon: HiOfficeBuilding,
      title: 'Development Loan',
      features: [
        'Eligibility: 100% share capital paid',
        'Maximum amount: KSh 250,000',
        'Interest per month: 1.5%',
        'Processing time: 5-10 days after application',
        'Maximum repayment period: 6 years',
        'Waiting period: 1 year membership',
        'Guarantors: 3 required'
      ],
    }
  ]

  const [selectedProduct, setSelectedProduct] = useState(null)
  const modalRef = useRef(null)

  const openModal = (product) => {
    setSelectedProduct(product)
    modalRef.current?.showModal()
  }

  const closeModal = () => {
    modalRef.current?.close()
    setSelectedProduct(null)
  }

  return (
    <div className="info-page-container">
      <div className="info-hero">
        <h1>Products</h1>
        <p>Complete solutions for modern SACCO management</p>
      </div>

      <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
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
              ? 'bg-gradient-to-r from-[#8cc63f]/20 to-transparent border border-[#8cc63f]/30' 
              : 'bg-gradient-to-r from-[#8cc63f]/10 to-transparent border border-[#8cc63f]/20'
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
