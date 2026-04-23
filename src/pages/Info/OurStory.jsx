import {
  HiCalendar,
  HiUserGroup,
  HiShieldCheck,
  HiChartBar,
} from "react-icons/hi2";
import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/layout/Navbar";

function OurStory({ onNavigate }) {
  const navigate = (route) => {
    if (onNavigate) onNavigate(route);
  };

  const [theme, setTheme] = useState(() => {
    return document.documentElement.getAttribute("data-theme") || "light";
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const newTheme =
        document.documentElement.getAttribute("data-theme") || "light";
      setTheme(newTheme);
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const isDark = theme === "dark";

  const containerRef = useRef();
  const mobileTimelineRef = useRef();

  useEffect(() => {
    // Add animation styles if not present
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

    // Observe both desktop and mobile timeline items
    const items = document.querySelectorAll(".timeline-item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const timeline = [
    {
      year: "2018",
      title: "Foundation",
      description:
        "AYEDOS SACCO was established with a vision to revolutionize cooperative financial management in Kenya.",
    },
    {
      year: "2019",
      title: "First Members",
      description:
        "Onboarded our employees and educated them on value of saving.",
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
        "Became the preferred SACCO management solution.",
    },
    {
      year: "2026",
      title: "Going Public",
      description:
        "Opening up the SACCO for the public to join.",
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
    <div className="info-page-container">
      <Navbar onNavigate={onNavigate} />

      {/* Who We Are */}
      <section className="min-h-screen pt-24 pb-10 px-4 md:px-6">
        <div className=" mx-auto">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <div
                className={`text-4xl md:text-5xl font-bold mb-3 ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                The AYEDOS SACCO Advantage
              </div>
              <div
                className={`text-base text-justify md:text-lg leading-relaxed md:leading-[2.5] max-w-4xl mx-auto ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                AYEDOS SACCO is a leading provider of comprehensive financial
                management solutions. We combine deep industry expertise with
                cutting-edge technology to empower our members to operate more
                efficiently, transparently, and profitably.
              </div>
            </div>
            <div
              className="mt-8 w-full flex flex-col md:flex-row gap-4 rounded-3xl border
             border-slate-200 p-1 shadow-sm overflow-hidden"
            >
              <img
                src="/about-us.jpg"
                alt="Ayedos SACCO Story"
                className="w-full md:w-1/2 h-64 md:h-80 object-cover rounded-2xl"
              />
              <img
                src="/story-one.jpg"
                alt="Ayedos SACCO Story"
                className="w-full md:w-1/2 h-64 md:h-80 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey - Desktop Timeline (hidden on mobile) */}
      <section className="hidden md:block py-1 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-1">
            <div
              className={`text-3xl md:text-4xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Our Journey
            </div>
            <div
              className={`mt-4 ${isDark ? "text-gray-400" : "text-slate-600"}`}
            >
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
                      <div
                        className={`p-6 rounded-3xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform ${
                          isDark
                            ? "bg-gray-900 text-white"
                            : "bg-gray-50 text-gray-900"
                        }`}
                      >
                        <div
                          className={`font-bold text-lg mb-2 ${
                            isDark ? "text-[#8cc63f]" : "text-[#8cc63f]"
                          }`}
                        >
                          {item.year}
                        </div>
                        <div
                          className={`text-xl font-semibold mb-2 ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {item.title}
                        </div>
                        <div
                          className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}
                        >
                          {item.description}
                        </div>
                      </div>
                    </div>
                    <div
                      className="w-4 h-4 rounded-full z-10 border-2 border-white shrink-0 timeline-dot"
                      style={{ backgroundColor: "#8cc63f" }}
                    ></div>
                    <div className="w-1/2"></div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2"></div>
                    <div
                      className="w-4 h-4 rounded-full z-10 border-2 border-white shrink-0 timeline-dot"
                      style={{ backgroundColor: "#8cc63f" }}
                    ></div>
                    <div className="w-1/2 text-left pl-8">
                      <div
                        className={`p-6 rounded-3xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform ${
                          isDark
                            ? "bg-gray-900 text-white"
                            : "bg-gray-50 text-gray-900"
                        }`}
                      >
                        <div
                          className={`font-bold text-lg mb-2 ${
                            isDark ? "text-[#8cc63f]" : "text-[#8cc63f]"
                          }`}
                        >
                          {item.year}
                        </div>
                        <div
                          className={`text-xl font-semibold mb-2 ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {item.title}
                        </div>
                        <div
                          className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}
                        >
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey - Mobile Timeline (visible only on mobile) */}
      <section className="md:hidden py-1 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-5">
            <div
              className={`text-3xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Our Journey
            </div>
            <div
              className={`mt-2 ${isDark ? "text-gray-400" : "text-slate-600"}`}
            >
              A timeline of growth and innovation
            </div>
          </div>

          <div className="relative pl-6" ref={mobileTimelineRef}>
            {/* Left vertical line */}
            <div
              className="absolute left-2 top-0 w-0.5 h-full"
              style={{ backgroundColor: "#8cc63f" }}
            ></div>

            {timeline.map((item, index) => (
              <div
                key={index}
                className="timeline-item flex items-start mb-8 opacity-0 translate-y-4 transition-all duration-700 ease-out"
                data-delay={index * 150}
              >
                <div
                  className="w-4 h-4 rounded-full border-2 border-white shrink-0 mt-1 timeline-dot"
                  style={{ backgroundColor: "#8cc63f" }}
                ></div>
                <div className="ml-4 flex-1">
                  <div
                    className={`p-4 rounded-2xl border border-slate-200 shadow-sm ${
                      isDark
                        ? "bg-gray-900 text-white"
                        : "bg-gray-50 text-gray-900"
                    }`}
                  >
                    <div
                      className={`font-bold text-base mb-1 ${
                        isDark ? "text-[#8cc63f]" : "text-[#8cc63f]"
                      }`}
                    >
                      {item.year}
                    </div>
                    <div
                      className={`text-lg font-semibold mb-1 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {item.title}
                    </div>
                    <div
                      className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}
                    >
                      {item.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div
              className={`text-3xl md:text-4xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Our Values
            </div>
            <div
              className={`mt-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              The principles that guide everything we do
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`rounded-3xl border border-slate-200 p-6 shadow-sm transition hover:-translate-y-1 text-center flex-1 ${
                    isDark
                      ? "bg-gray-900 text-white"
                      : "bg-gray-50 text-gray-900"
                  }`}
                >
                  <div className="mb-4 transition-transform duration-300 hover:scale-110 inline-block">
                    <Icon
                      className="w-12 h-12 mx-auto"
                      style={{ color: "#8cc63f" }}
                    />
                  </div>
                  <div className="text-xl font-semibold mb-3">
                    {value.title}
                  </div>
                  <div className={isDark ? "text-gray-300" : "text-gray-600"}>
                    {value.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-0 px-4">
        <div
          className={`max-w-4xl mx-auto text-center rounded-4xl border border-slate-300 p-6 md:p-10 shadow-sm ${
            isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
          }`}
        >
          <div
            className={`text-2xl md:text-4xl font-bold mb-4 ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Join Our Growing Community
          </div>
          <div
            className={`text-base md:text-xl mb-6 ${isDark ? "text-gray-300" : "text-slate-600"}`}
          >
            Become part of a network of forward-thinking SACCOs
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="">

            <button
              onClick={() => navigate("register")}
              className="px-8 py-3 rounded-full font-semibold bg-[#8cc63f] hover:bg-[#9fd858] text-slate-900 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
              Get Started
            </button>
              </a>
            <a href="/contact">

            <button
              onClick={() => navigate("contact")}
              className="px-8 py-3 rounded-full font-semibold border-2 transition-all duration-300 hover:-translate-y-1"
              style={{
                borderColor: "var(--color-accent, #8cc63f)",
                borderWidth: "2px",
              }}
              >
              Contact Us
            </button>
              </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurStory;
