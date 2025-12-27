import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IQuery extends Document {
    name: string;
    email?: string;
    phone?: string;
    message: string;
    status: 'requested' | 'approved' | 'due-diligence' | 'rejected' | 'completed';
    createdAt: Date;
    updatedAt: Date;
}

const QuerySchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String },
        phone: { type: String },
        message: { type: String, required: true },
        status: {
            type: String,
            enum: ['requested', 'approved', 'due-diligence', 'rejected', 'completed'],
            default: 'requested',
        },
    },
    { timestamps: true }
);

// Custom validation to ensure either email or phone is provided
QuerySchema.pre('validate', function (next: mongoose.CallbackError | any) {
    if (!this.email && !this.phone) {
        next(new Error('Either email or phone is required'));
    } else {
        next();
    }
});

const Query: Model<IQuery> =
    mongoose.models.Query || mongoose.model<IQuery>('Query', QuerySchema);

export default Query;
