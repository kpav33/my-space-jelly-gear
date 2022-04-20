// Use cloudinary to optimize images and make them more performant

import { Cloudinary } from "@cloudinary/url-gen";

// Create your Cloudinary instance
const cld = new Cloudinary({
  cloud: {
    cloudName: "dbitciwnt",
  },
  url: {
    secure: true, // force https, set to false to force http
  },
});

// Automatically set best image quality and format for the browser
export function buildImage(src) {
  return cld.image(src).quality("auto").format("auto");
}
