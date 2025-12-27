import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Feedback from '@/models/feedback';

export async function GET() {
    try {
        await connectToDatabase();
        // Fetch all feedback, sorted by creation date
        const feedbacks = await Feedback.find({}).sort({ createdAt: -1 });
        return NextResponse.json(feedbacks);
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch feedback' },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        await connectToDatabase();
        const feedback = await Feedback.create(body);
        return NextResponse.json(feedback, { status: 201 });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || 'Failed to submit feedback' },
            { status: 400 }
        );
    }
}
