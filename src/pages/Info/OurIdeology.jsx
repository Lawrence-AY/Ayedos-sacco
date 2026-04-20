import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/ui/Footer";

function OurIdeology({ onNavigate }) {
  const navigate = (route) => {
    if (onNavigate) onNavigate(route);
  };

  return (
    <>
      <Navbar onNavigate={onNavigate} />
      <div className="text-slate-900">
        <section className="py-24 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-3">
                Our Core Ideology
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                About Our Philosophy
              </h1>
              <p className="text-lg text-slate-600 mt-4">
                Ayedos SACCO exists to deliver exceptional financial experiences
                for members, communities, and stakeholders through trust,
                innovation, and integrity.
              </p>
            </div>

            <div className="space-y-16">
              <section className="rounded-3xl bg-white shadow-xl p-10">
                <div className="text-3xl font-semibold text-slate-900 mb-4">
                  Vision
                </div>
                <p className="text-lg text-slate-600 leading-8">
                  To be the leading experience-driven financial services partner
                  in our region, where every member feels valued, empowered, and
                  inspired.
                </p>
                <p className="text-slate-600 leading-8 mt-4">
                  We aim to create "wow" moments for all our stakeholders,
                  fostering loyalty, trust, and a sense of shared achievement.
                </p>
              </section>

              <section className="rounded-3xl bg-white shadow-xl p-10">
                <div className="text-3xl font-semibold text-slate-900 mb-4">
                  Mission
                </div>
                <p className="text-lg text-slate-600 leading-8">
                  We deliver innovative financial solutions that support the
                  well-being and prosperity of our members and communities.
                </p>
                <p className="text-slate-600 leading-8 mt-4">
                  Our approach is creative, responsive, and rooted in
                  exceptional service so that every member can thrive with
                  confidence.
                </p>
              </section>

              <section className="rounded-3xl bg-white shadow-xl p-10">
                <div className="text-3xl font-semibold text-slate-900 mb-8">
                  Core Values
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Passion</h3>
                    <p className="text-slate-600 leading-7">
                      We love what we do and bring enthusiasm to every
                      interaction, committed to delivering excellence.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Teamwork</h3>
                    <p className="text-slate-600 leading-7">
                      We collaborate closely, valuing every voice and working
                      together to produce exceptional outcomes.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                    <p className="text-slate-600 leading-7">
                      We honour our commitments and earn trust by always doing
                      the right thing, consistently and transparently.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                    <p className="text-slate-600 leading-7">
                      We challenge the status quo, embrace new ideas, and shape
                      the future with creative solutions.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <div className="mt-16 text-center">
              <button
                onClick={() => navigate("register")}
                className="btn bg-[#8cc63f] hover:bg-[#9fd858] text-slate-900 border-none shadow-lg px-8 py-3 rounded-full transition-all duration-300 hover:-translate-y-1"
              >
                Join Our Community
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default OurIdeology;
