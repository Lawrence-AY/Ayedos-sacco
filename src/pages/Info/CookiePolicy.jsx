import { useEffect, useState } from "react";
import {
  HiDocumentText,
  HiMenu,
  HiOutlineAdjustments,
  HiOutlinePhotograph,
} from "react-icons/hi";
import {
  HiInformationCircle,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineDocumentText,
  HiOutlineComputerDesktop,
} from "react-icons/hi2";

function CookiePolicy({ onNavigate }) {
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
    "About cookies",
    "List of cookies used",
    "Web beacons",

    "How to accept or reject cookies",
    "Copyright, credit and logo",
  ];

  return (
    <div className="info-page-container">
      {/* Hero Section */}
      <div className="info-hero mb-0">
        <div className="text-4xl font-semibold">Cookies Policy</div>
        <div className="text-xl font-semibold">
          How we use cookies and similar technologies on our website
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
                    href={`#section-${idx + 1}`}
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
                  <p>
                    This Cookies Policy sets out the basis on which we, AYEDOS
                    SACCO LIMITED use cookies and similar technologies on or in
                    relation to our website, www.ayedosgroup.com. This Cookies
                    Policy is effective from 01.01.2023.
                  </p>
                  <p>
                    ‘Essential’ cookies are automatically placed on your
                    computer or device when you access our website or take
                    certain actions on our website. ‘Non-essential’ cookies and
                    other technologies are only placed on your computer or
                    device if you have consented to us doing so. For information
                    on the difference between essential and non-essential
                    cookies, see the section below entitled{" "}
                    <strong>About cookies</strong>.
                  </p>
                  <p>
                    For information on how you consent and how you can withdraw
                    your consent to us placing non-essential cookies and other
                    technologies on your computer or device, see the section
                    below entitled{" "}
                    <strong>How to accept or reject cookies</strong>.
                  </p>
                </div>

                {/* Sections */}
                <div className="space-y-8 mt-8">
                  {/* Section 1 - About cookies */}
                  <div id="section-1" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineShieldCheck className="text-[#8cc63f]" /> About
                      cookies
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <div>What are cookies?</div>
                      <p>
                        Cookies are small data files sent by a website’s server
                        to a web browser, processor memory or hard drive and
                        stored there. They can be used for a range of different
                        purposes, such as customizing a website for a particular
                        user, helping a user navigate a website, improving that
                        user’s website experience, and storing that user’s
                        preferences and login information.
                      </p>

                      <div>Essential and non-essential cookies</div>
                      <p>
                        Cookies can be classified as either ‘essential’ or
                        ‘non-essential’.
                      </p>
                      <ul>
                        <li>
                          <strong>Essential cookies:</strong> these are cookies
                          that are either used solely to carry out or facilitate
                          the transmission of communications over a network; or
                          strictly necessary to provide an online service (e.g.,
                          our website or a service on our website) which you
                          have requested.
                        </li>
                        <li>
                          <strong>Non-essential cookies:</strong> these are any
                          cookies that do not fall within the definition of
                          essential cookies, such as cookies used to provide
                          additional functionality on our website (‘functional’
                          cookies), analyze your behavior on a website
                          (‘analytical’ cookies) or to display advertisements to
                          you (‘advertising’ cookies).
                        </li>
                      </ul>

                      <div>Session and persistent cookies</div>
                      <p>
                        Cookies can be classified as either ‘session’ or
                        ‘persistent’, depending on how long they last after they
                        are placed on your browser.
                      </p>
                      <ul>
                        <li>
                          <strong>Session cookies:</strong> session cookies last
                          for as long as you keep your browser open. They expire
                          when you close your browser.
                        </li>
                        <li>
                          <strong>Persistent cookies:</strong> persistent
                          cookies expire at a fixed point in time or if you
                          manually delete them from your browser, whichever
                          occurs first.
                        </li>
                      </ul>

                      <div>First and third-party cookies</div>
                      <p>
                        Cookies can be classified as ‘first party’ or ‘third
                        party’.
                      </p>
                      <ul>
                        <li>
                          <strong>First party cookies:</strong> these are
                          cookies placed on your device by our website domain.
                        </li>
                        <li>
                          <strong>Third party cookies:</strong> these are
                          cookies placed on your device by third party website
                          domains.
                        </li>
                      </ul>

                      <p>
                        If you require further information about cookies in
                        general, please visit{" "}
                        <a
                          href="https://www.allaboutcookies.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8cc63f] hover:underline"
                        >
                          www.allaboutcookies.org
                        </a>
                        .
                      </p>

                      <div>Legal bases for processing</div>
                      <p>
                        For essential cookies, our legal basis for processing is
                        our legitimate interests in ensuring our site functions
                        properly and providing you with the online services you
                        have requested.
                      </p>
                      <p>
                        For non-essential cookies and other technologies, our
                        legal basis for processing is your consent which you
                        give by accepting/denying cookie usage in our website.
                      </p>
                    </div>
                  </div>

                  {/* Section 2 - List of cookies used */}
                  <div id="section-2" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineChartBar className="text-[#8cc63f]" /> List of
                      cookies used
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <div className="overflow-x-auto">
                        <table
                          className={`min-w-full border text-sm ${isDark ? "border-gray-700" : "border-gray-200"}`}
                        >
                          <thead>
                            <tr
                              className={isDark ? "bg-gray-700" : "bg-gray-100"}
                            >
                              <th className="border p-2 text-left">
                                Name of Cookie
                              </th>
                              <th className="border p-2 text-left">
                                Essential or Non-essential?
                              </th>
                              <th className="border p-2 text-left">
                                Type of cookie
                              </th>
                              <th className="border p-2 text-left">
                                First or Third party?
                              </th>
                              <th className="border p-2 text-left">
                                Session or Persistent?
                              </th>
                              <th className="border p-2 text-left">
                                Expiry Time
                              </th>
                              <th className="border p-2 text-left">Purpose</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border p-2">_ga</td>
                              <td className="border p-2">Non-essential</td>
                              <td className="border p-2">analytical</td>
                              <td className="border p-2">First party</td>
                              <td className="border p-2">Persistent</td>
                              <td className="border p-2">2 years</td>
                              <td className="border p-2">
                                To distinguish website visitors
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* Section 3 - Web beacons */}
                  <div id="section-3" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlinePhotograph className="text-[#8cc63f]" /> Web
                      beacons
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        We and any marketing companies we use also embed web
                        beacons in our marketing emails and/or on our website.
                        Web beacons are small GIF image files which enable us to
                        track your receipt of our marketing emails, how often
                        you view our adverts or website pages, your location, IP
                        address and browser information. Web beacons are
                        activated whenever you open a marketing email or access
                        a page on our website which contains a web beacon. Web
                        beacons transmit data when you view them but are not
                        capable of accessing any other information on your
                        computer. Web beacons are not stored on your hard drive
                        unless you download a GIF image containing them.
                      </p>
                      <p>
                        Some (but not all) browsers enable you to restrict the
                        use of web beacons by either preventing them from
                        sending information back to their source (for example,
                        when you choose browser settings that block cookies and
                        trackers), or by not accessing the images containing
                        them (for example, if you select a ‘do not display
                        images (in emails)’ setting in your email server).
                      </p>
                    </div>
                  </div>

                  {/* Section 5 - How to accept or reject cookies */}
                  <div id="section-5" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineAdjustments className="text-[#8cc63f]" /> How to
                      accept or reject cookies
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        There are a number of different ways in which you can
                        accept or reject some or all cookies and similar
                        technologies. Some of the main methods of doing so are
                        described below.
                      </p>
                      <p>
                        You are welcome to block the use of some or all of the
                        cookies we use on our website. However, please be aware
                        that doing so may impair our website and its
                        functionality or may even render some or all of it
                        unusable.
                      </p>
                      <p>
                        You should also be aware that clearing all cookies from
                        your browser will also delete any cookies that are
                        storing your preferences, for example, whether you have
                        accepted cookies on a website or any cookies that are
                        blocking other cookies.
                      </p>
                      <p>
                        You can find more detailed information about cookies and
                        adjusting your browser settings by visiting{" "}
                        <a
                          href="https://www.allaboutcookies.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8cc63f] hover:underline"
                        >
                          www.allaboutcookies.org
                        </a>
                        .
                      </p>

                      <div>Accepting or rejecting cookies</div>
                      <p>
                        <strong>Cookie control tool:</strong> You can accept or
                        reject non-essential cookies by using our cookie
                        management tool.
                      </p>
                      <p>
                        <strong>Browser settings:</strong> You can accept or
                        reject some or all cookies (for example, blocking all
                        third-party cookies) by adjusting your browser settings.
                        If you do not know how to do this, the links below set
                        out information about how to change your browser
                        settings for some of the most commonly used web
                        browsers:
                      </p>
                      <ul>
                        <li>
                          Google Chrome:{" "}
                          <a
                            href="https://support.google.com/chrome/answer/95647?hl=en-GB"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8cc63f] hover:underline"
                          >
                            https://support.google.com/chrome/answer/95647?hl=en-GB
                          </a>
                        </li>
                        <li>
                          Mozilla Firefox:{" "}
                          <a
                            href="https://support.mozilla.org/en-US/kb/delete-browsing-search-download-history-firefox"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8cc63f] hover:underline"
                          >
                            https://support.mozilla.org/en-US/kb/delete-browsing-search-download-history-firefox
                          </a>
                        </li>
                        <li>
                          Microsoft Internet Explorer:{" "}
                          <a
                            href="https://support.microsoft.com/en-us/help/278835/how-to-delete-cookie-files-in-internet-explorer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8cc63f] hover:underline"
                          >
                            https://support.microsoft.com/en-us/help/278835/how-to-delete-cookie-files-in-internet-explorer
                          </a>
                        </li>
                        <li>
                          Apple Safari:{" "}
                          <a
                            href="https://support.apple.com/kb/PH5042?locale=en_US"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8cc63f] hover:underline"
                          >
                            https://support.apple.com/kb/PH5042?locale=en_US
                          </a>
                        </li>
                      </ul>
                      <p>
                        Some browsers, such as Chrome and Firefox, allow you to
                        change your settings to browse in ‘incognito’ mode,
                        limiting the amount of data placed on your machine and
                        automatically deleting any persistent cookies placed on
                        your device when you finish your browsing session. There
                        are also many third-party applications which you can add
                        to your browser to block or manage cookies.
                      </p>

                      <div>Existing cookies</div>
                      <p>
                        To clear cookies that have previously been placed on
                        your browser, you should select the option to clear your
                        browsing history and ensure that the option to delete or
                        clear cookies is included when you do so.
                      </p>

                      <div>Google Ad settings</div>
                      <p>
                        You can manage and opt out of personalization of
                        advertisements by Google by visiting Google’s ad
                        settings page{" "}
                        <a
                          href="https://adssettings.google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8cc63f] hover:underline"
                        >
                          here
                        </a>{" "}
                        and by:
                      </p>
                      <ul>
                        <li>
                          unticking the button entitled ‘Also use Google Account
                          activity and information to personalize ads on these
                          websites and apps and store that data in your Google
                          Account’; and
                        </li>
                        <li>
                          switching the ‘Ads Personalisation’ setting off (i.e.,
                          by ensuring the switch at the top of the page is set
                          to the left/grey and not the right/blue).
                        </li>
                      </ul>
                      <p>
                        Alternatively, you can install a free browser plugin{" "}
                        <a
                          href="https://support.google.com/ads/answer/7395996"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8cc63f] hover:underline"
                        >
                          here
                        </a>
                        .
                      </p>

                      <div>Google Analytics Opt-out Browser Add-on</div>
                      <p>
                        You can opt out of Google Analytics tracking by
                        installing the browser add-on which is available{" "}
                        <a
                          href="http://tools.google.com/dlpage/gaoptout"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8cc63f] hover:underline"
                        >
                          here
                        </a>
                        .
                      </p>
                    </div>
                  </div>

                  {/* Section 6 - Copyright, credit and logo */}
                  <div id="section-6" className="scroll-mt-20">
                    <div className="text-xl font-bold mb-3 flex items-center gap-2">
                      <HiOutlineDocumentText className="text-[#8cc63f]" />{" "}
                      Copyright, credit and logo
                    </div>
                    <div className="prose prose-sm max-w-none dark:prose-invert ml-6">
                      <p>
                        This Cookies Policy is based on a template provided by
                        GDPR Privacy Policy. For further information, please
                        visit{" "}
                        <a
                          href="https://gdprprivacypolicy.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8cc63f] hover:underline"
                        >
                          https://gdprprivacypolicy.org
                        </a>
                        .
                      </p>
                      <p>
                        And Data Protection Act, 2019 (of the Republic of
                        Kenya), please visit:{" "}
                        <a
                          href="https://www.odpc.go.ke/download/kenya-gazette-data-protection-act-2019/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8cc63f] hover:underline"
                        >
                          https://www.odpc.go.ke/download/kenya-gazette-data-protection-act-2019/
                        </a>
                      </p>
                      <p>
                        The copyright in this Cookies Policy is either owned by,
                        or licensed to, us and is protected by copyright laws
                        around the world and copyright protection software. All
                        intellectual property rights in this document are
                        reserved. Where we display the GDPR Privacy Policy logo
                        on our website, this is used to indicate that we have
                        adopted a privacy policy template provided by GDPR
                        Privacy Policy as the basis for this Privacy Policy.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer note */}
                <div
                  className={`mt-8 pt-6 text-sm border-t ${isDark ? "border-gray-700" : "border-gray-200"}`}
                >
                  <p className={isDark ? "text-gray-400" : "text-gray-500"}>
                    By continuing to use our website, you consent to our use of
                    cookies as described in this Cookies Policy.
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
                      Have questions about our cookie usage?
                    </div>
                    <p
                      className={`mb-6 ${isDark ? "text-gray-300" : "text-slate-600"}`}
                    >
                      If you need more information about how we use cookies, our
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

export default CookiePolicy;
