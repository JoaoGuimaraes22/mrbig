import type { Metadata } from "next";
import "../globals.css";
import { getDictionary, hasLocale } from "./dictionaries";
import { notFound } from "next/navigation";
import { i18n } from "@/i18n-config";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;

  if (!hasLocale(lang)) return {};

  const dict = await getDictionary(lang);
  const title = dict.metadata.title;
  const description = dict.metadata.description;
  const url = `${SITE_URL}/${lang}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: dict.metadata.keywords,
    openGraph: {
      title,
      description,
      url,
      siteName: dict.navbar.brand,
      locale: (lang as string) === "pt" ? "pt_PT" : "en_GB",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: url,
      languages: Object.fromEntries(i18n.locales.map((l) => [l, `${SITE_URL}/${l}`])),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    name: dict.navbar.brand,
    description: dict.metadata.description,
    url: `${SITE_URL}/${lang}`,
    telephone: dict.contact.phone,
    email: dict.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: dict.contact.address,
      addressCountry: "PT",
    },
  };

  return (
    <html lang={lang} className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
