import createFetchClient from "openapi-fetch";
import createClient from "openapi-react-query";
import type { paths } from "./generated";
import { CONFIG } from "@/lib/config.constants";

export const publicFetch = createFetchClient<paths>({
  baseUrl: CONFIG.API_BASE_URL,
});

export const publicClient = createClient(publicFetch);
