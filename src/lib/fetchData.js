import { client } from "./sanityClient";

export const fetchData = async (type, limit=100) => {
  return client.fetch(`*[_type == "${type}"] | order(_createdAt desc)[0...${limit}]`);
};

