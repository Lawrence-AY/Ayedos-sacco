import {
  HiArrowLeft,
  HiCalendar,
  HiUserGroup,
  HiShieldCheck,
  HiChartBar,
} from "react-icons/hi2";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/ui/Footer";
function OurStory({ onNavigate }) {
  const navigate = (route) => {
    if (onNavigate) onNavigate(route);
  };

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
      <Navbar onNavigate={onNavigate} />
      <div className="  text-slate-900">
        {/* Who We Are */}
        <section className="h-screen py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col bg-white items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                  What makes us different
                </h1>
                <p className="text-xl text-slate-600 leading-[2.5]">
                  Ayedos SACCO is a leading provider of comprehensive financial
                  management solutions for Savings and Credit Cooperatives
                  across East Africa. We combine deep industry expertise with
                  cutting-edge technology to empower SACCOs to operate more
                  efficiently, transparently, and profitably.
                </p>
              </div>
              <div className="h-80 w-full gap-2.5 rounded-3xl border border-slate-200 bg-white p-1 shadow-xl overflow-hidden flex">
                <img
                  src="/about-us.png"
                  alt="Ayedos SACCO Story"
                  className="w-1/2 h-full object-cover rounded-2xl"
                />
                <img
                  src="/about-two.png"
                  alt="Ayedos SACCO Story"
                  className="w-1/2 h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Our Journey
              </h2>
              <p className="text-slate-600 mt-4">
                A timeline of growth and innovation
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl transition hover:-translate-y-1"
                >
                  <div
                    className="font-bold text-lg mb-3"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {item.year}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="h-screen py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Our Values
              </h2>
              <p className="text-slate-600 mt-4">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-xl transition hover:-translate-y-1 text-center"
                  >
                    <div
                      className="mb-6"
                      style={{ color: "var(--color-accent)" }}
                    >
                      <Icon className="w-12 h-12 mx-auto" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-slate-900">
                      {value.title}
                    </h3>
                    <p className="text-slate-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="h-screen py-20 px-4 bg-slate-50 ">
          <div className="max-w-4xl mx-auto text-center rounded-[2rem] border border-slate-300 bg-white p-10 shadow-lg">
            <div className="text-3xl md:text-4xl font-bold mb-4 text-black ">
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
                  color: "var(--color-text)",
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
    </>
  );
}

export default OurStory;
