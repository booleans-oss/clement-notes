/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { type DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: "%s",
    };
  },
  logo: <span>Clement&apos;s notes</span>,
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();

    const title = frontMatter.subject
      ? `${frontMatter.subject} - ${frontMatter.title}`
      : frontMatter.title;

    return (
      <>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <title>{title}</title>
        <meta
          property="og:url"
          content={`https://clement-notes.vercel.com${asPath}`}
        />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={frontMatter.description || "My school notes"}
        />
        <meta name="title" content={title} />
        <meta
          name="description"
          content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://clement-notes.vercel.com${asPath}`}
        />

        <meta
          property="twitter:url"
          content={`https://clement-notes.vercel.com${asPath}`}
        />
        <meta property="twitter:title" content={title} />
        <meta
          property="twitter:description"
          content={frontMatter.description || "My school notes"}
        />
      </>
    );
  },
  docsRepositoryBase: "https://github.com/booleans-oss/new-notes",
  footer: {
    text: "These are my notes.",
  },
  feedback: {
    content: "",
  },
  search: {
    placeholder: "Search in my notes...",
  },
  editLink: {
    text: "Edit the page",
    component: ({ filePath, ...props }) => (
      <a
        {...props}
        href={`
        https://github.com/booleans-oss/new-notes/blob/main/${filePath}`}
        target="_blank"
        rel="noopener noreferrer"
      />
    ),
  },
};

export default config;
