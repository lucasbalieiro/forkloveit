import { Db, Collection } from "mongodb";
import { NextResponse, NextRequest } from "next/server";

import { connectToDatabase } from "@/app/services/database";
import SendMessagePayload from "@/app/interfaces/SendMessagePayload";

let db: Db;

export async function POST(request: NextRequest) {
  const request_data = await request.json();

  db = await connectToDatabase(db);
  const collection = db.collection('elegantech');

  await collection.insertOne({
    destination: request_data.destination,
    message: request_data.message,
    sender: request_data.sender,
    posted: false,
  });

  return NextResponse.json({}, { status: 201 });
}

export async function GET(request: NextRequest) {
    db = await connectToDatabase(db);
    const collection: Collection<SendMessagePayload> = db.collection('elegantech');
  
    const postsWithPostedFalse = await collection.find({ posted: false }).toArray();
  
    if (postsWithPostedFalse.length > 0) {
      await Promise.all(postsWithPostedFalse.map(post => collection.updateOne({ _id: post._id }, { $set: { posted: true } })));
  
      return NextResponse.json(postsWithPostedFalse, { status: 200 });
    } else {
      const randomPosts = await collection.aggregate([{ $sample: { size: 5 } }]).toArray();
  
      return NextResponse.json(randomPosts, { status: 200 });
    }
  }