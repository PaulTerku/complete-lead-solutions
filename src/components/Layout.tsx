import { ReactNode, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

/**
 * Main layout component that wraps all pages
 * Provides consistent header, footer, and cart state
 */
const Layout = ({ children }: LayoutProps) => {
  // Cart state - would typically be in context for real app
  const [cartCount] = useState(0);

  return (
    <div className="flex min-h-screen flex-col">
      <Header cartCount={cartCount} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
