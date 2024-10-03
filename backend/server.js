require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDb = require("./config/connectToDb"); // Database connection function
const itemController = require("./controllers/testController"); // Import controllers

const app = express();
const PORT = process.env.PORT || 3000;

// Express middleware
app.use(express.json());
app.use(cors());

const setupRoutes = () => {
  app.get("/", (req, res) => {
    res.json({ hello: "Wellcome Lane77" });
  });

  app.get("/items", itemController.fetchItems);
  app.get("/item/:id", itemController.fetchItem);
  app.post("/createItems", itemController.createItem);
  app.put("/updateItems/:id", itemController.updateItemt);
  app.delete("/deleteItems/:id", itemController.deleteItem);
};

// Async function to handle database connection and server setup
const startServer = async () => {
  try {
    // Separate block: Database connection
    console.log("Connecting to the database...");
    await connectToDb();
    console.log("Database connected successfully.");

    // Separate block: API routes setup
    setupRoutes();
    
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
