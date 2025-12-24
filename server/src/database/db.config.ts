import mongoose from 'mongoose';

export const DbConnect = async() => {
    await mongoose.connect(process.env.MONGODB_URL!);
    console.log("Database connected successfully");
    
}