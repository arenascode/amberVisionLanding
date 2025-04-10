import { useEffect } from "react";
import HamburgerButton from "../ui/hamburguerBtn";

interface NavBarProps {
  isNavBarMenuOpen: boolean;
  setIsNavBarMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean
}

const NavBar: React.FC<NavBarProps> = ({
  isNavBarMenuOpen,
  setIsNavBarMenuOpen
}) => {
  console.log({ isNavBarMenuOpen });
  console.log({ setIsNavBarMenuOpen });

  useEffect(() => {
    console.log("isNavBarMenuOpen changed:", isNavBarMenuOpen);
  }, [isNavBarMenuOpen]);

  return (
    <header className="fixed z-50 w-full bg-nav-footer text-white backdrop-blur supports-[backdrop-filter] lg:px-5">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-2xl tracking-widest font-title uppercase p-2 ml-1">
          <a href="/" className="flex items-center gap-1">
            <span className="bg-gradient-to-r from-gray-100 via-gray-500 to-gray-100 bg-clip-text text-transparent">
              Amber
            </span>

            <span className="bg-gradient-to-r from-gray-100 via-gray-500 to-gray-100 bg-clip-text text-transparent">
              Vision
            </span>
            <img
              src="./assets/logo_AV.webp"
              alt="Brand Logo"
              width={60}
              style={{ marginLeft: "-0.7rem" }}
              className="lg:ml-1"
            />
          </a>
        </div>
        <nav className="hidden md:flex gap-6 xl:gap-10">
          <a
            href="/#benefits"
            className="text-sm xl:text-lg font-medium hover:text-fire-btn"
          >
            Beneficios
          </a>
          <a
            href="/#features"
            className="text-sm xl:text-lg font-medium hover:text-fire-btn"
          >
            Carácteristicas
          </a>
          <a
            href="/#testimonials"
            className="text-sm xl:text-lg font-medium hover:text-fire-btn"
          >
            Testimonios
          </a>
          <a
            href="/#pricing"
            className="text-sm xl:text-lg font-medium hover:text-fire-btn"
          >
            Oferta
          </a>
          <a
            href="/#faq"
            className="text-sm xl:text-lg font-medium hover:text-fire-btn"
          >
            FAQ
          </a>
          <a
            href="/contacto"
            className="text-sm xl:text-lg font-medium hover:text-fire-btn"
          >
            Contacto
          </a>
        </nav>
        <div className="lg:hidden">
          <HamburgerButton
            setIsNavBarMenuOpen={setIsNavBarMenuOpen}
            isOpen={isNavBarMenuOpen}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
