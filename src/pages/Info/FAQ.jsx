import { HiChevronDown, HiArrowLeft } from "react-icons/hi2";
import { useState, useEffect } from "react";
import "../../styles.css";

function FAQ() {
  const navigate = (route) => {
    window.location.href = route ? `/${route}` : "/";
  };

  const [theme, setTheme] = useState(() => {
    return document.documentElement.getAttribute("data-theme") || "light";
  });

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

  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What is Ayedos SACCO?",
          a: "Ayedos SACCO is a comprehensive financial management platform designed specifically for its members. We provide tools for managing member accounts, savings, shares, dividends, and loans.",
        },
        {
          q: "Who can use Ayedos?",
          a: "We serve both employee-based and non-employee member organizations.",
        },
      ],
    },
    {
      category: "Account & Login",
      questions: [
        {
          q: "How do I register as a member?",
          a: 'Click the "Get Started" button on the navbar, fill in your details, and complete the verification process.',
        },
        {
          q: "I forgot my password, how do I reset it?",
          a: 'Click "Forgot Password" on the login page, enter your registered email, and follow the reset instructions sent to your inbox.',
        },
        {
          q: "Can I have multiple accounts?",
          a: "Each member is typically associated with one account. However, one can open accounts for family and friends with their credentials.",
        },
      ],
    },
    {
      category: "Transactions",
      questions: [
        {
          q: "How do I make a deposit?",
          a: 'Log in to your member portal, go to "Make Deposit", and follow the prompts. You can use mobile money or bank transfer.',
        },
        {
          q: "How long do withdrawals take?",
          a: "Mobile money withdrawals are processed instantly. Bank transfers typically take 1-2 business days.",
        },
      ],
    },
    {
      category: "Dividends & Shares",
      questions: [
        {
          q: "When are dividends paid?",
          a: "Dividends are typically distributed annually after the AGM. The exact timing is announced by the SACCO board and depends on financial performance.",
        },
        {
          q: "How are dividends calculated?",
          a: "Dividends are calculated based on your share capital at the end of the financial year. The rate is determined by the board and approved by members at the AGM.",
        },
        {
          q: "Can I transfer my shares?",
          a: "Yes, share transfers are allowed subject to SACCO rules. You need to submit a transfer request through your member portal.",
        },
      ],
    },
    {
      category: "Loans",
      questions: [
        {
          q: "How do I apply for a loan?",
          a: 'Log in to your member portal, navigate to "Loans", and select "Apply". Complete the application form and submit required documents. You\'ll be notified of the decision within 5-7 business days with exception of the emergency loans.',
        },
        {
          q: "What is the maximum loan amount?",
          a: "Loan limits depend on your share capital, contribution history, and credit score. ",
        },
        {
          q: "Can I repay my loan early?",
          a: "Yes, you can make early repayments without penalty. Contact your SACCO for the exact payoff amount.",
        },
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let counter = 0;

  return (
    <div className="info-page-container">
      <div className="info-hero">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about Ayedos SACCO</p>
      </div>

      <main
        className={`flex-1 ${theme === "dark" ? "bg-black" : "bg-gray-50"}`}
      >
        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* FAQ */}
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-10">
              <div className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-[#8cc63f]"></span>
                <span
                  className={theme === "dark" ? "text-white" : "text-slate-900"}
                >
                  {category.category}
                </span>
              </div>

              <div className="space-y-3">
                {category.questions.map((item, qIndex) => {
                  const index = counter++;
                  const isOpen = openIndex === index;

                  return (
                    <div
                      key={qIndex}
                      className={`rounded-xl border transition-all duration-300 ${
                        theme === "dark"
                          ? "bg-gray-800 border-gray-700 hover:border-[#8cc63f]/50"
                          : "bg-white border-gray-200 hover:border-[#8cc63f]/40 hover:shadow-lg"
                      }`}
                    >
                      {/* Question */}
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-opacity-50 transition-colors duration-200"
                      >
                        <span
                          className={`font-medium ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                        >
                          {item.q}
                        </span>

                        <HiChevronDown
                          className={`transition-all duration-300 ${
                            isOpen
                              ? "rotate-180 text-[#8cc63f]"
                              : "text-slate-400"
                          }`}
                        />
                      </button>

                      {/* Answer */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? "max-h-40 px-4 pb-4" : "max-h-0"
                        }`}
                      >
                        <div
                          className={`text-sm ${
                            theme === "dark" ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {item.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* CTA */}
          <section
            className={`mt-16 rounded-3xl p-10 text-center transition-all duration-300 hover:-translate-y-1 ${
              theme === "dark"
                ? "bg-linear-to-r from-[#8cc63f]/20 to-transparent border border-[#8cc63f]/30"
                : "bg-linear-to-r from-[#8cc63f]/10 to-transparent border border-[#8cc63f]/20"
            }`}
          >
            <div
              className={`text-2xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
            >
              Still Have Questions?
            </div>
            <div
              className={`mb-6 ${theme === "dark" ? "text-gray-300" : "text-slate-600"}`}
            >
              Can't find what you're looking for? Our support team is here to
              help.
            </div>

            <button
              onClick={() => navigate("contact")}
              className="px-6 py-3 rounded-xl font-semibold bg-[#8cc63f] hover:bg-[#9fd858] text-slate-900 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              Contact Support
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}

export default FAQ;
