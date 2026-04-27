import { useEffect } from "react";

import { getWebappUrl } from "../../utils/webappRoutes";

function AuthRedirect({ mode }) {
  const destination = getWebappUrl(mode);

  useEffect(() => {
    window.location.replace(destination);
  }, [destination]);

  return (
    <main className="min-h-screen grid place-items-center bg-slate-950 px-6 text-center text-white">
      <div className="max-w-md space-y-4">
        <p className="text-sm uppercase tracking-[0.28em] text-[#8cc63f]">
          Redirecting
        </p>
        <h1 className="text-3xl font-semibold">
          Taking you to the AYEDOS member app
        </h1>
        <p className="text-sm leading-6 text-white/70">
          If the redirect does not happen automatically, continue below.
        </p>
        <a
          href={destination}
          className="inline-flex items-center justify-center rounded-full bg-[#8cc63f] px-6 py-3 font-semibold text-slate-950 transition hover:bg-[#9fd858]"
        >
          Continue
        </a>
      </div>
    </main>
  );
}

export default AuthRedirect;
