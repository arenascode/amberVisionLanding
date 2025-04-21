import React, { useState } from "react";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/ui/Footer";
import NavBarMobile from "@/components/navBar/navBarMobile";

interface MainLayoutProps { 
  children: React.ReactNode;
  isMobile: boolean;
}

const MainLayout:React.FC<MainLayoutProps> = ({ children, isMobile }) => {

  const [isNavBarMenuOpen, setIsNavBarMenuOpen] = useState<boolean>(false);
  
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar
        isNavBarMenuOpen={isNavBarMenuOpen}
        setIsNavBarMenuOpen={setIsNavBarMenuOpen}
        isMobile={isMobile}
      />
      <main className="flex-grow">{children}</main>
      {/*NavBar Mobile*/}
      {isMobile && isNavBarMenuOpen && (
        <NavBarMobile onClose={() => setIsNavBarMenuOpen(false)} />
      )}
      <Footer />
    </div>
  );
};

export default MainLayout;
