import { type AppType } from "next/app";
import { Analytics } from "@vercel/analytics/react";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import "@/styles/calendar.css";
import "katex/dist/katex.min.css";
import { ClerkProvider } from "@clerk/nextjs";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default api.withTRPC(MyApp);
