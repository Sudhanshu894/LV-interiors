import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Query from '@/models/query';

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    try {
        await connectToDatabase();
        const deletedQuery = await Query.findByIdAndDelete(id);

        if (!deletedQuery) {
            return NextResponse.json({ error: 'Query not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Query deleted successfully' });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to delete query' },
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
        const updatedQuery = await Query.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });

        if (!updatedQuery) {
            return NextResponse.json({ error: 'Query not found' }, { status: 404 });
        }

        return NextResponse.json(updatedQuery);
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to update query' },
            { status: 400 }
        );
    }
}
