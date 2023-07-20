import { NextResponse } from "next/server";

let counter = 1;

export async function GET() {
    return NextResponse.json({counter}); 
}

export async function POST(request: Request) {
    const { amount } = await request.json();

    if(amount) {
        counter += Number(amount);
    }
    return NextResponse.json({counter})
}