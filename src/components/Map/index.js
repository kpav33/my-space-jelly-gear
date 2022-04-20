import dynamic from "next/dynamic";

// Leaflet relies on the window to work and they don't check if the window exists, before the code runs
// This is an issue in Next.js, because it runs on Node sometimes, where window is not accessible
// To fix this we use Next.js dynamic imports
// By passing ssr: false to the options object, we make sure that Next.js doesn't try to render it inside of Node, which will fix the window is not defined error
const Map = dynamic(() => import("./Map"), { ssr: false });

export default Map;
