

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <>
  <h2>Navbar with new changes inner layout</h2>
        {children}
    
  </>
        
  );
}
