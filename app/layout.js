import "./globals.css";

export const metadata = {
  title: "Whatever",
  description: "Hello world app built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
