import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Query from '@/models/query';

export async function GET() {
    try {
        await connectToDatabase();
        const queries = await Query.find({}).sort({ createdAt: -1 });
        return NextResponse.json(queries);
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch queries' },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        await connectToDatabase();
        const query = await Query.create(body);
        return NextResponse.json(query, { status: 201 });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || 'Failed to create query' },
            { status: 400 }
        );
    }
}
