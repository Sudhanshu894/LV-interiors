import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IFeedback extends Document {
    name: string;
    title?: string;
    service?: string;
    email?: string; // Optional for testimonials
    message: string;
    rating?: number; // 1-5
    visibility: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const FeedbackSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        title: { type: String },
        service: { type: String },
        email: { type: String },
        message: { type: String, required: true },
        rating: { type: Number, min: 1, max: 5 },
        visibility: { type: Boolean, default: false },
    },
    { timestamps: true }
);

const Feedback: Model<IFeedback> =
    mongoose.models.Feedback || mongoose.model<IFeedback>('Feedback', FeedbackSchema);

export default Feedback;
