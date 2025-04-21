

interface HamburguerButtonProps {
  setIsNavBarMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
}

const HamburgerButton:React.FC<HamburguerButtonProps> = ({setIsNavBarMenuOpen, isOpen}) =>{

  return (
    <button
      onClick={() => setIsNavBarMenuOpen((prev) => !prev)}
      className="p-2 focus:outline-none transition-all duration-300 ease-in-out cursor-pointer"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="amberGradient" x1="0" y1="0" x2="100%" y2="0">
            <stop offset="0%" stopColor="#f3f4f6" /> {/* amber-500 */}
            <stop offset="50%" stopColor="#6a7282" /> {/* orange-500 */}
            <stop offset="100%" stopColor="#f3f4f6" /> {/* red-600 */}
          </linearGradient>
        </defs>

        <rect
          x={isOpen ? "4.5" : "4"}
          y={isOpen ? "6" : "6"}
          width="16"
          height={isOpen ? "3.5" : "2.5"}
          rx="1.25"
          fill="url(#amberGradient)"
          className={`origin-center transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-1" : ""
          }`}
        />
        <rect
          x="4"
          y="11"
          width="16"
          height="2.5"
          rx="1.25"
          fill="url(#amberGradient)"
          className={`origin-center transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <rect
          x={isOpen ? "3" : "4"}
          y={isOpen ? "16.5" : "16"}
          width="16"
          height={isOpen ? "3.5" : "2.5"}
          rx="1.25"
          fill="url(#amberGradient)"
          className={`origin-center transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-1" : ""
          }`}
        />
      </svg>
    </button>
  );
}

export default HamburgerButton