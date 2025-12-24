import mongoose, { Mongoose } from "mongoose";

const tasksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'completed']
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},
    { timestamps: true }
);

export const Tasks = mongoose.model('Tasks', tasksSchema);