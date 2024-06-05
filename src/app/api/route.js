import { query } from "@/lib/db";

export async function GET(request) {
    const users = await query({
        // query: "SELECT * FROM flyapp.sales",
        query: "SELECT * FROM flyapp.sales",
        values: [],
    });

    let data = JSON.stringify(users);
    return new Response(data, {
        status: 200,
    });
}

