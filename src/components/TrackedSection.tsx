// src/components/TrackedSection.tsx
import { log } from "console";
import React, { useEffect, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

// Define the props for the TrackedSection component
interface TrackedSectionProps {
  children: ReactNode; // Type for React children
  eventName: string;
  threshold?: number; // Optional prop
  triggerOnce?: boolean; // Optional prop
}

// Initialize dataLayer if it doesn't exist.
// Even with the .d.ts file, this runtime check is good practice
// especially if GTM might load asynchronously.
if (typeof window.dataLayer === "undefined") {
  window.dataLayer = [];
}

const TrackedSection: React.FC<TrackedSectionProps> = ({
  children,
  eventName,
  threshold = 0.8, // Default value for threshold
  triggerOnce = true, // Default value for triggerOnce
}) => {
  const { ref, inView } = useInView({
    threshold: threshold,
    triggerOnce: triggerOnce,
  });

  useEffect(() => {
    if (inView) {
      console.log(
        `TrackedSection: ${eventName} is visible. Pushing to dataLayer.`
      );
      // Now window.dataLayer.push is type-safe
      window.dataLayer.push({
        event: eventName,
        // You can add more properties here if needed,
        // and they will be checked against DataLayerObject if you defined it strictly
        // e.g., sectionIdentifier: eventName, // if 'sectionIdentifier' is part of your DataLayerObject
      });
    }
  }, [inView, eventName]); // Dependencies for the useEffect hook
 console.log(window.dataLayer);
 
  return <div ref={ref}>{children}</div>;
};

export default TrackedSection;
