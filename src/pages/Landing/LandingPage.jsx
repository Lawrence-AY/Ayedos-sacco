import { useState, useEffect } from 'react'
import { HiArrowRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/ui/Footer'

function LandingPage({ onNavigate }) {
  const navigate = (route) => {
    if (onNavigate) onNavigate(route)
  }

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0)
  const heroImages = ['/landingphoto.png', '/landingphoto2.png', '/hero-aye.png']

  // Theme state (synchronised with data-theme on <html>)
  const [theme, setTheme] = useState(() => {
    return document.documentElement.getAttribute('data-theme') || 'light'
  })

  // Listen for changes to the data-theme attribute
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

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index) => setCurrentSlide(index)
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)

  // Helper for dynamic background classes
  const bgClass = (lightClass, darkClass) => {
    return theme === 'dark' ? darkClass : lightClass
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={onNavigate} />

      {/* HERO CAROUSEL - remains mostly the same, overlay adapts slightly */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="relative w-full h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay that adapts to theme */}
              <div className={`absolute inset-0 ${
                theme === 'dark'
                  ? 'bg-black/40'
                  : 'bg-gradient-to-r from-black/30 via-black/20 to-black/30'
              }`}>
                <div className="text-center max-w-3xl mx-auto h-screen pt-[65%] sm:pt-[15%]">
                  <div className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-3">
                    AYEDOS SACCO
                  </div>
                  <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow-md leading-relaxed max-w-2xl mx-auto">
                    A modern office-based financial system for savings, shares, dividends,
                    and member administration with a clean banking-grade experience.
                  </p>
                  <div className="flex flex-row sm:flex-row gap-4 justify-center pt-[15%] sm:pt-[1%]">
                    <button
                      className="btn btn-lg bg-[#8cc63f] hover:bg-[#9fd858] text-slate-900 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-42"
                      onClick={() => navigate('login')}
                    >
                      Get Started <HiArrowRight className="ml-2" size={20} />
                    </button>
                    <button
                      className="btn btn-lg bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-42"
                      onClick={() => navigate('/')}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel controls (unchanged) */}
        <button onClick={prevSlide} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110">
          <HiChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110">
          <HiChevronRight size={24} />
        </button>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'bg-[#8cc63f] w-10 h-3'
                  : 'bg-white/40 hover:bg-white/60 w-3 h-3'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ABOUT - WHY CHOOSE US (theme‑aware) */}
      <section className={`py-20 px-4 transition-colors duration-300 ${bgClass('bg-gray-50', 'bg-slate-900')}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${bgClass('text-slate-800', 'text-white')}`}>
              Why Choose Ayedos
            </h2>
            <p className={`text-lg ${bgClass('text-slate-600', 'text-slate-300')}`}>
              Join a financial community built on trust, transparency, and shared prosperity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Financial Growth", description: "Your savings work for you through competitive dividends and smart financial solutions designed for long-term stability.", icon: "💰" },
              { title: "Community Trust", description: "We prioritize integrity, open communication, and member-first decisions in everything we do.", icon: "🤝" },
              { title: "Flexible Solutions", description: "Access affordable and flexible loan options tailored to your needs — when you need them most.", icon: "⚡" }
            ].map((item, index) => (
              <div
                key={index}
                className={`group card transition-all duration-300 hover:-translate-y-2 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-[#8cc63f]/20 to-[#8cc63f]/10 border-[#8cc63f]/40 hover:border-[#8cc63f]/80 shadow-lg'
                    : 'bg-white border border-gray-200 shadow-md hover:shadow-xl'
                }`}
              >
                <div className="card-body">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h2 className={`card-title text-xl ${bgClass('text-slate-800', 'text-white')}`}>{item.title}</h2>
                  <p className={bgClass('text-slate-600', 'text-slate-300')}>{item.description}</p>
                  <div className="card-actions justify-start mt-4 pt-4 border-t border-gray-200 dark:border-[#8cc63f]/20">
                    <button className="btn btn-sm bg-[#8cc63f] hover:bg-[#9fd858] text-slate-900 border-none shadow-md">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES (theme‑aware) */}
      <section className={`py-24 px-4 transition-colors duration-300 ${bgClass('bg-white', 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900')}`}>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${bgClass('text-slate-800', 'text-white')}`}>
              Our Services
            </h2>
            <p className={`text-lg ${bgClass('text-slate-600', 'text-white/80')}`}>
              Everything you need to run a SACCO efficiently, designed with polished precision and care.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Savings", icon: "💰", desc: "Structured savings plans to build discipline and long-term wealth." },
              { title: "Loans & Credit", icon: "📊", desc: "Flexible financing designed for members and their families." },
              { title: "Investments", icon: "📈", desc: "Collective opportunities that grow wealth through smart choices." },
              { title: "Education", icon: "🏦", desc: "Clear guidance so members make confident financial decisions." },
            ].map((service, i) => (
              <div
                key={i}
                className={`group overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                  theme === 'dark'
                    ? 'border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#8cc63f]/60 hover:bg-white/10'
                    : 'border border-gray-200 bg-gray-50 shadow-md hover:shadow-lg hover:border-[#8cc63f]/40'
                }`}
              >
                <div className={`relative h-40 overflow-hidden flex items-center justify-center ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-[#8cc63f]/30 to-blue-500/30'
                    : 'bg-gradient-to-br from-[#8cc63f]/20 to-blue-500/20'
                }`}>
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                </div>
                <div className="p-6 text-center">
                  <h3 className={`text-xl font-semibold mb-2 ${bgClass('text-slate-800', 'text-white')}`}>{service.title}</h3>
                  <p className={`text-sm ${bgClass('text-slate-600', 'text-white/70')}`}>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBER BENEFITS (theme‑aware) */}
      <section className={`py-24 px-4 transition-colors duration-300 ${bgClass('bg-gray-100', 'bg-slate-950')}`}>
        <div className="max-w-6xl mx-auto">
          <div className={`rounded-3xl p-10 md:p-16 shadow-xl backdrop-blur-sm ${
            theme === 'dark'
              ? 'border border-[#8cc63f]/40 bg-gradient-to-br from-[#8cc63f]/20 to-[#8cc63f]/10'
              : 'border border-[#8cc63f]/30 bg-white'
          }`}>
            <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] items-center">
              <div className="space-y-8">
                <div>
                  <p className="text-sm uppercase tracking-widest font-semibold text-[#8cc63f] mb-4">
                    ✨ Your Financial Growth Starts Here
                  </p>
                  <h2 className={`text-4xl md:text-5xl font-bold leading-tight ${bgClass('text-slate-800', 'text-white')}`}>
                    Take Control of Your Money
                  </h2>
                </div>
                <p className={`text-lg leading-relaxed max-w-2xl ${bgClass('text-slate-600', 'text-slate-300')}`}>
                  Better savings, affordable loans, and real returns await. Becoming a member is your first step toward financial freedom and prosperity.
                </p>
                <button
                  className="btn btn-lg bg-[#8cc63f] hover:bg-[#9fd858] text-slate-900 border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  onClick={() => navigate('register')}
                >
                  Become a Member Today
                </button>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  { title: '💾 Savings', text: 'Secure your future with consistent, disciplined savings.' },
                  { title: '💳 Affordable Loans', text: 'Access smart credit with friendly repayment terms.' },
                  { title: '📊 Real Returns', text: 'Grow wealth through cooperative dividends.' },
                  { title: '👥 Member Power', text: 'Benefit from shared trust and financial control.' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`group rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                      theme === 'dark'
                        ? 'bg-slate-800 border-[#8cc63f]/40 hover:border-[#8cc63f]/60'
                        : 'bg-white border-gray-200 shadow-md hover:shadow-lg hover:border-[#8cc63f]/40'
                    }`}
                  >
                    <h3 className={`font-semibold text-lg mb-2 ${bgClass('text-slate-800', 'text-white')}`}>{item.title}</h3>
                    <p className={`text-sm leading-relaxed ${bgClass('text-slate-600', 'text-slate-400')}`}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN SNAPSHOT (theme‑aware) */}
      <section className={`py-24 px-4 transition-colors duration-300 ${bgClass('bg-gray-50', 'bg-slate-900')}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${bgClass('text-slate-800', 'text-white')}`}>
              Product Design Snapshot
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${bgClass('text-slate-600', 'text-slate-300')}`}>
              A polished visual preview of the user experience that Ayedos provides to its members.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              { title: "Member Portal", desc: "Clean, intuitive dashboard for managing contributions, loans, and staying updated.", features: ["Easy Navigation", "Real-time Updates", "Secure Access"] },
              { title: "Reporting Hub", desc: "Insightful summaries, official notices, and comprehensive financial overviews.", features: ["Detailed Reports", "Financial Insights", "Compliance Tools"] },
              { title: "Support Center", desc: "Fast access to help, FAQs, and member service tools when you need assistance.", features: ["24/7 Assistance", "Knowledge Base", "Live Support"] },
            ].map((item, index) => (
              <div
                key={index}
                className={`group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  theme === 'dark'
                    ? 'border border-slate-700 bg-slate-800'
                    : 'border border-gray-200 bg-white'
                }`}
              >
                <div className={`h-48 flex items-center justify-center transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-[#8cc63f]/30 to-blue-500/30 group-hover:from-[#8cc63f]/50 group-hover:to-blue-500/50'
                    : 'bg-gradient-to-br from-[#8cc63f]/20 to-blue-500/20 group-hover:from-[#8cc63f]/30 group-hover:to-blue-500/30'
                }`}>
                  <span className="text-4xl">📱</span>
                </div>
                <div className="p-8">
                  <h3 className={`text-2xl font-semibold mb-3 ${bgClass('text-slate-800', 'text-white')}`}>{item.title}</h3>
                  <p className={`mb-5 leading-relaxed ${bgClass('text-slate-600', 'text-slate-300')}`}>{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 bg-[#8cc63f]/10 text-[#8cc63f] text-xs font-medium rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default LandingPage