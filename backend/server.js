require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDb = require("./config/connectToDB"); // Database connection function


const app = express();
const PORT = process.env.PORT || 3000;

// Express middleware
app.use(express.json());


// Async function to handle database connection and server setup
const startServer = async () => {
  try {
    // Separate block: Database connection
    console.log("Connecting to the database...");
        await connectToDb();
    console.log("Database connected successfully.");

    // Starting the server
    app.listen(PORT, () => {
      console.log(`Express Server: Running - Port: ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database or start server:", error);
  }
};

// Execute the startServer function
startServer();
