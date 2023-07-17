import { qstash } from "@/lib/upstash";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await qstash.publishJSON({
    url: "https://upstash.com",
    body: {
      hello: "world",
    },
  });
  return NextResponse.json(response);
}
