import "./globals.css";
import AmplitudeInit from "./amplitude-init";

export const metadata = {
  title: "Whatever",
  description: "Hello world app built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AmplitudeInit />
        {children}
      </body>
    </html>
  );
}
