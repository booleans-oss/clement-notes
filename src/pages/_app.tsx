import { type AppType } from "next/app";
import { useEffect } from "react";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import "katex/dist/katex.min.css";

const url = "https://www.clement.best";

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const a = document.createElement("a");
      if (!a.click) {
        //for IE
        window.location.href = url;
        return;
      }
      a.setAttribute("href", url);
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
    }
  }, []);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default api.withTRPC(MyApp);
