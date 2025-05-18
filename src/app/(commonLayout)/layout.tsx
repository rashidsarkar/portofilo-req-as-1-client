export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <p>navbar</p>
        {children}
        <p>footer</p>
      </body>
    </html>
  );
}
