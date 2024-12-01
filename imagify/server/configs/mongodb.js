import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "ai-image", // Specify database name
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Event listeners
    mongoose.connection.on("connected", () => {
      console.log("Database connected successfully to 'ai-image'");
    });

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err.message);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB connection disconnected");
    });

    // Ensure the database is created by adding a collection or inserting data
    const testCollection = mongoose.connection.db.collection("test");
    await testCollection.insertOne({ message: "Database initialized" });

    console.log("Test collection created, and database initialized");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit the application if the connection fails
  }
};

export default connectDB;
