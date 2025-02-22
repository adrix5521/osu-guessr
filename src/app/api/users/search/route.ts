import { NextResponse } from "next/server";
import { searchUsersAction } from "@/actions/user-server";
import { z } from "zod";
import { validateApiKey } from "@/actions/api-keys-server";

const querySchema = z.object({
    query: z.string().min(2).max(250),
    limit: z.coerce.number().min(1).max(100).default(20),
});

export async function GET(request: Request) {
    const headers = new Headers(request.headers);
    const apiKey = headers.get("X-API-Key");

    try {
        await validateApiKey(apiKey);
    } catch {
        return NextResponse.json({ success: false, error: "Invalid API key" }, { status: 403 });
    }

    try {
        const { searchParams } = new URL(request.url);
        const validated = querySchema.parse({
            query: searchParams.get("query") || "",
            limit: Number(searchParams.get("limit")),
        });

        const users = await searchUsersAction(validated.query, validated.limit);

        return NextResponse.json({
            success: true,
            data: users,
        });
    } catch (error) {
        console.error("User search error:", error);
        return NextResponse.json({ success: false, error: "Failed to search users" }, { status: 500 });
    }
}
