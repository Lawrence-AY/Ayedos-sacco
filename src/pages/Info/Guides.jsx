import {
  HiDocumentText,
  HiBookOpen,
  HiAcademicCap,
  HiPlayCircle
} from 'react-icons/hi2'
import { useState, useEffect, useRef } from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/ui/Footer'

function Guides({ onNavigate }) {
   const navigate = (route) => {
    if (onNavigate) onNavigate(route)
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

  const guides = [
    {
      icon: HiDocumentText,
      title: 'Getting Started Guide',
      description: 'Learn the basics of setting up and using your Ayedos account.',
      category: 'Basics',
      readTime: '5 min read',
      detailedContent: 'This guide walks you through creating your Ayedos account, setting up your profile, linking your mobile money, and making your first deposit. You\'ll also learn how to navigate the dashboard, check your savings, and access key features like loan applications and dividend tracking. Perfect for new members who want to hit the ground running.'
    },
    {
      icon: HiBookOpen,
      title: 'Member Portal Tutorial',
      description: 'Complete walkthrough of the member portal features.',
      category: 'Members',
      readTime: '10 min read',
      detailedContent: 'Discover every corner of the Ayedos member portal. From updating personal information and viewing transaction history to requesting statements and managing beneficiaries – this tutorial covers it all. We also explain how to use the notification center, download receipts, and customize your dashboard widgets.'
    },
    {
      icon: HiDocumentText,
      title: 'Understanding Your Statement',
      description: 'Learn how to read your statements.',
      category: 'Members',
      readTime: '5 min read',
      detailedContent: 'Your monthly and annual statements contain important information about share contributions, savings growth, loan balances, and dividend earnings. This guide deciphers each section, explains the abbreviations, and shows you how to spot discrepancies. You\'ll also learn how to export statements for tax or accounting purposes.'
    },
    {
      icon: HiBookOpen,
      title: 'Loan Application Process',
      description: 'Everything about applying and managing loans.',
      category: 'Loans',
      readTime: '8 min read',
      detailedContent: 'Learn the step-by-step process to apply for a loan through Ayedos. This guide covers eligibility checks, required documents, interest rate calculations, repayment schedules, and early repayment options. We also explain how to track your application status and receive disbursements directly to your mobile wallet.'
    }
  ]

  // Modal state
  const [selectedGuide, setSelectedGuide] = useState(null)
  const modalRef = useRef(null)

  const openModal = (guide) => {
    setSelectedGuide(guide)
    modalRef.current?.showModal()
  }

  const closeModal = () => {
    modalRef.current?.close()
    setSelectedGuide(null)
  }

  return (
    <>
 
      <Navbar onNavigate={onNavigate} />
    <div className={`  ${isDark ? 'bg-black' : 'bg-white'}`}>

      {/* HERO - matching FAQ style */}
      <div className="max-w-4xl mx-auto px-4  py-16 text-center">
        <div className="text-3xl mt-10 md:text-5xl font-bold">
          Guides & Resources
        </div>
        <p className={`mt-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          Step-by-step guides to help you get the most out of Ayedos
        </p>
      </div>

      {/* GUIDES GRID - matching FAQ card styling */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide, index) => {
            const Icon = guide.icon
            return (
              <div
                key={index}
                className={`rounded-xl border transition ${
                  isDark
                    ? 'bg-gray-800 border-gray-700 hover:bg-gray-700'
                    : 'bg-white border-gray-200 hover:shadow-md'
                }`}
              >
                <div className="p-6">
                  <div className="mb-4 text-3xl" style={{ color: '#8cc63f' }}>
                    <Icon />
                  </div>

                  <span className="text-xs font-medium px-2 py-1 rounded" style={{ backgroundColor: '#8cc63f20', color: '#8cc63f' }}>
                    {guide.category}
                  </span>

                  <h3 className="mt-3 text-lg font-semibold">
                    {guide.title}
                  </h3>

                  <p className={`mt-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {guide.description}
                  </p>

                  <div className="flex justify-between items-center mt-6 text-sm">
                     

                    <button
                      onClick={() => openModal(guide)}
                      className="hover:underline"
                      style={{ color: '#8cc63f' }}
                    >
                      Read more →
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* HELP SECTION - matching FAQ's green CTA */}
      <div className="py-0 mb-15">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: '#8cc63f', color: 'white' }}>
            <h2 className="text-2xl font-bold mb-2">
              Need More Help?
            </h2>
            <p className="mb-6 opacity-90">
              If you can't find what you're looking for, our support team is ready to assist.
            </p>
             <button
              onClick={() => navigate('contact')}
              className="border p-3 rounded-xl shadow-none mt-3"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>

      {/* DaisyUI Modal */}
      <dialog ref={modalRef} className="modal">
        <div className="modal-box max-w-md md:max-w-lg w-full">
          {selectedGuide && (
            <>
              <h3 className="font-bold text-xl mb-2">{selectedGuide.title}</h3>
              <div className="flex items-center gap-3 text-sm mb-4">
                <span className="text-xs font-medium px-2 py-1 rounded" style={{ backgroundColor: '#8cc63f20', color: '#8cc63f' }}>
                  {selectedGuide.category}
                </span>
              
              </div>
              <p className={`py-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {selectedGuide.detailedContent}
              </p>
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

      <Footer />
    </div>
       </>
  )
}

export default Guides