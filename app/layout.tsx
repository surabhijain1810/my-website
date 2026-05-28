import type { Metadata } from "next";
import "./globals.css";

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
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
