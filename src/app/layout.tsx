import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1F3A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://caconnect.in"),
  title: {
    default:
      "CAConnect | India's Trusted Platform to Find Verified Chartered Accountants",
    template: "%s | CAConnect",
  },
  description:
    "India's #1 platform to connect with verified Chartered Accountants. GST, Income Tax, Company Registration, Audit, Virtual CFO & more. Get matched in 30 minutes. Free consultation.",
  keywords: [
    "Find Chartered Accountant",
    "CA near me",
    "Online CA services",
    "GST filing online",
    "Income Tax filing",
    "Company Registration India",
    "Virtual CFO services",
    "Startup CA",
    "CA marketplace India",
    "Verified CA platform",
    "Tax consultant online",
    "Business registration",
    "Audit services India",
    "Payroll management",
  ],
  authors: [{ name: "CAConnect", url: "https://caconnect.in" }],
  creator: "CAConnect",
  publisher: "CAConnect",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "CAConnect | Find Verified Chartered Accountants in India",
    description:
      "India's trusted marketplace to connect with verified CAs. GST, Tax, Audit, Registration & more. Get matched in 30 minutes. Free consultation.",
    url: "https://caconnect.in",
    siteName: "CAConnect - India's CA Marketplace",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sharma & Associates - Chartered Accountants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CAConnect | Find Verified Chartered Accountants in India",
    description:
      "Get matched with verified CAs in 30 minutes. Free consultation. Compare quotes. India's trusted CA marketplace.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://caconnect.in",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "CAConnect - India's Trusted CA Marketplace",
  description:
    "Platform connecting individuals and businesses with verified Chartered Accountants across India.",
  url: "https://caconnect.in",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    description: "Free consultation with verified Chartered Accountants",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "5000",
    bestRating: "5",
  },
  sameAs: [
    "https://linkedin.com/company/caconnect",
    "https://twitter.com/caconnect_in",
    "https://facebook.com/caconnect.in",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased bg-background text-text">
        {children}
      </body>
    </html>
  );
}
