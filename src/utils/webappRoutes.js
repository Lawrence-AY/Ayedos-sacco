const DEFAULT_WEBAPP_URL = "http://localhost:3000";

const AUTH_ROUTE_MAP = {
  login: "/login",
  register: "/apply",
};

function normalizeRoute(route = "") {
  return String(route).trim().replace(/^\/+/, "");
}

function normalizeBaseUrl(value) {
  return (value || DEFAULT_WEBAPP_URL).trim().replace(/\/$/, "");
}

export function getWebappBaseUrl() {
  return normalizeBaseUrl(import.meta.env.VITE_WEBAPP_URL);
}

export function getWebappUrl(route) {
  const normalizedRoute = normalizeRoute(route);
  const pathname = AUTH_ROUTE_MAP[normalizedRoute];

  if (!pathname) {
    throw new Error(`Unsupported webapp route: ${route}`);
  }

  return `${getWebappBaseUrl()}${pathname}`;
}

export function getSiteDestination(route = "") {
  if (/^https?:\/\//i.test(route)) {
    return route;
  }

  const normalizedRoute = normalizeRoute(route);

  if (!normalizedRoute) {
    return "/";
  }

  if (AUTH_ROUTE_MAP[normalizedRoute]) {
    return getWebappUrl(normalizedRoute);
  }

  return `/${normalizedRoute}`;
}

export function navigateToRoute(route = "") {
  window.location.href = getSiteDestination(route);
}
