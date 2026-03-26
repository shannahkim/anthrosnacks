import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AnthroSnacks | 앤트로스낵 - 프리미엄 스낵 브랜드",
  description: "AnthroSnacks(앤트로스낵)는 건강하고 맛있는 프리미엄 스낵을 제공합니다. 자연 재료로 만든 특별한 간식을 경험하세요.",
  keywords: [
    "anthrosnacks",
    "앤트로스낵",
    "스낵",
    "간식",
    "프리미엄 스낵",
    "건강 간식",
    "snacks",
    "healthy snacks",
    "premium snacks"
  ],
  authors: [{ name: "AnthroSnacks" }],
  creator: "AnthroSnacks",
  publisher: "AnthroSnacks",
  metadataBase: new URL("https://anthrosnacks.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AnthroSnacks | 앤트로스낵 - 프리미엄 스낵 브랜드",
    description: "AnthroSnacks(앤트로스낵)는 건강하고 맛있는 프리미엄 스낵을 제공합니다.",
    url: "https://anthrosnacks.com",
    siteName: "AnthroSnacks",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AnthroSnacks - 앤트로스낵",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AnthroSnacks | 앤트로스낵",
    description: "건강하고 맛있는 프리미엄 스낵",
    images: ["/og-image.png"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AnthroSnacks",
              "alternateName": "앤트로스낵",
              "url": "https://anthrosnacks.com",
              "logo": "https://anthrosnacks.com/logo.png",
              "description": "프리미엄 스낵 브랜드",
              "sameAs": [],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
