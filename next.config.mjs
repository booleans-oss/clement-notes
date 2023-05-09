const withNextra = (await import("nextra")).default({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
})

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ["api.dicebear.com"],
  }
};
export default withNextra(config);
