require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDb = require("./config/connectToDb");
const itemController = require("./controllers/itemController.js");
const userControllers = require("./controllers/userController.js")

const app = express();
const PORT = process.env.PORT || 3000;

// Express middleware
app.use(express.json());
app.use(cors());


//Settup router for items
const setupRoutesItems = () => {
  app.get("/", (req, res) => {
    res.json({ hello: "Welcome Lane77" });
  });

  app.post('/createItem', itemController.createItem);
  app.get('/items', itemController.getAllItems);
  app.get('/items/find', itemController.findItems); 
  app.get('/items/:id', itemController.getItemById);
  app.put('/updateItem/:id', itemController.updateItem);
  app.delete('/items/:id', itemController.deleteItem);
};

const setupRoutesUsers = () => {
  app.post('/createuser', userControllers.createUser);                
  app.get('/findusers/:email', userControllers.searchUserByEmail);   
  app.put('/updateusers/:email', userControllers.updateUser);        
  app.delete('/deleteusers/:email', userControllers.deleteUser);   
  app.post('/userlogin', userControllers.loginUser);


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
    setupRoutesUsers();

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
