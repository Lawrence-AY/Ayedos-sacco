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

            <p className="py-6 text-base-content/70">
              Ayedos SACCO is designed as a modern office-based
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
      <section id="about" className="h-screen py-16 px-4 bg-base-100">
        
        {/* WHY CHOOSE US */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-bold">Why Choose Us</h2>
            <p className="text-base-content/70 mt-6">
            Join a financial community built on trust, transparency, and shared prosperity.
          </p>
         </div>
         
         {/* CARDS */}
         <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 ">
         <div className="card bg-[#8cc63f] text-white w-70">
               <div className="card-body">
                <h2 className="card-title">Financial Growth</h2>
                <p>Your savings work for you through competitive dividends and smart financial solutions designed for long-term stability.</p>
                 <div className="card-actions justify-end">
                   <button className="btn">Learn more</button>
                </div>
               </div>
          </div>

                  <div className="card bg-[#8cc63f] text-white w-70">
                    <div className="card-body">
                      <h2 className="card-title">Community Trust</h2>
                      <p>We prioritize integrity, open communication, and member-first decisions in everything we do.</p>
                      <div className="card-actions justify-end">
                        <button className="btn">Learn more</button>
                      </div>
                    </div>
                  </div>
                              <div className="card bg-[#8cc63f] text-white w-70">
                      <div className="card-body">
                        <h2 className="card-title">Flexible Solutions</h2>
                        <p>Access affordable and flexible loan options tailored to your needs — when you need them most.</p>
                        <div className="card-actions justify-end">
                          <button className="btn">Learn more</button>
                        </div>
                      </div>
                    </div>
                    </div>
       
</section>

      {/* SERVICES */}
      <section id="services" className="relative py-20 px-4 bg-slate-950 text-white overflow-hidden" style={{
        backgroundImage: "url(/hero-aye.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="absolute inset-0 bg-slate-950/85"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
            <p className="mt-4 text-white">
              Everything you need to run a SACCO efficiently, displayed with a polished visual frame.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Savings", icon: "💰", desc: "Structured savings plans to build discipline and long-term wealth." },
              { title: "Loans & Credit", icon: "📊", desc: "Flexible financing designed for members and their families." },
              { title: "Investments", icon: "📈", desc: "Collective opportunities that grow wealth through smart choices." },
              { title: "Education", icon: "🏦", desc: "Clear guidance so members make confident financial decisions." },
            ].map((service, i) => (
              <div key={i} className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/90 shadow-xl backdrop-blur transition hover:-translate-y-1">
                <img
                  src={`https://via.placeholder.com/400x240?text=${encodeURIComponent(service.title)}`}
                  alt={service.title}
                  className="h-44 w-full object-cover"
                />
                <div className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-sm text-slate-300">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*MEMBER BENEFITS */}
      <section className="py-16 px-4 bg-white text-black">
        <div className="max-w-6xl mx-auto rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-slate-950/20 backdrop-blur-lg">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr] items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[#8cc63f] animate-pulse">
                Your Financial Growth Starts Here
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Take control of your money with better savings, affordable loans, and real returns.
              </h2>
              <p className="max-w-2xl text-slate-300">
                Becoming a member is your first step toward financial freedom.
              </p>
              <button
                className="btn bg-[#8cc63f] text-slate-950 hover:bg-[#9fd858] transition-transform duration-300 hover:-translate-y-1 shadow-lg shadow-[#8cc63f]/30"
                onClick={() => navigate('register')}
              >
                Become a Member
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: 'Savings', text: 'Secure your future with consistent savings.' },
                { title: 'Affordable Loans', text: 'Access smart credit with friendly repayment.' },
                { title: 'Real Returns', text: 'Grow wealth through cooperative dividends.' },
                { title: 'Member Power', text: 'Benefit from shared trust and financial control.' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl bg-slate-900/90 p-6 border border-white/10 shadow-xl transition-transform duration-300 hover:-translate-y-1"
                >
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-base-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Design Snapshot</h2>
            <p className="mt-4 text-base-content/70">
              A quick visual preview of the kind of polished service experience Ayedos offers.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { title: "Member Portal", desc: "Clean dashboard for contributions, loans, and updates.", image: "https://via.placeholder.com/640x480?text=Member+Portal" },
              { title: "Reporting Hub", desc: "Insightful summaries, notices, and financial overviews.", image: "https://via.placeholder.com/640x480?text=Reporting+Hub" },
              { title: "Support Center", desc: "Fast access to help, FAQs, and member service tools.", image: "https://via.placeholder.com/640x480?text=Support+Center" },
            ].map((item, index) => (
              <div key={index} className="overflow-hidden rounded-3xl border border-slate-200/10 bg-white shadow-lg">
                <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
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