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

// Custom validation to ensure either email or phone is provided
BookingSchema.pre('validate', function (next: mongoose.CallbackError | any) {
    if (!this.email && !this.phone) {
        next(new Error('Either email or phone is required'));
    } else {
        next();
    }
});

// Prevent model overwrite upon hot reload
const Booking: Model<IBooking> =
    mongoose.models.Booking || mongoose.model<IBooking>('Booking', BookingSchema);

export default Booking;
