
// Define the structure of objects you expect to push to dataLayer
// For your use case, 'event' is key. You can add other common properties.
interface DataLayerObject {
  event: string;
  [key: string]: any; // Allows for any other additional properties
}

declare global {
  interface Window {
    dataLayer: DataLayerObject[];
  }
}

// If this file doesn't import/export anything,
// you might need to add an empty export {} to make it a module,
// though for global augmentations, it's often not needed.
// Check if your tsconfig.json processes .d.ts files correctly.
export {}; // Uncomment if necessary
