
const Item = require('../models/items.js')

// Create a new item
const createItem = async (req, res) => {
    const newItem = new Item(req.body);

    try {
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all items
const getAllItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Get item by ID
const getItemById = async (req, res) => {
    const { id } = req.params;

    try {
        const item = await Item.findById(id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Update an item
const updateItem = async (req, res) => {
    const { id } = req.params;

    try {
        const updatedItem = await Item.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an item
const deleteItem = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedItem = await Item.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Find items by itemCode, categoryGender, categoryStyle, and collection
const findItems = async (req, res) => {
    const { itemCode, categoryGender, categoryStyle, collection } = req.query;

    const query = {};

    if (itemCode) query.itemCode = itemCode;
    if (categoryGender) query.categoryGender = categoryGender;
    if (categoryStyle) query.categoryStyle = categoryStyle;
    if (collection) query.collection = { $in: collection.split(',') }; // Handles multiple collections

    try {
        const items = await Item.find(query);
        res.status(200).json(items);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


module.exports = {
    createItem, 
    getAllItems, 
    getItemById, 
    updateItem, 
    deleteItem, 
    findItems 
  };

    
