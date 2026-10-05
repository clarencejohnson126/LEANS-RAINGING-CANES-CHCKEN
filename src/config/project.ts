export const project = {
  duration: "4 Wochen",
  area: "30–50 m²",
  location: "FRANKLIN, Mannheim",
  contact: {
    name: "Clarence Johnson",
    email: "clarencejohnson@hotmail.de",
    phone: "+49 162 18 111 23",
  },
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000"),
};
