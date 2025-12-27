import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Feedback from '@/models/feedback';

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    try {
        await connectToDatabase();
        const deletedFeedback = await Feedback.findByIdAndDelete(id);

        if (!deletedFeedback) {
            return NextResponse.json({ error: 'Feedback not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Feedback deleted successfully' });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to delete feedback' },
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
        // Allow updating visibility or other fields
        const updatedFeedback = await Feedback.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        if (!updatedFeedback) {
            return NextResponse.json({ error: 'Feedback not found' }, { status: 404 });
        }

        return NextResponse.json(updatedFeedback);
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to update feedback' },
            { status: 400 }
        );
    }
}
