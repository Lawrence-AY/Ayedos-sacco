import { HiArrowRight } from 'react-icons/hi2'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/ui/Footer'

function LandingPage({ onNavigate }) {

  const navigate = (route) => {
    if (onNavigate) onNavigate(route)
  }

  return (
    <div className="min-h-screen flex flex-col">

      <Navbar onNavigate={onNavigate} />

      {/* HERO */}
      <section className="hero min-h-screen  px-4  "
      style={{backgroundImage:"url(/hero-aye.png)",
        backgroundSize: "cover",
    backgroundPosition: "center",
    
      }}>
       <div className="absolute inset-0 bg-black/35 h-screen"></div>

           
        <div className=" text-center text-white   hero-content ">
          <div>
       
            <div className="text-4xl md:text-5xl font-bold text-white">
              AYEDOS SACCO
            </div>

            <p className="py-6  text-white">
              Ayedous SACCO is designed as a modern office-based
               financial system for savings, shares, dividends, 
               and member administration with a clean banking-grade experience.
            </p>

            <div className="flex flex-col md:flex-row gap-3 justify-center">
              <button
                className="btn bg-[#8cc63f]"
                onClick={() => navigate('login')}
                >
                Get Started <HiArrowRight className="ml-1" />
                
              </button>
               
            </div>
          </div>
       
        
        </div>
       

      </section>

      {/* ABOUT */}
      <section id="about" className="h-screen py-16 px-4 bg-base-100 flex flex-col">
        
        {/* WHY CHOOSE US */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          <h2 className="text-3xl font-bold">Why Choose Us</h2>
            <p className="text-base-content/70">
            Join a financial community built on trust, transparency, and shared prosperity.
          </p>
        
         
         {/* CARDS */}
          <div className="card bg-base-200 shadow">
            <div className="card-body">
              <h3 className="font-semibold">Head Office</h3>
              <p>Nairobi Financial Centre</p>
            </div>
          </div>

          <div className="card bg-base-200 shadow">
            <div className="card-body">
              <h3 className="font-semibold">Membership</h3>
              <p>Employees & Non-Employees</p>
            </div>
          </div>

          <div className="card bg-base-200 shadow">
            <div className="card-body">
              <h3 className="font-semibold">Core Services</h3>
              <p>Savings, Shares, Loans, Dividends</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="h-screen py-16 px-4 bg-base-100 flex flex-col">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="text-base-content/70">
            Everything you need to run a SACCO efficiently
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Savings", icon: "💰", desc: "Start building discipline and wealth through structured savings plans." },
            { title: "Loans & Credit Facilities", icon: "📊", desc: "Access personal, emergency, development, and business loans with friendly repayment terms" },
            { title: "Investment Opportunities", icon: "📈", desc: "Grow your income through collective investments and long-term wealth creation." },
            { title: "Financial Education", icon: "🏦", desc: "We equip members with knowledge to make smarter financial decisions." },
          ].map((service, i) => (
            <div key={i} className="card bg-base-100 shadow hover:shadow-lg transition">
              <div className="card-body text-center">
                <div className="text-3xl">{service.icon}</div>
                <h3 className="font-semibold">{service.title}</h3>
                <p className="text-sm text-base-content/70">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-16 px-4 bg-primary text-primary-content text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold">Ready to get started?</h2>
          <p className="py-4">
            Join Ayedos SACCO and experience modern cooperative management
          </p>

          <button
            className="btn btn-secondary"
            onClick={() => navigate('register')}
          >
            Create Account
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default LandingPage