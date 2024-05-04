import { NextResponse } from "next/server";

let teste = 0;

export async function GET(){
    return NextResponse.json({teste : teste});
}

export async function POST(req){

    const data = await req.json();

    return NextResponse.json(data);
}