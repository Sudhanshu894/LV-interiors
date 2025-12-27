import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Booking from '@/models/booking';

export async function GET() {
    try {
        await connectToDatabase();
        const bookings = await Booking.find({}).sort({ createdAt: -1 });
        return NextResponse.json(bookings);
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch bookings' },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        await connectToDatabase();
        const booking = await Booking.create(body);
        return NextResponse.json(booking, { status: 201 });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || 'Failed to create booking' },
            { status: 400 }
        );
    }
}
