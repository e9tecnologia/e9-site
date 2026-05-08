import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://e9.com.br";
  const now = new Date();

  return [
    { url: base,             lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/gestao`,    lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/raiz`,      lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/2follow`,   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/cases`,     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/parceiros`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`,      lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${base}/contato`,lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
  ];
}
