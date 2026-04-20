import {
  HiCalendar,
  HiUserGroup,
  HiShieldCheck,
  HiChartBar,
} from "react-icons/hi2";
import { useState, useEffect, useRef } from "react";
function OurStory({ onNavigate }) {
  const navigate = (route) => {
    window.location.href = route ? `/${route}` : "/";
  };

  const [theme, setTheme] = useState(() => {
    return document.documentElement.getAttribute('data-theme') || 'light'
  })

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
    <div className={isDark ? "text-white" : "text-slate-900"}>
        {/* Who We Are */}
        <section className={`h-screen pt-24 pb-20 px-4 ${isDark ? 'bg-black' : 'bg-white'}`}>
          <div className="max-w-6xl mx-auto">
            <div className={`flex flex-col items-center ${isDark ? 'bg-black' : 'bg-white'}`}>
              <div>
                <h1 className={`text-4xl md:text-5xl font-bold mb-6 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  What makes us different
                </h1>
                <p className={`text-xl leading-[2.5] max-w-4xl mx-auto ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                  Ayedos SACCO is a leading provider of comprehensive financial
                  management solutions for Savings and Credit Cooperatives
                  across East Africa. We combine deep industry expertise with
                  cutting-edge technology to empower SACCOs to operate more
                  efficiently, transparently, and profitably.
                </p>
              </div>
              <div className={`h-80 w-full gap-2.5 rounded-3xl border p-1 shadow-xl overflow-hidden flex ${isDark ? 'border-gray-700 bg-gray-900' : 'border-slate-200 bg-white'}`}>
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
        <section className={`py-20 px-4 ${isDark ? 'bg-black' : 'bg-slate-50'}`}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Our Journey
              </h2>
              <p className={`mt-4 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                A timeline of growth and innovation
              </p>
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
                        <div className={`bg-white p-6 rounded-3xl border shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                          isDark 
                            ? 'border-gray-700 bg-gray-800' 
                            : 'border-slate-200'
                        }`}>
                          <div
                            className="font-bold text-lg mb-3"
                            style={{ color: "#8cc63f" }}
                          >
                            {item.year}
                          </div>
                          <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {item.title}
                          </h3>
                          <p className={isDark ? 'text-gray-300' : 'text-slate-600'}>{item.description}</p>
                        </div>
                      </div>
                      <div
                        className="w-4 h-4 rounded-full z-10 border-2 border-white flex-shrink-0 timeline-dot"
                        style={{ backgroundColor: "#8cc63f" }}
                      ></div>
                      <div className="w-1/2"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2"></div>
                      <div
                        className="w-4 h-4 rounded-full z-10 border-2 border-white flex-shrink-0 timeline-dot"
                        style={{ backgroundColor: "#8cc63f" }}
                      ></div>
                      <div className="w-1/2 text-left pl-8">
                        <div className={`bg-white p-6 rounded-3xl border shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                          isDark 
                            ? 'border-gray-700 bg-gray-800' 
                            : 'border-slate-200'
                        }`}>
                          <div
                            className="font-bold text-lg mb-3"
                            style={{ color: "#8cc63f" }}
                          >
                            {item.year}
                          </div>
                          <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {item.title}
                          </h3>
                          <p className={isDark ? 'text-gray-300' : 'text-slate-600'}>{item.description}</p>
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
          className={`py-20 px-4 transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-slate-50'}`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Our Values
              </h2>
              <p className={isDark ? 'text-gray-300 mt-4' : 'text-slate-600 mt-4'}>
                The principles that guide everything we do
              </p>
            </div>

            <div className="flex flex-col items-center gap-8">
              <div className="flex gap-8 flex-wrap justify-center">
                {values.slice(0, 2).map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={index}
                      className={`rounded-3xl border p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl text-center flex-1 max-w-sm ${
                        isDark 
                          ? 'border-gray-700 bg-gray-800' 
                          : 'border-slate-200 bg-white'
                      }`}
                    >
                      <div
                        className="mb-6 transition-transform duration-300 hover:scale-110"
                        style={{ color: "#8cc63f" }}
                      >
                        <Icon className="w-12 h-12 mx-auto" />
                      </div>
                      <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {value.title}
                      </h3>
                      <p className={isDark ? 'text-gray-300' : 'text-slate-600'}>{value.description}</p>
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
                      className={`rounded-3xl border p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl text-center max-w-sm ${
                        isDark 
                          ? 'border-gray-700 bg-gray-800' 
                          : 'border-slate-200 bg-white'
                      }`}
                    >
                      <div
                        className="mb-6 transition-transform duration-300 hover:scale-110"
                        style={{ color: "#8cc63f" }}
                      >
                        <Icon className="w-12 h-12 mx-auto" />
                      </div>
                      <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {value.title}
                      </h3>
                      <p className={isDark ? 'text-gray-300' : 'text-slate-600'}>{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={`py-20 px-4 transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-white'}`}>
          <div className="max-w-4xl mx-auto text-center rounded-[2rem] border p-10 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{
              backgroundColor: isDark ? '#1a1a1a' : 'white',
              borderColor: isDark ? '#8cc63f/30' : '#e2e8f0'
            }}
          >
            <div className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Join Our Growing Community
            </div>
            <div className={`text-xl mb-7 ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
              Become part of a network of forward-thinking SACCOs
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("register")}
                className="px-8 py-3 rounded-full font-semibold bg-[#8cc63f] hover:bg-[#9fd858] text-slate-900 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                Get Started
              </button>
              <button
                onClick={() => navigate("contact")}
                className="px-8 py-3 rounded-full font-semibold border-2 transition-all duration-300 hover:-translate-y-1"
                style={{
                  borderColor: "#8cc63f",
                  color: isDark ? "#ffffff" : "#8cc63f",
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>
    </div>
  );
}

export default OurStory;
