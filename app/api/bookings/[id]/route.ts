import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Booking from '@/models/booking';

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> } // In Next.js 15+ params is a promise
) {
    const { id } = await params;
    try {
        await connectToDatabase();
        const deletedBooking = await Booking.findByIdAndDelete(id);

        if (!deletedBooking) {
            return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Booking deleted successfully' });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to delete booking' },
            { status: 500 }
        );
    }
}

export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    try {
        const body = await request.json();
        await connectToDatabase();
        const updatedBooking = await Booking.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        if (!updatedBooking) {
            return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
        }

        return NextResponse.json(updatedBooking);
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to update booking' },
            { status: 400 }
        );
    }
}
