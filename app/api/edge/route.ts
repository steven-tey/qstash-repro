import { redis } from "@/lib/upstash";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  const response = await redis.get("hello");
  return NextResponse.json(response);
}
