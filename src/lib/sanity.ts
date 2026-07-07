import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID,
  dataset: import.meta.env.SANITY_DATASET,
  useCdn: true,
  apiVersion: "2024-01-01",
});
