require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDb = require("./config/connectToDb"); // Database connection function
const itemControllerTest = require("./controllers/testController"); // Import controllers
const itemController = require("./controllers/itemController.js"); // Import controllers


const app = express();
const PORT = process.env.PORT || 3000;

// Express middleware
app.use(express.json());
app.use(cors());

const setupRoutesTest = () => {
  app.get("/", (req, res) => {
    res.json({ hello: "Wellcome Lane77" });
  });

  app.get("/items", itemControllerTest.fetchItems);
  app.get("/item/:id", itemControllerTest.fetchItem);
  app.post("/createItems", itemControllerTest.createItem);
  app.put("/updateItems/:id", itemControllerTest.updateItemt);
  app.delete("/deleteItems/:id", itemControllerTest.deleteItem);
};
//Settup router for items
const setupRoutesItems = () => {
  app.get("/", (req, res) => {
    res.json({ hello: "Welcome Lane77" });
  });
  
  // Use app instead of router
  app.post('/createItem', itemController.createItem);
  app.get('/items', itemController.getAllItems);
  app.get('/items/find', itemController.findItems); // Use query parameters for filtering
  app.get('/items/:id', itemController.getItemById);
  app.put('/updateItem/:id', itemController.updateItem);
  app.delete('/items/:id', itemController.deleteItem);
};


// Async function to handle database connection and server setup
const startServer = async () => {
  try {
    // Separate block: Database connection
    console.log("Connecting to the database...");
    await connectToDb();
    console.log("Database connected successfully.");

    // Separate block: API routes setup
    //setupRoutesTest();
    setupRoutesItems();
    
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
