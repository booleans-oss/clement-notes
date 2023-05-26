import { type AppType } from "next/app";
import { Analytics } from "@vercel/analytics/react";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import 'katex/dist/katex.min.css'
// import { ClerkProvider } from "@clerk/nextjs";

import logRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

const MyApp: AppType = ({ Component, pageProps }) => {
  if (typeof window !== 'undefined') {
    logRocket.init('xgugta/clement-notes');
    setupLogRocketReact(logRocket);
  }
  return (
    <>
    {/* <ClerkProvider> */ }
      <Component {...pageProps} />
      <Analytics />
    {/* </ClerkProvider> */}
    </>
  );
};

export default api.withTRPC(MyApp);
