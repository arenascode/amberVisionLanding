"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Tag,
  Clock,
  HandCoins,
  Eye,
} from "lucide-react";

type Announcement = {
  id: number;
  icon: React.ReactNode;
  message: string;
  link?: string;
};

const announcements: Announcement[] = [
  {
    id: 1,
    icon: <Tag className="h-5 w-5" />,
    message: "Hasta 25% OFF en tu compra",
    link: "#pricing",
  },
  {
    id: 2,
    icon: <Clock className="h-5 w-5" />,
    message: "Oferta Limitada: Envío Gratis a todo 🇨🇴",
    link: "#pricing",
  },
  {
    id: 3,
    icon: <Eye className="h-5 w-5" />,
    message: "Protege Tus Ojos y Duerme Mejor",
    link: "#benefits",
  },
  {
    id: 4,
    icon: <HandCoins className="h-5 w-5" />,
    message: "Pago Contra Entrega",
    link: "#pricing",
  },
];


export default function AnnouncementCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Auto-rotate announcements
  useEffect(() => {
    resetTimeout();

    timeoutRef.current = setTimeout(() => {
      setDirection("left");
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
        setTimeout(() => {
          setIsAnimating(false);
        }, 50);
      }, 300); // Wait for fade out animation to complete
    }, 5000); // Change announcement every 5 seconds

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const nextAnnouncement = () => {
    resetTimeout();
    setDirection("left");
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 300);
  };

  const prevAnnouncement = () => {
    resetTimeout();
    setDirection("right");
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + announcements.length) % announcements.length
      );
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 300);
  };

  const currentAnnouncement = announcements[currentIndex];

  return (
    <div className="fixed bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-500 hover:to-red-500 text-primary-foreground py-2 overflow-hidden z-10 top-15 xl:top-16 w-full ">
      <div className="container px-4 md:px-6 flex items-center justify-between ">
        <button
          onClick={prevAnnouncement}
          className="absolute left-2 md:left-4 p-1 rounded-full hover:bg-primary-foreground/10 transition-colors z-10"
          aria-label="Previous announcement"
        >
          <ChevronLeft className="h-4 w-4 xl:h-8 xl:w-8" />
        </button>

        <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
          <div
            key={currentAnnouncement.id}
            className={`flex items-center justify-center gap-2 text-sm xl:text-lg font-medium px-8 transition-all duration-300 ease-in-out
              ${
                isAnimating
                  ? direction === "left"
                    ? "opacity-0 transform -translate-x-8"
                    : "opacity-0 transform translate-x-8"
                  : "opacity-100 transform translate-x-0"
              }`}
          >
            {currentAnnouncement.icon}

            {currentAnnouncement.link ? (
              <a
                href={currentAnnouncement.link}
                className="hover:underline transition-all whitespace-nowrap md:whitespace-normal"
              >
                {currentAnnouncement.message}
              </a>
            ) : (
              <span className="whitespace-nowrap md:whitespace-normal">
                {currentAnnouncement.message}
              </span>
            )}
          </div>
        </div>

        <button
          onClick={nextAnnouncement}
          className="absolute right-2 md:right-4 p-1 rounded-full hover:bg-primary-foreground/10 transition-colors z-10"
          aria-label="Next announcement"
        >
          <ChevronRight className="h-4 w-4 xl:h-8 xl:w-8" />
        </button>
      </div>

      {/* Progress indicators */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1 pb-0.5 xl:pb-1">
        {announcements.map((_, index) => (
          <div
            key={index}
            className={`h-0.5 w-5 rounded-full transition-all ${
              index === currentIndex
                ? "bg-primary-foreground"
                : "bg-primary-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}