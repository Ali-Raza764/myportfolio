import { client } from "./sanityClient";
import imageUrlBuilder from "@sanity/image-url";

// Initialize the builder
const builder = imageUrlBuilder(client);

// Function to generate image URLs
export function urlFor(source) {
  return builder.image(source);
}
