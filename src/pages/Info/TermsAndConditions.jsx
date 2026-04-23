import { useEffect, useState } from "react";
import { HiDocumentText, HiInformationCircle, HiMenu } from "react-icons/hi";

function TermsAndConditions({ onNavigate }) {
  const [theme, setTheme] = useState(() => {
    return document.documentElement.getAttribute("data-theme") || "light";
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navigate = (route) => {
    if (onNavigate) {
      onNavigate(route);
      return;
    }
    window.location.href = route ? `/${route}` : "/";
  };

  // Table of contents items
  const tocItems = [
    "Our details",
    "Responsibility for others",
    "Other governing documents",
    "Availability of our website",
    "Changes to Terms",
    "Your account details",
    "Ownership of material",
    "Non-reliance basis",
    "Permitted use",
    "Prohibited uses",
    "Viruses and harmful content",
    "Links to other websites",
    "Links to our website",
    "Exclusions of liability",
    "Indemnification",
    "Disclaimers",
    "Age restrictions",
    "Governing law",
    "Copyright & credit",
  ];

  return (
    <div className="info-page-container">
      {/* Hero Section */}
      <div className="info-hero mb-0">
        <div className="text-4xl font-semibold">Terms & Conditions</div>
        <div className="text-xl font-semibold">
          Understand the rules governing your use of our website
        </div>
      </div>

      <div
        className={`min-h-screen ${isDark ? "text-white" : "text-gray-900"}`}
      >
        {/* Mobile menu button - only visible on small screens */}
        <div className="lg:hidden px-4 pt-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
              isDark
                ? "border-gray-700 bg-gray-800 text-white"
                : "border-gray-200 bg-white text-gray-900"
            }`}
          >
            <HiMenu /> Table of Contents
          </button>
        </div>

        {/* Two-column layout: left fixed sidebar, right main content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Table of Contents (hidden on mobile, sticky on desktop) */}
            <aside
              className={`
                lg:block lg:w-80 lg:shrink-0
                ${mobileMenuOpen ? "block" : "hidden"}
                ${isDark ? "bg-gray-900/60" : "bg-gray-50"}
                rounded-xl p-5 sticky top-24 self-start
                transition-all duration-300
              `}
            >
              <div className="text-lg font-bold mb-3 flex items-center gap-2">
                <HiDocumentText className="text-[#8cc63f]" /> Contents
              </div>
              <div className="space-y-1 text-sm max-h-[70vh] overflow-y-auto pr-2">
                {tocItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={`#clause-${idx + 1}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-1.5 hover:text-[#8cc63f] transition-colors ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {idx + 1}. {item}
                  </a>
                ))}
              </div>
            </aside>

            {/* Main Content Area - Right side */}
            <main className="flex-1 min-w-0">
              <div
                className={`rounded-2xl border p-6 md:p-8 ${
                  isDark
                    ? "bg-gray-800/70 border-gray-700"
                    : "bg-white border-gray-200 shadow-sm"
                }`}
              >
                {/* Effective date notice */}
                <div className="mb-6 flex items-center gap-2 text-sm text-[#8cc63f]">
                  <HiInformationCircle />
                  <span>Effective from 01.01.2023</span>
                </div>

                {/* Introduction */}
                <div className="prose prose-sm sm:prose-base max-w-none dark:prose-invert">
                  <p className="lead">
                    These Terms of Use, and any documents referred to herein,
                    set out the terms and conditions on which you are permitted
                    to use our website, www.ayedosgroup.com. By using our
                    website, you agree to be bound by, and to comply with, these
                    Terms of Use.
                  </p>
                  <p>
                    Please read these Terms of Use carefully. We recommend that
                    you print off a copy of these Terms of Use for your records,
                    as well as any future versions of them, as we may update
                    them from time to time.{" "}
                    <strong>
                      YOUR ATTENTION IS PARTICULARLY DRAWN TO CLAUSES 14
                      (EXCLUSIONS AND LIMITATIONS OF LIABILITY), 15
                      (INDEMNIFICATION), 16 (DISCLAIMERS) AND 17 (AGE
                      RESTRICTIONS ON USE OF OUR WEBSITE).
                    </strong>
                  </p>
                  <p>
                    If for any reason whatsoever you do not agree to these Terms
                    of Use or do not wish to be bound by them, you must not
                    access or use our website.
                  </p>
                </div>

                {/* Clauses */}
                <div className="space-y-8 mt-8">
                  {/* Clause 1 */}
                  <div id="clause-1" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <span className="text-[#8cc63f]">1.</span> Our details
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        AYEDOS SACCO LIMITED (we, our and us) operates the
                        website. AYEDOS SACCO LIMITED is a limited liability
                        company incorporated in Kenya. Company Registration
                        number is PVT-KAUZ3R2. Our registered address is 1st
                        Floor Africa Reit House, Africa Reit Lane, Karen,
                        43072-00100, Nairobi Kenya. Our VAT registration number
                        is P051662421X.
                      </p>
                      <p>
                        Our contact telephone number is +254 733556617 and our
                        contact email address is info@ayedosgroup.com
                      </p>
                    </div>
                  </div>

                  {/* Clause 2 */}
                  <div id="clause-2" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <span className="text-[#8cc63f]">2.</span> Your
                      responsibility for others who access our website using
                      your device or internet connection
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        You must ensure that any persons who access our website
                        on your computer(s) or device(s), or who are permitted
                        or able to access our website on your computer(s) or
                        device(s), or who use your internet connection, are
                        aware of these Terms of Use and all other documentation
                        referred to in them, and that such persons also agree to
                        be bound by and to comply with these Terms of Use. If
                        for any reason whatsoever, such persons do not agree to
                        these Terms of Use or do not wish to be bound by them,
                        they must not access or use our website, and you must
                        not permit them to do so.
                      </p>
                    </div>
                  </div>

                  {/* Clause 3 */}
                  <div id="clause-3" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <span className="text-[#8cc63f]">3.</span> Other documents
                      governing your use of our website
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        In addition to these Terms of Use, your use of our
                        website is also governed by the following documents:
                      </p>
                      <ul>
                        <li>
                          <strong>Our privacy policy</strong> – governs our use
                          of your information. It sets out the types of
                          information we collect, the reasons we collect it, how
                          we use it, where we may pass it on to any third
                          parties, and your rights in relation to your
                          information.
                        </li>
                        <li>
                          <strong>Our cookies policy</strong> – governs our use
                          of cookies and similar technologies on our website.
                        </li>
                        <li>
                          <strong>Our terms of sale</strong> – govern any
                          purchases or orders you make for goods or services on
                          our website.
                        </li>
                      </ul>
                      <p>
                        By accessing and using our website, you agree to be
                        bound by these Terms of Use, acknowledge that we will
                        process your information in accordance with our privacy
                        policy, and our use of cookies and similar technologies
                        in accordance with our cookies policy.
                      </p>
                    </div>
                  </div>

                  {/* Clause 4 */}
                  <div id="clause-4" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <span className="text-[#8cc63f]">4.</span> Availability of
                      our website
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        We make no representations and provide no warranties
                        that the website will be made available at any specific
                        time or from any specific geographical location; your
                        access will be continuous or uninterrupted; or the
                        website will be accessible or optimised on all browsers,
                        computers, tablets, phones or viewing platforms.
                      </p>
                      <p>
                        We reserve the right to suspend access to all or part of
                        the website for any reason, including for business or
                        operational reasons. Our website is provided for users
                        in the Republic of Kenya. Although it may be possible to
                        access the website from other countries, we make no
                        representation that our website is compliant with legal
                        requirements in any jurisdiction other than the Republic
                        of Kenya.
                      </p>
                    </div>
                  </div>

                  {/* Clause 5 */}
                  <div id="clause-5" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <span className="text-[#8cc63f]">5.</span> Changes we may
                      make to these Terms of Use and other documentation
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        We reserve the right to update these Terms of Use, our
                        privacy policy, our cookies policy and any other
                        documentation referred to in any of these documents from
                        time to time. By continuing to access our website after
                        we have updated these documents, you agree to be bound
                        by those updated versions. The date that these Terms of
                        Use and/or any other documents were last amended is set
                        out at the top of that document and is referred to as
                        that document’s “effective date”.
                      </p>
                    </div>
                  </div>

                  {/* Clause 6 */}
                  <div id="clause-6" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <span className="text-[#8cc63f]">6.</span> Your account
                      details
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        If we provide you with account information such as a
                        username, identification number, account code and/or
                        password, you must keep such information confidential
                        and secret. We reserve the right to withdraw access to
                        your account without notice for any actual or suspected
                        breach of these Terms of Use. If you know or suspect
                        that the confidentiality of your login information has
                        been compromised, you must immediately change your
                        password or notify us by email at info@ayedosgroup.com.
                      </p>
                    </div>
                  </div>

                  {/* Clause 7 */}
                  <div id="clause-7" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <span className="text-[#8cc63f]">7.</span> Ownership of
                      material on our website
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        All trademarks, service marks, trade names, logos,
                        copyright and other intellectual property rights in our
                        website and its content are either owned by us or
                        licensed to us. All such rights are reserved. AYEDOS
                        SACCO LIMITED is our registered trademark. Nothing in
                        these Terms of Use should be construed as granting any
                        licence or right to use any of our or any third-party
                        marks without the respective owner’s prior written
                        permission.
                      </p>
                    </div>
                  </div>

                  {/* Clause 8 */}
                  <div id="clause-8" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <span className="text-[#8cc63f]">8.</span> Information and
                      content on our website provided on non-reliance basis
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        The content on our website is not intended to be
                        construed as advice. You must not rely on any of the
                        content of our website for any purposes whatsoever, and
                        you must seek your own independent professional advice
                        before deciding to take any course of action on the
                        basis of any of the content available on our website at
                        any time. We make no representations that any of the
                        content or materials available on our website from time
                        to time are accurate, up to date or complete.
                      </p>
                    </div>
                  </div>

                  {/* Clause 9 */}
                  <div id="clause-9" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <span className="text-[#8cc63f]">9.</span> Permitted use
                      of materials on our website
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        The content on our website is provided for your
                        personal, private and non-commercial use only. You may
                        print or share the content from our website for lawful
                        personal, private and non-commercial purposes. You may
                        not otherwise extract, reproduce or distribute the
                        content of our website without our prior written
                        consent. You are prohibited from using any robots,
                        spiders, data mining or scraping technology for the
                        extraction or reproduction of any data or content from
                        our website without our prior written consent.
                      </p>
                    </div>
                  </div>

                  {/* Clause 10 */}
                  <div id="clause-10" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <span className="text-[#8cc63f]">10.</span> Prohibited
                      uses of our website
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        You must not reproduce, duplicate, copy or resell any
                        part of our website or any content from our website,
                        save and except to the extent expressly permitted in
                        these Terms of Use. You must use our website for lawful
                        purposes only and in accordance with these Terms of Use.
                        You must not submit any information about you to us if
                        you are under the age of 18, nor submit any “sensitive
                        personal information” as defined.
                      </p>
                    </div>
                  </div>

                  {/* Clause 11 */}
                  <div id="clause-11" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <span className="text-[#8cc63f]">11.</span> Viruses and
                      other harmful content
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        We do not guarantee that our website does not contain
                        viruses or other malicious software. We shall not be
                        responsible for any bugs or viruses on our website. You
                        must ensure that you have in place up-to-date and
                        effective anti-virus protection. You must not upload or
                        otherwise introduce to our website any harmful programs
                        or code. We may report any breach or suspected breach of
                        this clause to the relevant authorities and may disclose
                        your identity.
                      </p>
                    </div>
                  </div>

                  {/* Clause 12 */}
                  <div id="clause-12" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <span className="text-[#8cc63f]">12.</span> Links to other
                      websites
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        Links to third party content or websites may appear on
                        our website from time to time. We are not responsible
                        for the content of any websites accessible via any
                        link(s) on our website. Any third-party website
                        accessible via a link on our website may collect and
                        process your information. We are not responsible for any
                        data-processing activities carried out by any
                        third-party website which is linked to from our website.
                      </p>
                    </div>
                  </div>

                  {/* Clause 13 */}
                  <div id="clause-13" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <span className="text-[#8cc63f]">13.</span> Links to our
                      website
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        You may not link to our website without our prior
                        written consent. Where you have obtained our consent to
                        link to our website, you must do so in an appropriate
                        manner, and not in any way which is defamatory or
                        disparaging towards us. We may withdraw permission to
                        link to our website at any time.
                      </p>
                    </div>
                  </div>

                  {/* Clause 14 */}
                  <div id="clause-14" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <span className="text-[#8cc63f]">14.</span> EXCLUSIONS AND
                      LIMITATIONS OF LIABILITY
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        We do not exclude our liability to you where it would be
                        unlawful to do so, for example, for death or personal
                        injury caused by our negligence. Subject to the
                        aforesaid, in no event shall we under any circumstances
                        whatsoever be liable to you for any loss, damage
                        (whether direct, indirect, punitive, actual,
                        consequential, incidental, special, exemplary, or
                        otherwise) costs, expenses, liabilities or penalties
                        arising from, in connection with or relating to your use
                        of our website, any inability to access our website, any
                        reliance on content, any loss of profits, business,
                        revenue, reputation, goodwill, savings, opportunity, or
                        any other secondary, consequential or indirect losses,
                        and even if we have been advised of the possibility of
                        such loss or damage.
                      </p>
                    </div>
                  </div>

                  {/* Clause 15 */}
                  <div id="clause-15" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <span className="text-[#8cc63f]">15.</span>{" "}
                      INDEMNIFICATION
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        You agree to defend (at our request), indemnify and hold
                        us harmless from and against any claims, liabilities,
                        damages, losses and expenses, including, without
                        limitation, reasonable legal and attorneys’ fees and
                        costs, arising out of or in any way connected with your
                        access to or use of the website, your breach of these
                        Terms of Use, your violation of any third-party right,
                        your violation of any laws, or any misrepresentation
                        made by you.
                      </p>
                    </div>
                  </div>

                  {/* Clause 16 */}
                  <div id="clause-16" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <span className="text-[#8cc63f]">16.</span> DISCLAIMERS
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        THE WEBSITE IS PROVIDED ON AN “AS IS”, “AS AVAILABLE”
                        AND “WITH ALL FAULTS” BASIS. TO THE FULLEST EXTENT
                        PERMISSIBLE BY LAW, WE DO NOT MAKE ANY REPRESENTATIONS
                        OR WARRANTIES OR ENDORSEMENTS OF ANY KIND WHATSOEVER,
                        EXPRESS OR IMPLIED, AS TO THE SERVICE, WEBSITE CONTENT,
                        USER CONTENT, OR SECURITY. WE DO NOT REPRESENT OR
                        WARRANT THAT THE SERVICE WILL BE ERROR-FREE OR
                        UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, OR THAT
                        THE SERVICE OR THE SERVER THAT MAKES THE SERVICE
                        AVAILABLE IS FREE FROM ANY HARMFUL COMPONENTS.
                      </p>
                    </div>
                  </div>

                  {/* Clause 17 */}
                  <div id="clause-17" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <span className="text-[#8cc63f]">17.</span> AGE
                      RESTRICTIONS ON USE OF OUR WEBSITE
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        Our website and any products or services available on or
                        via the website are not intended for use by individuals
                        under the age of 18. IF YOU ARE UNDER THE AGE OF 18, YOU
                        MUST NOT USE OUR WEBSITE, PURCHASE OR ATTEMPT TO
                        PURCHASE ANY OF OUR PRODUCTS OR SERVICES, OR SUBMIT ANY
                        INFORMATION ABOUT YOU OR ANYONE ELSE TO US. We do not
                        knowingly or intentionally process information about any
                        individual under the age of 18.
                      </p>
                    </div>
                  </div>

                  {/* Clause 18 */}
                  <div id="clause-18" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <span className="text-[#8cc63f]">18.</span> Governing law
                      and jurisdiction
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        These Terms of Use, any documents they refer to, and any
                        disputes arising from or in relation to them or any
                        documents they refer to, whether contractual or
                        non-contractual, shall be governed by and construed in
                        accordance with English law. The courts of the Republic
                        of Kenya shall have exclusive jurisdiction over any
                        claims or disputes arising from or in relation to these
                        Terms of Use and any documents they refer to.
                      </p>
                    </div>
                  </div>

                  {/* Clause 19 */}
                  <div id="clause-19" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <span className="text-[#8cc63f]">19.</span> Copyright,
                      credit and logo
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        The copyright in these Terms of Use is either owned by,
                        or licensed to, us and is protected by copyright laws
                        around the world. These Terms of Use are based on a
                        General Data Protection Regulation (Regulation (EU)
                        2016/769) (“GDPR”) compliant template provided by GDPR
                        Privacy Policy, and the Data Protection Act, 2019 (of
                        the Republic of Kenya). For further information, please
                        visit{" "}
                        <a
                          href="https://www.odpc.go.ke/download/kenya-gazette-data-protection-act-2019/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8cc63f] hover:underline"
                        >
                          https://www.odpc.go.ke/download/kenya-gazette-data-protection-act-2019/
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer note */}
                <div
                  className={`mt-8 pt-6 text-sm border-t ${isDark ? "border-gray-700" : "border-gray-200"}`}
                >
                  <p className={isDark ? "text-gray-400" : "text-gray-500"}>
                    By continuing to use our website, you acknowledge that you
                    have read, understood, and agree to be bound by these Terms
                    and Conditions.
                  </p>
                </div>
              </div>

              {/* CTA Section - Contact Support */}
              <div className="py-8 mb-15">
                <div className="max-w-4xl mx-auto px-4 text-center">
                  <div
                    className={`rounded-3xl p-10 text-center transition-all duration-300 hover:-translate-y-1 ${
                      isDark
                        ? "bg-linear-to-r from-[#8cc63f]/20 to-transparent border border-[#8cc63f]/30"
                        : "bg-linear-to-r from-[#8cc63f]/10 to-transparent border border-[#8cc63f]/20"
                    }`}
                  >
                    <div
                      className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}
                    >
                      Have questions about our terms?
                    </div>
                    <p
                      className={`mb-6 ${isDark ? "text-gray-300" : "text-slate-600"}`}
                    >
                      If you need clarification on any clause, our legal and
                      support team is ready to help.
                    </p>
                    <button
                      className="px-6 py-3 rounded-xl font-semibold bg-[#8cc63f] hover:bg-[#9fd858] text-slate-900 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                      onClick={() => navigate("contact")}
                    >
                      Contact Support
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
