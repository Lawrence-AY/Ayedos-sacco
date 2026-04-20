import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/ui/Footer";
import { useState, useEffect,} from 'react' 
function OurIdeology({ onNavigate }) {
  const navigate = (route) => {
    if (onNavigate) onNavigate(route);
  };
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
  return (
    <>
     <div className={` ${isDark ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar onNavigate={onNavigate} />
      <div  className={`{${isDark ? 'text-gray-400' : 'text-gray-500'}}`}>
        <section className="py-24 px-4 ">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-sm uppercase tracking-[0.3em]   mb-3">
                Our Core Ideology
              </div>
              <div className="text-4xl md:text-5xl font-bold  ">
                About Our Philosophy
              </div>
              <div className="text-lg text-slate-600 mt-4">
                Ayedos SACCO exists to deliver exceptional financial experiences
                for members, communities, and stakeholders through trust,
                innovation, and integrity.
              </div>
            </div>

            <div className="space-y-16">
              <section className={` ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} rounded-3xl shadow-sm p-10`}>
                <div className={`${isDark ? '  text-white' : ' text-gray-900'} text-3xl font-semibold   mb-4`}>
                  Vision
                </div>
                <div className="text-lg text-slate-600 leading-8">
                  To be the leading experience-driven financial services partner
                  in our region, where every member feels valued, empowered, and
                  inspired.
                </div>
                <div className="text-slate-600 leading-8 mt-4">
                  We aim to create "wow" moments for all our stakeholders,
                  fostering loyalty, trust, and a sense of shared achievement.
                </div>
              </section>

             <section className={` ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} rounded-3xl shadow-sm p-10`}>
                <div className="text-3xl font-semibold   mb-4">
                  Mission
                </div>
                <div className="text-lg text-slate-600 leading-8">
                  We deliver innovative financial solutions that support the
                  well-being and prosperity of our members and communities.
                </div>
                <div className="text-slate-600 leading-8 mt-4">
                  Our approach is creative, responsive, and rooted in
                  exceptional service so that every member can thrive with
                  confidence.
                </div>
              </section>

<section className={` ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} rounded-3xl shadow-sm p-10`}>
                  <div className="text-3xl font-semibold   mb-8">
                  Core Values
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <div className="text-xl font-semibold mb-3">Passion</div>
                    <div className="text-slate-600 leading-7">
                      We love what we do and bring enthusiasm to every
                      interaction, committed to delivering excellence.
                    </div>
                  </div>
                  <div>
                    <div className="text-xl font-semibold mb-3">Teamwork</div>
                    <div className="text-slate-600 leading-7">
                      We collaborate closely, valuing every voice and working
                      together to produce exceptional outcomes.
                    </div>
                  </div>
                  <div>
                    <div className="text-xl font-semibold mb-3">Integrity</div>
                    <div className="text-slate-600 leading-7">
                      We honour our commitments and earn trust by always doing
                      the right thing, consistently and transparently.
                    </div>
                  </div>
                  <div>
                    <div className="text-xl font-semibold mb-3">Innovation</div>
                    <div className="text-slate-600 leading-7">
                      We challenge the status quo, embrace new ideas, and shape
                      the future with creative solutions.
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="mt-16 text-center">
              <button
                onClick={() => navigate("register")}
                className="btn bg-[#8cc63f] hover:bg-[#9fd858]   border-none shadow-sm px-8 py-3 rounded-full transition-all duration-300 hover:-translate-y-1"
              >
                Join Our Community
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      </div>
    </>
  );
}

export default OurIdeology;
