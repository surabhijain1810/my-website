import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Surabhi Jain — Data & ML Engineer",
  description:
    "Senior BI Engineer at Amazon building scalable analytics systems, LLM evaluation frameworks, and ML-powered decision tools. Based in Toronto.",
  openGraph: {
    title: "Surabhi Jain — Data & ML Engineer",
    description: "Senior BI Engineer at Amazon. 10 years turning data into product impact.",
    url: "https://www.surabhijain.ca",
    siteName: "Surabhi Jain",
    locale: "en_CA",
    images: [
      {
        url: "/web-logo.png", // your logo or preview image
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>

        {/* Google Analytics */}

        <Script

          strategy="afterInteractive"

          src="https://www.googletagmanager.com/gtag/js?id=G-1W3GFVMSD7"

        />

        <Script id="ga4-init" strategy="afterInteractive">

          {`

            window.dataLayer = window.dataLayer || [];

            function gtag(){dataLayer.push(arguments);}

            gtag('js', new Date());

            gtag('config', 'G-1W3GFVMSD7');

          `}

        </Script>

      </head>
      <body>
        <header className="nav">
          <div className="nav-inner">
            <a href="#" className="nav-logo">
              <img src="/logo.svg" alt="Surabhi Jain Logo" className="logo-img" />              
            </a>
            <nav aria-label="Main navigation">
              <ul className="nav-links">
                <li><a href="#impact">Impact</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
