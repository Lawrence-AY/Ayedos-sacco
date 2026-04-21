import Navbar from "../../components/layout/Navbar";

import { useState, useEffect } from "react";
function OurIdeology({ onNavigate }) {
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
  return (
    <>
      <div className="info-page-container">
        <Navbar onNavigate={onNavigate} />
        <div className={`{${isDark ? "text-gray-400" : "text-gray-500"}}`}>
          <section className="py-24 px-4 ">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="text-4xl md:text-5xl font-bold  ">
                  Our Philosophy
                </div>
                <div className="text-lg text-slate-600 mt-4">
                  Ayedos SACCO exists to deliver exceptional financial
                  experiences for members, communities, and stakeholders through
                  trust, innovation, and integrity.
                </div>
              </div>

              <div className="space-y-16">
                <section
                  className={` ${isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"} rounded-3xl shadow-sm p-10`}
                >
                  <div
                    className={`${isDark ? "  text-white" : " text-gray-900"} text-3xl font-semibold   mb-4`}
                  >
                    Vision
                  </div>
                  <div className="text-lg text-slate-600 leading-8">
                    To become a leading digital financial infrastructure
                    provider in Africa, through secure, innovative, and
                    compliant technology.
                  </div>
                </section>

                <section
                  className={` ${isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"} rounded-3xl shadow-sm p-10`}
                >
                  <div className="grid gap-10 lg:grid-cols-2 items-center">
                    <div>
                      <div className="text-3xl font-semibold   mb-4">
                        Mission
                      </div>
                      <div className="text-lg text-slate-600 leading-8">
                        To design and operate trusted financial platforms that:
                        <ul className="mt-4 space-y-2">
                          <li>
                            • Enable seamless access to investment and credit
                            opportunities
                          </li>
                          <li>
                            • Digitize and tokenize real-world assets, starting
                            with mortgages and fixed income instruments
                          </li>
                          <li>
                            • Deliver secure, compliant, and user-friendly
                            financial solutions
                          </li>
                          <li>
                            • Provide financial inclusion by lowering barriers
                            to entry for individuals and institutions
                          </li>
                          <li>
                            • Partner with regulators, financial institutions,
                            and technology providers to build a resilient
                            financial ecosystem
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="hidden lg:block">
                      <img
                        src="/ideology.jpg"
                        alt="Our Mission"
                        className="w-full h-auto rounded-2xl shadow-lg object-cover"
                      />
                    </div>
                  </div>
                </section>

                <section
                  className={` ${isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"} rounded-3xl shadow-sm p-10`}
                >
                  <div className="text-3xl font-semibold   mb-8">
                    Our Principles
                  </div>
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div
                      className={`p-6 rounded-lg transition-all duration-300 hover:shadow-lg ${isDark ? "bg-gray-800" : "bg-white"}`}
                    >
                      <div className="text-xl font-semibold mb-3 text-[#8cc63f]">
                        Integrity
                      </div>
                      <div
                        className={isDark ? "text-gray-400" : "text-slate-600"}
                      >
                        We act honestly and ethically in all our dealings.
                      </div>
                    </div>
                    <div
                      className={`p-6 rounded-lg transition-all duration-300 hover:shadow-lg ${isDark ? "bg-gray-800" : "bg-white"}`}
                    >
                      <div className="text-xl font-semibold mb-3 text-[#8cc63f]">
                        Accountability
                      </div>
                      <div
                        className={isDark ? "text-gray-400" : "text-slate-600"}
                      >
                        We take responsibility for our actions and their
                        outcomes.
                      </div>
                    </div>
                    <div
                      className={`p-6 rounded-lg transition-all duration-300 hover:shadow-lg ${isDark ? "bg-gray-800" : "bg-white"}`}
                    >
                      <div className="text-xl font-semibold mb-3 text-[#8cc63f]">
                        Customer-Centricity
                      </div>
                      <div
                        className={isDark ? "text-gray-400" : "text-slate-600"}
                      >
                        Our customers are at the heart of everything we do.
                      </div>
                    </div>
                    <div
                      className={`p-6 rounded-lg transition-all duration-300 hover:shadow-lg ${isDark ? "bg-gray-800" : "bg-white"}`}
                    >
                      <div className="text-xl font-semibold mb-3 text-[#8cc63f]">
                        Efficiency
                      </div>
                      <div
                        className={isDark ? "text-gray-400" : "text-slate-600"}
                      >
                        We strive for timely and effective service delivery.
                      </div>
                    </div>
                    <div
                      className={`p-6 rounded-lg transition-all duration-300 hover:shadow-lg ${isDark ? "bg-gray-800" : "bg-white"}`}
                    >
                      <div className="text-xl font-semibold mb-3 text-[#8cc63f]">
                        Confidentiality
                      </div>
                      <div
                        className={isDark ? "text-gray-400" : "text-slate-600"}
                      >
                        We protect your personal and financial information with
                        care.
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default OurIdeology;
