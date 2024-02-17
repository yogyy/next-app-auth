import "./globals.css";
export const metadata = {
  title: "Next.js Authentication",
  description: "Example using NextAuth.js",
};
interface LayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
