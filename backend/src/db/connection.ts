
import { connect, disconnect } from "mongoose";

async function connectToDatabase(dbUrl = process.env.MONGODB_URL) {
  if (!dbUrl) {
    throw new Error("Database URL is not provided or set in environment variables.");
  }
  try {
    await connect(dbUrl);
    console.log("Successfully connected to MongoDB.");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
    throw new Error(`Could not connect to MongoDB: ${error.message}`);
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
    console.log("Successfully disconnected from MongoDB.");
  } catch (error) {
    console.log("Error disconnecting from MongoDB:", error);
    throw new Error(`Could not disconnect from MongoDB: ${error.message}`);
  }
}

export { connectToDatabase, disconnectFromDatabase };
