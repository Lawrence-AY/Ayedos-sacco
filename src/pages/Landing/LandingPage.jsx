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

  // Auto-rotate carousel every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <div className="min-h-screen flex flex-col">

      <Navbar onNavigate={onNavigate} />

      {/* HERO CAROUSEL */}
      <section className="relative w-full h-screen overflow-hidden bg-base-100 dark:bg-base-900">
        {/* Carousel Container */}
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
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 dark:from-black/70 dark:via-black/50 dark:to-black/70"></div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center px-4 z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              AYEDOS SACCO
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow-md leading-relaxed max-w-2xl mx-auto">
              A modern office-based financial system for savings, shares, dividends, 
              and member administration with a clean banking-grade experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="btn btn-lg bg-[#8cc63f] hover:bg-[#9fd858] text-slate-900 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                onClick={() => navigate('login')}
              >
                Get Started <HiArrowRight className="ml-2" size={20} />
              </button>
              <button
                className="btn btn-lg bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                onClick={() => navigate('/')}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Controls - Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <HiChevronLeft size={24} />
        </button>

        {/* Carousel Controls - Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <HiChevronRight size={24} />
        </button>

        {/* Carousel Dots */}
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
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ABOUT - WHY CHOOSE US */}
      <section id="about" className="py-20 px-4 bg-slate-900 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-white mb-4">
              Why Choose Ayedos
            </h2>
            <p className="text-lg text-slate-300 dark:text-slate-300">
              Join a financial community built on trust, transparency, and shared prosperity.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Financial Growth",
                description: "Your savings work for you through competitive dividends and smart financial solutions designed for long-term stability.",
                icon: "💰"
              },
              {
                title: "Community Trust",
                description: "We prioritize integrity, open communication, and member-first decisions in everything we do.",
                icon: "🤝"
              },
              {
                title: "Flexible Solutions",
                description: "Access affordable and flexible loan options tailored to your needs — when you need them most.",
                icon: "⚡"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group card bg-gradient-to-br from-[#8cc63f]/20 to-[#8cc63f]/10 dark:from-[#8cc63f]/20 dark:to-[#8cc63f]/10 border border-[#8cc63f]/40 dark:border-[#8cc63f]/40 hover:border-[#8cc63f]/80 dark:hover:border-[#8cc63f]/80 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="card-body">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h2 className="card-title text-xl text-white dark:text-white">{item.title}</h2>
                  <p className="text-slate-200 dark:text-slate-300 leading-relaxed">{item.description}</p>
                  <div className="card-actions justify-start mt-4 pt-4 border-t border-[#8cc63f]/20 dark:border-[#8cc63f]/30">
                    <button className="btn btn-sm bg-[#8cc63f] hover:bg-[#9fd858] text-slate-900 border-none shadow-md hover:shadow-lg transition-all">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-24 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#8cc63f] rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-white/80">
              Everything you need to run a SACCO efficiently, designed with polished precision and care.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Savings", icon: "💰", desc: "Structured savings plans to build discipline and long-term wealth." },
              { title: "Loans & Credit", icon: "📊", desc: "Flexible financing designed for members and their families." },
              { title: "Investments", icon: "📈", desc: "Collective opportunities that grow wealth through smart choices." },
              { title: "Education", icon: "🏦", desc: "Clear guidance so members make confident financial decisions." },
            ].map((service, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-[#8cc63f]/60 hover:bg-white/10 hover:-translate-y-2"
              >
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-[#8cc63f]/30 to-blue-500/30 group-hover:from-[#8cc63f]/50 group-hover:to-blue-500/50 transition-all duration-300 flex items-center justify-center">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* MEMBER BENEFITS */}
      <section className="py-24 px-4 bg-slate-900 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border border-[#8cc63f]/40 dark:border-[#8cc63f]/40 bg-gradient-to-br from-[#8cc63f]/20 to-[#8cc63f]/10 dark:from-[#8cc63f]/20 dark:to-[#8cc63f]/10 p-10 md:p-16 shadow-xl backdrop-blur-sm">
            <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <p className="text-sm uppercase tracking-widest font-semibold text-[#8cc63f] mb-4">
                    ✨ Your Financial Growth Starts Here
                  </p>
                  <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-white leading-tight">
                    Take Control of Your Money
                  </h2>
                </div>
                <p className="text-lg text-slate-200 dark:text-slate-300 leading-relaxed max-w-2xl">
                  Better savings, affordable loans, and real returns await. Becoming a member is your first step toward financial freedom and prosperity.
                </p>
                <button
                  className="btn btn-lg bg-[#8cc63f] hover:bg-[#9fd858] text-slate-900 border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  onClick={() => navigate('register')}
                >
                  Become a Member Today
                </button>
              </div>

              {/* Right Grid */}
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  { title: '💾 Savings', text: 'Secure your future with consistent, disciplined savings.' },
                  { title: '💳 Affordable Loans', text: 'Access smart credit with friendly repayment terms.' },
                  { title: '📊 Real Returns', text: 'Grow wealth through cooperative dividends.' },
                  { title: '👥 Member Power', text: 'Benefit from shared trust and financial control.' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group rounded-2xl bg-slate-800 dark:bg-slate-800 p-6 border border-[#8cc63f]/40 dark:border-[#8cc63f]/30 hover:border-[#8cc63f]/60 dark:hover:border-[#8cc63f]/60 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <h3 className="font-semibold text-lg text-white dark:text-white mb-2">{item.title}</h3>
                    <p className="text-slate-300 dark:text-slate-400 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN SNAPSHOT */}
      <section className="py-24 px-4 bg-slate-900 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-white mb-4">
              Product Design Snapshot
            </h2>
            <p className="text-lg text-slate-300 dark:text-slate-300 max-w-2xl mx-auto">
              A polished visual preview of the user experience that Ayedos provides to its members.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {[
              { 
                title: "Member Portal", 
                desc: "Clean, intuitive dashboard for managing contributions, loans, and staying updated.",
                features: ["Easy Navigation", "Real-time Updates", "Secure Access"]
              },
              { 
                title: "Reporting Hub", 
                desc: "Insightful summaries, official notices, and comprehensive financial overviews.",
                features: ["Detailed Reports", "Financial Insights", "Compliance Tools"]
              },
              { 
                title: "Support Center", 
                desc: "Fast access to help, FAQs, and member service tools when you need assistance.",
                features: ["24/7 Assistance", "Knowledge Base", "Live Support"]
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className="group overflow-hidden rounded-2xl border border-slate-700 dark:border-slate-700 bg-slate-800 dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Placeholder Gradient */}
                <div className="h-48 bg-gradient-to-br from-[#8cc63f]/30 to-blue-500/30 dark:from-[#8cc63f]/20 dark:to-blue-500/20 group-hover:from-[#8cc63f]/50 group-hover:to-blue-500/50 transition-all duration-300 flex items-center justify-center">
                  <span className="text-4xl">📱</span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3 text-white dark:text-white">{item.title}</h3>
                  <p className="text-slate-300 dark:text-slate-300 mb-5 leading-relaxed">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 bg-[#8cc63f]/10 dark:bg-[#8cc63f]/20 text-[#8cc63f] text-xs font-medium rounded-full">
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