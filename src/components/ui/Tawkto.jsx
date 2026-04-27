import { useEffect } from "react";

function TawkTo() {
  useEffect(() => {
    const url = import.meta.env.VITE_TAWK_URL;

    if (!url) return;

    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}

export default TawkTo;