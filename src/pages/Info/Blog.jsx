import { useState, useEffect, useRef } from 'react'
import { HiUser, HiCalendar, HiArrowRight } from 'react-icons/hi2'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/ui/Footer'

function Blog({ onNavigate }) {
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

  const posts = [
    {
      title: 'Understanding SACCO Regulations in Kenya: A Complete Guide',
      excerpt: 'Navigate the complex world of SASRA compliance and learn what every SACCO administrator needs to know about regulatory requirements.',
       
      category: 'Compliance',
      featured: true,
      content: 'This comprehensive guide covers all aspects of SACCO regulations in Kenya, including SASRA reporting requirements, capital adequacy ratios, governance standards, and member deposit protection. Learn how to stay compliant while maximizing operational efficiency.'
    },
    {
      title: '5 Strategies for Increasing Member Engagement in Your SACCO',
      excerpt: 'Discover proven methods to boost member participation and create a thriving cooperative community.',
       
      category: 'Growth',
      content: 'Member engagement is crucial for SACCO growth. This article explores five actionable strategies: digital onboarding, personalized communication, loyalty programs, financial literacy workshops, and community events.'
    },
    {
      title: 'The Future of Digital Banking for Cooperatives',
      excerpt: 'How emerging technologies are transforming the way SACCOs operate and serve their members.',
      
      category: 'Technology',
      content: 'From AI-powered chatbots to blockchain-based record keeping, discover the technologies reshaping cooperative banking. Learn how to prepare your SACCO for the next wave of digital transformation.'
    },
    {
      title: 'Managing Dividends Effectively: Best Practices for 2026',
      excerpt: 'Learn the latest approaches to calculating and distributing dividends while maintaining member satisfaction.',
       
      category: 'Finance',
      content: 'Dividend management requires balancing profitability with member expectations. This post covers automated calculation tools, transparent communication strategies, and regulatory compliance tips.'
    },
    {
      title: 'How to Reduce Loan Default Rates in Your SACCO',
      excerpt: 'Practical tips and strategies for minimizing risk and ensuring healthy loan portfolios.',
      
      category: 'Loans',
      content: 'Loan defaults can cripple a SACCO. Learn about credit scoring models, repayment reminders, restructuring options, and member education programs that significantly reduce default rates.'
    },
    {
      title: 'Mobile Money Integration: A Game Changer for SACCOs',
      excerpt: 'Why integrating mobile money platforms can dramatically improve member experience and operational efficiency.',
       
      category: 'Technology',
      content: 'Mobile money has revolutionized payments. This article explains how SACCOs can integrate with M-Pesa, Airtel Money, and other platforms to enable instant deposits, loan disbursements, and withdrawal requests.'
    }
  ]

  const categories = ['All', 'Compliance', 'Growth', 'Technology', 'Finance', 'Loans']
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedPost, setSelectedPost] = useState(null)
  const modalRef = useRef(null)

  const filteredPosts = activeCategory === 'All'
    ? posts
    : posts.filter(post => post.category === activeCategory)

  const featuredPost = filteredPosts.find(post => post.featured) || filteredPosts[0]
  const regularPosts = filteredPosts.filter(post => !post.featured || post !== featuredPost)

  const openModal = (post) => {
    setSelectedPost(post)
    modalRef.current?.showModal()
  }

  const closeModal = () => {
    modalRef.current?.close()
    setSelectedPost(null)
  }

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar onNavigate={onNavigate} />

      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto px-4 py-1  text-center">
        <div className="text-3xl mt-20 md:text-5xl font-bold">Blog</div>
        <div className={`mt-2 max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          Insights and updates from the Ayedos team
        </div>
      </div>

      {/* CATEGORY FILTER */}
      <div className="max-w-6xl mx-auto mt-2 px-4 mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                activeCategory === cat
                  ? 'text-white'
                  : isDark
                  ? 'bg-gray-800 border border-gray-700 hover:bg-gray-700'
                  : 'bg-white border hover:bg-gray-100'
              }`}
              style={activeCategory === cat ? { backgroundColor: '#8cc63f' } : {}}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* FEATURED POST (if exists) */}
      {featuredPost && (
        <div className="max-w-6xl mx-auto px-4 pb-12">
          <div
            className={`rounded-2xl overflow-hidden border transition ${
              isDark
                ? 'bg-gray-800 border-gray-700'
                : 'bg-white border-gray-200 shadow-sm'
            }`}
          >
            <div className="p-8">
              <span
                className="text-xs font-medium px-2 py-1 rounded inline-block mb-4"
                style={{ backgroundColor: '#8cc63f20', color: '#8cc63f' }}
              >
                Featured
              </span>
              <div className="text-2xl md:text-3xl font-bold mb-3">{featuredPost.title}</div>
              <div className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {featuredPost.excerpt}
              </div>
              <div className="flex flex-wrap gap-4 text-sm mb-4">
                 
              </div>
              <button
                onClick={() => openModal(featuredPost)}
                className="hover:underline inline-flex items-center gap-1"
                style={{ color: '#8cc63f' }}
              >
                Read Article <HiArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* POSTS GRID */}
      <div className="max-w-6xl mx-auto px-4 pb-0">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post, index) => (
            <div
              key={index}
              className={`rounded-xl border transition flex flex-col ${
                isDark
                  ? 'bg-gray-800 border-gray-700 hover:bg-gray-700'
                  : 'bg-white border-gray-200 hover:shadow-md'
              }`}
            >
              <div className="p-6 flex flex-col flex-grow">
                <span
                  className="text-xs font-medium px-2 py-1 rounded self-start mb-3"
                  style={{ backgroundColor: '#8cc63f20', color: '#8cc63f' }}
                >
                  {post.category}
                </span>
                <div className="text-lg font-semibold mb-2">{post.title}</div>
                <div className={`text-sm mb-4 flex-grow ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {post.excerpt}
                </div>
                 
                <button
                  onClick={() => openModal(post)}
                  className="hover:underline inline-flex items-center gap-1 text-sm"
                  style={{ color: '#8cc63f' }}
                >
                  Read more <HiArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NEWSLETTER / CTA SECTION - matching green style */}
      <div className="py-50 pb-6">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: '#8cc63f', color: 'white' }}>
            <div className="text-2xl font-bold mb-2">Stay Updated</div>
            <div className="mb-6 opacity-90">
              Subscribe to our newsletter for the latest insights and updates
            </div>
            <button
              onClick={() => onNavigate && onNavigate('contact')}
              className="border border-white px-4 py-2 rounded-xl hover:bg-white hover:text-black transition"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* DaisyUI Modal for full article */}
      <dialog ref={modalRef} className="modal">
        <div className="modal-box max-w-md md:max-w-lg w-full">
          {selectedPost && (
            <>
              <div className="font-bold text-xl mb-2">{selectedPost.title}</div>
              <div className="flex flex-wrap items-center gap-3 text-sm mb-4">
                <span
                  className="text-xs font-medium px-2 py-1 rounded"
                  style={{ backgroundColor: '#8cc63f20', color: '#8cc63f' }}
                >
                  {selectedPost.category}
                </span>
                
              </div>
              <div className={`py-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <div>{selectedPost.content}</div>
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

      <Footer />
    </div>
  )
}

export default Blog