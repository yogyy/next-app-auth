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
      <body
        style={{
          backgroundColor: "#0c0c0c",
          color: "#f0f0f0",
        }}>
        {children}
      </body>
    </html>
  );
}
