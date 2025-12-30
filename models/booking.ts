import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBooking extends Document {
    name: string;
    email?: string;
    phone?: string;
    service: string;
    message?: string;
    status: 'requested' | 'approved' | 'due-diligence' | 'rejected' | 'completed';
    createdAt: Date;
    updatedAt: Date;
}

const BookingSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String },
        phone: { type: String },
        service: { type: String, required: true },
        message: { type: String },
        status: {
            type: String,
            enum: ['requested', 'approved', 'due-diligence', 'rejected', 'completed'],
            default: 'requested',
        },
    },
    { timestamps: true }
);

// Prevent model overwrite upon hot reload
// Delete the model if it exists to force recompilation (helps with hot reload issues)
if (mongoose.models.Booking) {
    delete mongoose.models.Booking;
}

const Booking: Model<IBooking> = mongoose.model<IBooking>('Booking', BookingSchema);

export default Booking;
