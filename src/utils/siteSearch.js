const SEARCH_INDEX = [
  {
    route: "",
    label: "Home",
    terms: [
      "home",
      "landing",
      "main",
      "start",
      "ayedos sacco",
      "financial system",
      "member administration",
      "why choose ayedos",
      "our services",
      "financial growth",
      "community trust",
      "flexible solutions",
      "product design snapshot",
      "take control of your money",
      "member benefits",
      "become a member today",
    ],
  },
  {
    route: "our-story",
    label: "Our Story",
    terms: [
      "our story",
      "story",
      "about",
      "history",
      "company",
      "what makes us different",
      "our journey",
      "timeline of growth and innovation",
      "our values",
      "join our growing community",
    ],
  },
  {
    route: "our-ideology",
    label: "Our Ideology",
    terms: [
      "our ideology",
      "ideology",
      "vision",
      "mission",
      "values",
      "philosophy",
      "about our philosophy",
      "our core ideology",
      "passion",
      "teamwork",
      "integrity",
      "innovation",
    ],
  },
  {
    route: "products",
    label: "Products",
    terms: [
      "products",
      "product",
      "loans",
      "loan",
      "forms",
      "membership",
      "complete solutions for modern sacco management",
      "download application forms",
      "membership application form",
      "loan application form",
      "emergency loan",
      "education loan",
      "welfare loan",
      "development loan",
    ],
  },
  {
    route: "faq",
    label: "FAQ",
    terms: [
      "faq",
      "faqs",
      "questions",
      "help",
      "support questions",
      "frequently asked questions",
      "find answers to common questions",
      "account login",
      "transactions",
      "dividends and shares",
      "loans",
    ],
  },
  {
    route: "guides",
    label: "Guides",
    terms: [
      "guides",
      "guide",
      "tutorials",
      "docs",
      "documentation",
      "resources",
      "step by step guides",
      "getting started guide",
      "member portal tutorial",
      "understanding your statement",
      "loan application process",
      "need more help",
    ],
  },
  {
    route: "blog",
    label: "Blog",
    terms: [
      "blog",
      "news",
      "articles",
      "article",
      "insights",
      "insights and updates from the ayedos team",
      "stay updated",
      "sacco regulations",
      "member engagement",
      "digital banking",
      "dividends",
      "loan default rates",
      "mobile money integration",
    ],
  },
  {
    route: "contact",
    label: "Contact",
    terms: [
      "contact",
      "contact us",
      "reach us",
      "email",
      "phone",
      "support",
      "get in touch with our team",
      "we're here to help",
      "send us a message",
      "contact information",
      "quick response guarantee",
      "need immediate assistance",
    ],
  },
  {
    route: "login",
    label: "Login",
    terms: ["login", "log in", "sign in", "member portal"],
  },
  {
    route: "register",
    label: "Register",
    terms: ["register", "sign up", "signup", "join", "get started"],
  },
];

const normalize = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ");

export function findSearchMatch(query) {
  const normalizedQuery = normalize(query);

  if (!normalizedQuery) {
    return null;
  }

  for (const entry of SEARCH_INDEX) {
    const matchedTerm = entry.terms.find((term) => {
      const normalizedTerm = normalize(term);
      return (
        normalizedQuery === normalizedTerm ||
        normalizedQuery.includes(normalizedTerm) ||
        normalizedTerm.includes(normalizedQuery)
      );
    });

    if (matchedTerm) {
      return entry;
    }
  }

  return null;
}

export function runSiteSearch(query, onNavigate) {
  const match = findSearchMatch(query);

  if (!match) {
    return {
      matched: false,
      message:
        "No matching page found. Try Home, Our Story, Products, FAQ, Guides, Blog, Contact, Login, or Register.",
    };
  }

  if (onNavigate) {
    onNavigate(match.route);
  } else {
    window.location.href = match.route ? `/${match.route}` : "/";
  }

  return {
    matched: true,
    match,
  };
}
