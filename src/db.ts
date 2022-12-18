import mongoose from "mongoose";

const connectToDatabase = async (): Promise<void> => {
  const DATABASE_URI = process.env.DB_CONNECTION_URI || "";
  await mongoose.connect(DATABASE_URI);
};

export { connectToDatabase };
