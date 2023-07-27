import { Db } from "mongodb";
import { NextResponse, NextRequest } from "next/server"

import { connectToDatabase } from "@/app/services/database";
import SendMessagePayload from "@/app/interfaces/SendMessagePayload";



let db: Db

export async function POST(request: NextRequest) {
    
    const request_data = await request.json()
    
    db = await connectToDatabase(db)
    const collection = db.collection('elegantech')

    collection.insertOne(
        {
            destination: request_data.destination,
            message: request_data.message,
            sender: request_data.sender,
            posted: false
        }
    )

    return NextResponse.json({}, { status: 201 })
}