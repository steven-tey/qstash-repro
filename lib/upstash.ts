import { Redis } from "@upstash/redis";
import { Client } from "@upstash/qstash";

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || "",
  token: process.env.UPSTASH_REDIS_REST_TOKEN || "",
});

export const qstash = new Client({
  token: process.env.QSTASH_TOKEN || "",
});
