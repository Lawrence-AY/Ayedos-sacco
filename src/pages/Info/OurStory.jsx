import {
  HiArrowLeft,
  HiCalendar,
  HiUserGroup,
  HiShieldCheck,
  HiChartBar,
} from "react-icons/hi2";
import { useEffect, useRef } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/ui/Footer";
import { useState} from 'react' 

function OurStory({ onNavigate }) {
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

  const containerRef = useRef();

  useEffect(() => {
    // Add animation styles
    if (!document.getElementById("timeline-styles")) {
      const style = document.createElement("style");
      style.id = "timeline-styles";
      style.textContent = `
        @keyframes fillDot {
          0% {
            box-shadow: inset 0 0 0 8px var(--color-accent), 0 0 0 2px white;
          }
          100% {
            box-shadow: inset 0 0 0 0px var(--color-accent), 0 0 0 2px white;
          }
        }
      `;
      document.head.appendChild(style);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";

              // Animate the dot
              const dot = entry.target.querySelector(".timeline-dot");
              if (dot) {
                dot.style.animation = "fillDot 0.8s ease-out forwards";
              }
            }, entry.target.dataset.delay);
          }
        });
      },
      { threshold: 0.1 },
    );

    const items = containerRef.current?.querySelectorAll(".timeline-item");
    if (items) {
      items.forEach((item) => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);

  const timeline = [
    {
      year: "2018",
      title: "Foundation",
      description:
        "Ayedos SACCO was established with a vision to revolutionize cooperative financial management in Kenya.",
    },
    {
      year: "2019",
      title: "First Members",
      description:
        "Onboarded our first 50 member organizations across Nairobi and surrounding counties.",
    },
    {
      year: "2020",
      title: "Digital Platform Launch",
      description:
        "Launched our comprehensive digital platform enabling online member management and real-time transactions.",
    },
    {
      year: "2022",
      title: "Expansion",
      description:
        "Expanded services to include loan management, dividend distribution, and regulatory compliance tools.",
    },
    {
      year: "2024",
      title: "Market Leader",
      description:
        "Became the preferred SACCO management solution for over 200 organizations with 50,000+ active members.",
    },
    {
      year: "2025",
      title: "Innovation",
      description:
        "Introduced AI-powered analytics and automated compliance reporting features.",
    },
  ];

  const values = [
    {
      icon: HiShieldCheck,
      title: "Trust & Security",
      description:
        "We prioritize the security of member data and transactions above all else.",
    },
    {
      icon: HiUserGroup,
      title: "Community Focus",
      description:
        "Our success is measured by the success of our member organizations.",
    },
    {
      icon: HiChartBar,
      title: "Transparency",
      description:
        "Clear, auditable processes ensure complete visibility into all operations.",
    },
  ];

  return (
    <>
    
     
          <div className={` ${isDark ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>

      <Navbar onNavigate={onNavigate} />
      <div className="  text-slate-900">
        {/* Who We Are */}
        <section className="h-screen pt-24 pb-20 px-4  ">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col  items-center">
              <div>
                <div className={`text-4xl md:text-5xl font-bold mb-6  text-center ${isDark ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>
                  What makes us different
                </div>
                <div className={`text-xl  ${isDark ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'} 
                leading-[2.5] max-w-4xl mx-auto`}>
                  Ayedos SACCO is a leading provider of comprehensive financial
                  management solutions for Savings and Credit Cooperatives
                  across East Africa. We combine deep industry expertise with
                  cutting-edge technology to empower SACCOs to operate more
                  efficiently, transparently, and profitably.
                </div>
              </div>
              <div className="h-80 w-full gap-2.5 rounded-3xl border border-slate-200  p-1 shadow-xl overflow-hidden flex">
                <img
                  src="/about-us.jpg"
                  alt="Ayedos SACCO Story"
                  className="w-1/2 h-full object-cover rounded-2xl"
                />
                <img
                  src="/about-three.jpg"
                  alt="Ayedos SACCO Story"
                  className="w-1/2 h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="py-20 px-4  ">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className={`text-3xl md:text-4xl ${isDark ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}
                font-bold `}>
                Our Journey
              </div>
              <div className="text-slate-600 mt-4">
                A timeline of growth and innovation
              </div>
            </div>

            <div className="relative" ref={containerRef}>
              <div
                className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full"
                style={{ backgroundColor: "var(--color-accent)" }}
              ></div>
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="timeline-item flex items-center mb-12 opacity-0 translate-y-4 transition-all duration-700 ease-out"
                  data-delay={index * 200}
                >
                  {index % 2 === 0 ? (
                    <>
                      <div className="w-1/2 text-right pr-8">
                        <div className={`  p-6 rounded-3xl border
                         border-slate-200 shadow-sm hover:-translate-y-1 transition-transform
                         ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}
                         `}>
                          <div
                            className={`font-bold text-lg mb-2
                              ${isDark ? 'bg-gray-900 text-[#8cc63f]' : 'bg-gray-50 text-[#8cc63f]'}
                              `}
                            
                          >
                            {item.year}
                          </div>
                          <div className={`text-xl font-semibold mb-2 
                          ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}
                          >
                            {item.title}
                          </div>
                          <div className={`text-sm 
                          ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}
                          >{item.description}</div>
                        </div>
                      </div>
                      <div
                        className="w-4 h-4 rounded-full z-10 border-2 border-white flex-shrink-0 timeline-dot"
                        style={{ backgroundColor: "var(--color-accent)" }}
                      ></div>
                      <div className="w-1/2"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2"></div>
                      <div
                        className="w-4 h-4 rounded-full z-10 border-2 border-white flex-shrink-0 timeline-dot"
                        style={{ backgroundColor: "var(--color-accent)" }}
                      ></div>
                      <div className="w-1/2 text-left pl-8">
<div className={`  p-6 rounded-3xl border
                         border-slate-200 shadow-sm hover:-translate-y-1 transition-transform
                         ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}
                         `}>                          <div
                           className={`font-bold text-lg mb-2
                              ${isDark ? 'bg-gray-900 text-[#8cc63f]' : 'bg-gray-50 text-[#8cc63f]'}
                              `}
                          >
                            {item.year}
                          </div>
                          <div className={`text-xl font-semibold mb-2 
                          ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}
                          >
                            {item.title}
                          </div>
                        <div className={`text-sm 
                          ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}
                          >{item.description}</div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section
          className="h-screen py-0 px-0"
           
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-5">
              <div className={`text-3xl md:text-4xl font-bold text-slate-900"
                  ${isDark ? '  text-white' : '  text-gray-900'}`}>
                Our Values
              </div>
              <div className={`${isDark ? '  text-white' : '  text-gray-900'} mt-8"`}>
                The principles that guide everything we do
              </div>
            </div>

            <div className="flex flex-col items-center gap-8">
              <div className="flex gap-8">
                {values.slice(0, 2).map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={index}
                      className={`rounded-3xl border border-slate-200 
                         ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}
                         p-8 shadow-sm transition hover:-translate-y-1 text-center flex-1 max-w-sm`}
                    >
                      <div
                        className="mb-6"
                        style={{ color: "var(--color-accent)" }}
                      >
                        <Icon className="w-12 h-12 mx-auto" />
                      </div>
                      <div className="text-xl font-semibold mb-4 text-slate-900">
                        {value.title}
                      </div>
                      <div className="text-slate-600">{value.description}</div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center">
                {values.slice(2, 3).map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={index + 2}
                      className={`rounded-3xl border border-slate-200
                           ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} 
                      p-8 shadow-xl transition hover:-translate-y-1 text-center max-w-sm`}
                    >
                      <div
                        className="mb-6"
                      
                      >
                        <Icon className="w-12 h-12 mx-auto" />
                      </div>
                      <div className="text-xl font-semibold mb-4  ">
                        {value.title}
                      </div>
                      <div className="text-slate-600">{value.description}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={`h-[40vh] py-1 px-4   
           ${isDark ? ' text-white' : ' text-gray-900'}`}>
          <div className={`${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} 
          max-w-4xl mx-auto text-center rounded-[2rem] border border-slate-300  p-10 shadow-lg`}>
            <div className={`text-3xl md:text-4xl font-bold mb-4 text-black
               ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} `}>
              Join Our Growing Community
            </div>
            <div className="text-xl text-slate-600 mb-7">
              Become part of a network of forward-thinking SACCOs
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("register")}
                className="btn text-white transition-transform duration-300 hover:-translate-y-1 shadow-lg px-8 py-3 rounded-full"
                style={{
                  backgroundColor: "var(--color-accent)",
                  boxShadow: "var(--shadow-soft)",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
              >
                Get Started
              </button>
              <button
                onClick={() => navigate("contact")}
                className="btn transition-transform duration-300 hover:-translate-y-1 px-8 py-3 rounded-full"
                style={{
                  borderColor: "var(--color-accent)",
                  
                  borderWidth: "2px",
                }}
              >
                Contact Us
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

export default OurStory;
