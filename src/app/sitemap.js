// app/sitemap.js

const publicRoutes = [
  "/",
];

export default function sitemap() {
  const baseUrl = "https://canska.com";

  return publicRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.5,
  }));
}