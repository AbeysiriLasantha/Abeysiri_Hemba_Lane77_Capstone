const mongoose = require("mongoose");

// Define the schema for an item
const itemSchema = new mongoose.Schema({
  itemCode: { type: String, required: true },
  itemName: { type: String, required: true },
  categoryGender: { type: String, enum: ['WOMEN', 'MEN'], required: true, index: true },  // Index for categoryGender
  categoryStyle: { type: String, enum: ['DRESS', 'TOPS', 'SKIRTS', 'PANTS', 'JUMPSUITS', 'T-SHIRTS', 'BODYSUITS', 'JACKET'], required: true, index: true },  // Index for categoryStyle
  subCategoryStyle: { type: String, enum: ['Dresses', 'Tops', 'Jeans', 'Trousers', 'Skirts', 'Shorts', 'Jumpsuits & Playsuits', 'Dungaree', 'Blazers', 'Cardigans'], required: true },
  collectionCat: { type: [String], enum: ['WORKWEAR', 'LINEN', 'NATURAL', 'BLENDS', 'DENIM', 'OCCASION', 'ACTIVE WEAR'], required: true, index: true },  // Index for collection
  colorCategory: { type: String, required: true },
  availableSizes: [{
    size: { type: String, enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], required: true },
    qty: { type: Number, required: true }
  }],
  itemPrice: { type: Number, required: true },
  newArrival: { type: String, enum: ['Yes', 'No'], required: true },
  onSale: { type: Boolean, required: true },
  imageURL1: { type: String, required: true },
  imageHoverURL: { type: String, required: true },
  imageURL2: { type: String },
  imageURL3: { type: String },
  quantity: {type: Number,default: 1}
});

// Export the model
const Item = mongoose.model('Item', itemSchema);
module.exports = Item;



