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
        
        // Validate that either email or phone is provided
        if (!body.email && !body.phone) {
            return NextResponse.json(
                { error: 'Either email or phone is required' },
                { status: 400 }
            );
        }
        
        await connectToDatabase();
        
        // Create booking without any hooks
        const booking = new Booking({
            name: body.name,
            email: body.email,
            phone: body.phone,
            service: body.service,
            message: body.message,
            status: body.status || 'requested',
        });
        
        await booking.save();
        
        return NextResponse.json(booking, { status: 201 });
    } catch (error: any) {
        console.error('Booking creation error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to create booking' },
            { status: 400 }
        );
    }
}
