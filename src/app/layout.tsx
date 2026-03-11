import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sax-us.com"),
  title: {
    default: "SAX Group — U.S. Business Platform for Latin American Companies",
    template: "%s | SAX Group",
  },
  description:
    "SAX Group helps Latin American companies establish and grow their operations in the United States through entity formation, banking coordination, legal and accounting support, and operational setup.",
  openGraph: {
    siteName: "SAX Group",
    type: "website",
    locale: "en_US",
    title: "SAX Group — U.S. Business Platform for Latin American Companies",
    description:
      "SAX Group helps Latin American companies establish and grow their operations in the United States through entity formation, banking coordination, legal and accounting support, and operational setup.",
    url: "https://www.sax-us.com",
    images: [{ url: "/og/sax-og-image.png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
