import { useState } from "react";

export function HamburgerButton() {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="p-2 focus:outline-none transition-all duration-300 ease-in-out"
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
          x={open ? "4.5" : "4"}
          y={open ? "6" : "6"}
          width="16"
          height={open ? "3.5" : "2.5"}
          rx="1.25"
          fill="url(#amberGradient)"
          className={`origin-center transition-all duration-300 ${
            open ? "rotate-45 translate-y-1" : ""
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
            open ? "opacity-0" : ""
          }`}
        />
        <rect
          x={open ? "3" : "4"}
          y={open ? "16.5" : "16"}
          width="16"
          height={open ? "3.5" : "2.5"}
          rx="1.25"
          fill="url(#amberGradient)"
          className={`origin-center transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-1" : ""
          }`}
        />
      </svg>
    </button>
  );
}