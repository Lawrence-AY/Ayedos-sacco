import { useState, useEffect } from 'react'
import { HiEnvelope, HiPhone, HiMapPin, HiClock, HiPaperAirplane } from 'react-icons/hi2'

function Contact({ onNavigate }) {
  const navigate = (route) => {
    window.location.href = route ? `/${route}` : "/";
  }

  const [theme, setTheme] = useState(() => {
    return document.documentElement.getAttribute('data-theme') || 'light'
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState('idle')

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('submitting')
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setFormStatus('success')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    
    setTimeout(() => setFormStatus('idle'), 3000)
  }

  const contactInfo = [
    {
      icon: HiMapPin,
      title: 'Office Address',
      lines: ['Ayedos SACCO Ltd', 'Westlands Business Park', 'Nairobi, Kenya']
    },
    {
      icon: HiPhone,
      title: 'Phone',
      lines: ['+254 700 000 000', '+254 711 111 111']
    },
    {
      icon: HiEnvelope,
      title: 'Email',
      lines: ['info@ayedous.co.ke', 'support@ayedous.co.ke']
    },
    {
      icon: HiClock,
      title: 'Business Hours',
      lines: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Closed']
    }
  ]

  const quickLinks = [
    { label: '24h Response Time', color: 'bg-green-500/20 text-green-400' },
    { label: '24/7 Support', color: 'bg-blue-500/20 text-blue-400' },
    { label: 'Multi-language', color: 'bg-purple-500/20 text-purple-400' }
  ]

  return (
    <div className="info-page-container">
      <div className="info-hero">
        <h1>Contact Us</h1>
        <p>Get in touch with our team</p>
      </div>

      <div className={`flex-1 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              We're Here to Help
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
              Have questions about Ayedos SACCO? Need support with your account? Our team is ready to assist you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className={`rounded-3xl border p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
              isDark 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-slate-200'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8cc63f] ${
                      isDark
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-gray-50 border-gray-200 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8cc63f] ${
                      isDark
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-gray-50 border-gray-200 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8cc63f] ${
                      isDark
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-gray-50 border-gray-200 text-slate-900'
                    }`}
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8cc63f] resize-none ${
                      isDark
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-gray-50 border-gray-200 text-slate-900'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={`w-full font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2 ${
                    formStatus === 'success'
                      ? 'bg-green-500 text-white'
                      : formStatus === 'submitting'
                      ? 'bg-[#8cc63f]/70 text-slate-900 cursor-wait'
                      : 'bg-[#8cc63f] hover:bg-[#9fd858] text-slate-900'
                  }`}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <span className="loading loading-spinner loading-sm"></span>
                      Sending...
                    </>
                  ) : formStatus === 'success' ? (
                    'Message Sent!'
                  ) : (
                    <>
                      <HiPaperAirplane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className={`rounded-3xl border p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                isDark 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-white border-slate-200'
              }`}>
                <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Contact Information
                </h3>
                <div className="space-y-5">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className="flex items-start gap-4 group">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 ${
                          isDark 
                            ? 'bg-[#8cc63f]/20' 
                            : 'bg-[#8cc63f]/10'
                        }`}>
                          <Icon className="w-6 h-6" style={{ color: '#8cc63f' }} />
                        </div>
                        <div>
                          <h4 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {item.title}
                          </h4>
                          <p className={isDark ? 'text-gray-400' : 'text-slate-600'}>
                            {item.lines.map((line, i) => (
                              <span key={i}>
                                {line}
                                {i < item.lines.length - 1 && <br />}
                              </span>
                            ))}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className={`rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                isDark 
                  ? 'bg-[#8cc63f]/10 border border-[#8cc63f]/30' 
                  : 'bg-[#8cc63f]/5 border border-[#8cc63f]/20'
              }`}>
                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Quick Response Guarantee
                </h3>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                  We respond to all inquiries within 24 hours during business days. For urgent technical issues, our support team is available 24/7.
                </p>
                <div className="flex flex-wrap gap-2">
                  {quickLinks.map((link, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${link.color}`}
                    >
                      {link.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`rounded-3xl p-10 text-center transition-all duration-300 ${
            isDark 
              ? 'bg-gradient-to-r from-[#8cc63f]/20 to-transparent border border-[#8cc63f]/30' 
              : 'bg-gradient-to-r from-[#8cc63f]/10 to-transparent border border-[#8cc63f]/20'
          }`}>
            <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Need Immediate Assistance?
            </h2>
            <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
              Check out our comprehensive FAQ section or browse our guides for quick answers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('faq')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? 'border-2 border-[#8cc63f] text-[#8cc63f] hover:bg-[#8cc63f] hover:text-slate-900'
                    : 'border-2 border-[#8cc63f] text-[#8cc63f] hover:bg-[#8cc63f] hover:text-white'
                }`}
              >
                View FAQ
              </button>
              <button
                onClick={() => navigate('guides')}
                className="px-6 py-3 rounded-xl font-semibold bg-[#8cc63f] hover:bg-[#9fd858] text-slate-900 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                Browse Guides
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
