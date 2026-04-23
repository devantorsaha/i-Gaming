import "./globals.css";

export const metadata = {
  title: "i-Gaming - The Future of Gaming",
  description: "Experience next-level entertainment with i-Gaming platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}