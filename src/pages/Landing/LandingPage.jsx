import { useState, useEffect } from "react";
import { HiArrowRight, HiChevronLeft, HiChevronRight, HiXMark } from "react-icons/hi2";
import Navbar from "../../components/layout/LandingPageNavbar";
import Footer from "../../components/ui/Footer";

const HERO_IMAGES = [
  "/landingphoto.png",
  "/landingphoto2.png",
  "/hero-aye.png",
];

function LandingPage({ onNavigate }) {
  const navigate = (route) => {
    if (onNavigate) onNavigate(route);
  };

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", description: "" });

  // Theme state (synchronised with data-theme on <html>)
  const [theme, setTheme] = useState(() => {
    return document.documentElement.getAttribute("data-theme") || "light";
  });

  // Listen for changes to the data-theme attribute
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme") {
          const newTheme =
            document.documentElement.getAttribute("data-theme") || "light";
          setTheme(newTheme);
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalOpen]);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    if (modalOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [modalOpen]);

  const goToSlide = (index) => setCurrentSlide(index);
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length,
    );

  // Helper for dynamic background classes
  const bgClass = (lightClass, darkClass) => {
    return theme === "dark" ? darkClass : lightClass;
  };

  // Get modal description based on card title
  const getModalDescription = (title) => {
    const descriptions = {
      "Financial Growth":
        "Our SACCO provides a robust environment for your savings to earn competitive dividends while maintaining security. With disciplined saving plans and investment opportunities, you can steadily build wealth and achieve long-term financial goals. Join to unlock your financial growth potential. Together, we grow stronger through shared prosperity and transparent financial practices.",
      "Community Trust":
        "We put members first, ensuring transparency in all our operations, clear communication, and fair policies. Trust is the cornerstone of our cooperative, built through consistent ethical practices and a member-driven approach. Experience a community where everyone's financial well-being matters. Join us to be part of a trusted network that values integrity and shared success.",
      "Flexible Solutions":
        "We offer customizable loan products, affordable interest rates, and repayment schedules designed to fit your unique financial situation. Whether it's emergency, education, or business expansion, our flexible solutions empower you to access funds when you need them without unnecessary burden. Experience financial freedom with products built around your life.",
    };
    return (
      descriptions[title] ||
      "Join a financial community built on trust, transparency, and shared prosperity. Take control of your financial future with AYEDOS SACCO."
    );
  };

  const openModal = (title) => {
    setModalContent({
      title,
      description: getModalDescription(title),
    });
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={onNavigate} />

      {/* MODAL */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300"
          onClick={closeModal}
        >
          <div
            className={`relative max-w-md w-full rounded-2xl shadow-2xl transform transition-all duration-300 scale-100 ${
              theme === "dark"
                ? "bg-black border border-[#8cc63f]/40 text-white"
                : "bg-white border border-gray-200"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <HiXMark size={24} className={theme === "dark" ? "text-white/70 hover:text-white" : "text-gray-500 hover:text-gray-700"} />
            </button>

            {/* Modal Content */}
            <div className="p-6 pt-8">
              <h3 className={`text-2xl font-bold mb-3 pr-6 ${bgClass("text-slate-800", "text-white")}`}>
                {modalContent.title}
              </h3>
              <div className="h-px w-12 bg-[#8cc63f] mb-4"></div>
              <p className={`text-base leading-relaxed mb-6 ${bgClass("text-slate-600", "text-slate-300")}`}>
                {modalContent.description}
              </p>
              <div className="flex items-center justify-between gap-4 flex-wrap">
                  <a href="https://ayedos-webapp.vercel.app/" className="mr-4">
                <button
                 
                  className="btn btn-sm bg-[#8cc63f] hover:bg-[#9fd858] text-white border-none shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  >
                  Become a Member
                </button>
                  </a>
                <button
                  onClick={closeModal}
                  className={`btn btn-sm border ${
                    theme === "dark"
                      ? "border-white/20 text-white/80 hover:bg-white/10"
                      : "border-gray-300 text-slate-600 hover:bg-gray-100"
                  }`}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* HERO CAROUSEL */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="relative w-full h-full">
          {HERO_IMAGES.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay that adapts to theme */}
              <div
                className={`absolute inset-0 ${
                  theme === "dark"
                    ? "bg-black/40"
                    : "bg-linear-to-r from-black/30 via-black/20 to-black/30"
                }`}
              >
                <div className="text-center max-w-3xl mx-auto h-screen pt-[62%] sm:pt-[15%]">
                  <div className=" text-center text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-3">
                    AYEDOS SACCO
                  </div>
                  <p className=" text-center text-lg md:text-xl text-white/90 mb-10 leading-relaxed mx-auto">
                    Take charge of your financial future with a SACCO built on
                    trust, growth, and opportunity. Save smarter, access
                    affordable loans faster, and be part of a community that
                    supports your goals every step of the way. With secure
                    systems, flexible solutions, and a commitment to your
                    success, we’re more than a SACCO—we’re your partner in
                    building a stronger, more confident tomorrow.
                  </p>
                  <div className="flex flex-row sm:flex-row gap-4 justify-center pt-[10%] sm:pt-[5%]">
                      <a href="https://ayedos-webapp.vercel.app/" className="mr-4">
                    <button
                      className="btn btn-lg bg-[#8cc63f] hover:bg-[#9fd858] text-slate-900 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-42"
                       
                      >
                      Get Started <HiArrowRight className="ml-2" size={20} />
                    </button>
                      </a>
                    <button
                      className="btn btn-lg bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-42"
                      onClick={() => navigate("/our-story")}
                    >
                      Learn More
                    </button>
                  </div>
                  {/* <p className="mt-5 text-sm text-white/80">
                    Already have an account?{" "}
                    <button
                      type="button"
                      className="font-semibold text-[#8cc63f]"
                      onClick={() => navigate("login")}
                    >
                      Log in
                    </button>
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          <HiChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          <HiChevronRight size={24} />
        </button>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "bg-[#8cc63f] w-10 h-3"
                  : "bg-white/40 hover:bg-white/60 w-3 h-3"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ABOUT - WHY CHOOSE US (theme‑aware) */}
      <section
        className={`py-20 px-4 transition-colors duration-300 ${bgClass("bg-gray-50", "bg-black")}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div
              className={`text-4xl md:text-5xl font-bold mb-4 ${bgClass("text-slate-800", "text-white")}`}
            >
              Choose AYEDOS SACCO
            </div>
            <p
              className={`text-lg ${bgClass("text-slate-600", "text-slate-300")}`}
            >
              Join a financial community built on trust, transparency, and
              shared prosperity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Financial Growth",
                description:
                  "Your savings work for you through competitive dividends and smart financial solutions designed for long-term stability.",
              },
              {
                title: "Community Trust",
                description:
                  "We prioritize integrity, open communication, and member-first decisions in everything we do.",
              },
              {
                title: "Flexible Solutions",
                description:
                  "Access affordable and flexible loan options tailored to your needs — when you need them most.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`group card transition-all duration-300 hover:-translate-y-2 ${bgClass(
                  "bg-white border border-gray-200 shadow-md hover:shadow-xl",
                  "bg-black border-[#8cc63f]/40 hover:border-[#8cc63f]/80 shadow-lg",
                )}`}
              >
                <div className="card-body p-8">
                  <div
                    className={`card-title text-2xl mb-4 ${bgClass("text-slate-800", "text-white")}`}
                  >
                    {item.title}
                  </div>
                  <p
                    className={`leading-relaxed mb-6 ${bgClass("text-slate-600", "text-slate-300")}`}
                  >
                    {item.description}
                  </p>
                  <div
                    className="card-actions justify-start mt-auto pt-4 border-t"
                    style={{
                      borderTopColor:
                        theme === "dark"
                          ? "rgba(139, 198, 63, 0.2)"
                          : "#e5e7eb",
                    }}
                  >
                    <button
                      onClick={() => openModal(item.title)}
                      className="btn btn-sm bg-[#8cc63f] hover:bg-[#9fd858] text-white border-none shadow-md"
                    >
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
      <section
        className={`py-24 px-4 transition-colors duration-300 ${bgClass(
          "bg-white",
          "bg-black",
        )}`}
      >
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div
              className={`text-4xl md:text-5xl font-bold mb-4 ${bgClass("text-slate-800", "text-white")}`}
            >
              Our Services
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {[
              {
                title: "Savings",
                image: "/savings.jpg",
                desc: "Build a strong financial foundation with structured savings plans designed to encourage consistency and discipline. Whether you’re saving for a goal or preparing for the future, our SACCO provides a safe, supportive environment to help your money grow steadily over time.",
              },
              {
                title: "Loans & Credit",
                image: "/loan-two.jpg",
                desc: "Access flexible and affordable financing tailored to meet the needs of our members and their families. From personal needs to business growth, our loan products are designed with fair terms, quick processing, and a focus on empowering your financial progress.",
              },
              {
                title: "Investments",
                image: "/invest.jpg",
                desc: "Grow your wealth through carefully selected collective investment opportunities. By pooling resources, members benefit from diversified ventures that are professionally managed, helping you achieve higher returns and long-term financial security.",
              },
              {
                title: "Financial Education",
                image: "/educatiion.jpg",
                desc: "Make informed financial decisions with confidence through our ongoing guidance and resources. We equip our members with practical knowledge on saving, borrowing, and investing, ensuring you have the tools to build and sustain your financial well-being.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className={`group overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                  theme === "dark"
                    ? "border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#8cc63f]/60 hover:bg-white/10"
                    : "border border-gray-200 bg-gray-50 shadow-md hover:shadow-lg hover:border-[#8cc63f]/40"
                }`}
              >
                <div
                  className={`relative h-40 overflow-hidden ${
                    theme === "dark" ? "bg-black" : "bg-white"
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <div
                    className={`text-xl font-semibold mb-2 ${bgClass("text-slate-800", "text-white")}`}
                  >
                    {service.title}
                  </div>
                  <p
                    className={`text-sm leading-relaxed ${bgClass("text-slate-600", "text-white/70")}`}
                  >
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBER BENEFITS (theme‑aware) */}
      <section
        className={`py-24 px-4 transition-colors duration-300 ${bgClass("bg-gray-100", "bg-black")}`}
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`rounded-3xl p-10 md:p-16 shadow-sm backdrop-blur-sm ${
              theme === "dark"
                ? "border border-[#8cc63f]/40 bg-black"
                : "border border-[#8cc63f]/30 bg-white"
            }`}
          >
            <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] items-center">
              <div className="space-y-8">
                <div>
                  <p className="text-sm uppercase tracking-widest font-semibold text-[#8cc63f] mb-4">
                    Your Financial Growth Starts Here
                  </p>
                  <div
                    className={`text-4xl md:text-5xl font-bold leading-tight ${bgClass("text-slate-800", "text-white")}`}
                  >
                    Take Control of Your Money
                  </div>
                </div>
                <p
                  className={`text-lg leading-relaxed max-w-2xl ${bgClass("text-slate-600", "text-slate-300")}`}
                >
                  Better savings, affordable loans, and real returns await.
                  Becoming a member is your first step toward financial freedom
                  and prosperity.
                </p>
                  <a href="https://ayedos-webapp.vercel.app/" className="mr-4">
                <button
                  className="btn btn-lg bg-[#8cc63f] hover:bg-[#9fd858] text-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  
                  >
                  Become a Member Today
                </button>
                  </a>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    title: " Savings",
                    text: "Secure your future with consistent, disciplined savings.",
                  },
                  {
                    title: " Affordable Loans",
                    text: "Access smart credit with friendly repayment terms.",
                  },
                  {
                    title: " Real Returns",
                    text: "Grow wealth through cooperative dividends.",
                  },
                  {
                    title: " Member Power",
                    text: "Benefit from shared trust and financial control.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`group rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                      theme === "dark"
                        ? "bg-black border-[#8cc63f]/40 hover:border-[#8cc63f]/60"
                        : "bg-white border-gray-200 shadow-md hover:shadow-lg hover:border-[#8cc63f]/40"
                    }`}
                  >
                    <div
                      className={`font-semibold text-lg mb-2 ${bgClass("text-slate-800", "text-white")}`}
                    >
                      {item.title}
                    </div>
                    <p
                      className={`text-sm leading-relaxed ${bgClass("text-slate-600", "text-slate-400")}`}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN SNAPSHOT (theme‑aware) */}
      <section
        className={`py-24 px-4 transition-colors duration-300 ${bgClass("bg-gray-50", "bg-black")}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div
              className={`text-center text-4xl md:text-5xl font-bold mb-4 ${bgClass("text-slate-800", "text-white")}`}
            >
              Product Design
            </div>
            <p
              className={`text-lg mx-auto ${bgClass("text-slate-600", "text-slate-300")}`}
            >
              Our SACCO platform is thoughtfully designed for you. Around the
              member experience, simple to navigate and tailored to everyday
              financial needs. Save, borrow, and grow with confidence!
            </p>
          </div>

          <div
            className={`${bgClass("text-slate-800", "text-white")} grid gap-8 lg:grid-cols-3`}
          >
            {[
              {
                title: "Member Portal",
                desc: "Clean, intuitive dashboard for managing contributions, loans, and staying updated.",
                features: [
                  "Easy Navigation",
                  "Real-time Updates",
                  "Secure Access",
                ],
              },
              {
                title: "Reporting Hub",
                desc: "Insightful summaries, official notices, and comprehensive financial overviews.",
                features: [
                  "Detailed Reports",
                  "Financial Insights",
                  "Compliance Tools",
                ],
              },
              {
                title: "Support Center",
                desc: "Fast access to help, FAQs, and member service tools when you need assistance.",
                features: ["24/7 Assistance", "Knowledge Base", "Live Support"],
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  theme === "dark"
                    ? "border border-slate-700 bg-black text-white"
                    : "border border-gray-200 bg-white"
                }`}
              >
                <div className="p-12">
                  <div
                    className={`text-2xl font-semibold mb-3 ${bgClass("text-slate-800", "text-white")}`}
                  >
                    {item.title}
                  </div>
                  <p
                    className={`mb-5 leading-relaxed ${bgClass("text-slate-600", "text-slate-300")}`}
                  >
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-2  ">
                    
                    {item.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#616e77]/10 text-[#8cc63f] text-xs font-medium rounded-full"
                      >
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
  );
}

export default LandingPage;
