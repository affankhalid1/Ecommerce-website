import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET(request: NextRequest) {

    const { searchParams } = new URL(request.url)
    const query = searchParams.get('query')
    
    if(!query)
    {
        return NextResponse.json({message: "Query is required"}, {status: 400})
    }
    try{
        const results = await client.fetch(`*[_type == "products" && title match "*${query}*" || _type == "beds" && title match "*${query}*" ]`)
        return NextResponse.json({results})
    }

    catch(error){
        console.error(error)
        return NextResponse.json({message: "Something went wrong"}, {status: 500})
    }

}