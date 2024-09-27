import { client } from "./sanityClient";

export const fetchData = async (type) => {
  return client.fetch(`*[_type == "${type}"]`);
};
