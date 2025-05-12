import "./globals.css";

export const metadata = {
  title: "Hammerhai",
  icons: {
    icon: "/favicon-32x32.png",
  },
  description: "Official website of Hammerhai",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
