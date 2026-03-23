import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ message: "GET transactions working" })
}

export async function POST(request: Request) {
    const body = await request.json()

    return NextResponse.json({
        message: "POST transaction received",
        data: body
    })
}
