import "./globals.css";
// import { Inter } from "next/font/google";
import localFont from "next/font/local";

// const inter = Inter({ subsets: ["latin"] });
const font = localFont({
  src: [
    {
      path: "../../public/assets/fonts/DarkParadise.otf",
      formats: ["otf"],
      fontWeight: "700",
    },
  ],
});

export const metadata = {
  title: "Iconic Art",
  description:
    "Iconic Art is unequaled in its commitment to investors. It is the first ever firm to offer an unrivaled coverage that protects investors in Blue-chip artwork from any potential depreciation in their shares’ value.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`h-screen body body-mobile ${font.className}`}>
        <div className="parallax-container">{children}</div>
      </body>
    </html>
  );
}
