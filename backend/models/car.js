const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  maintenanceRecords: [{
    date: Date,
    description: String,
    cost: Number
  }],
  photos: [String],
  buySellHistory: [{
    date: Date,
    event: String, // 'bought' or 'sold'
    price: Number
  }]
});

module.exports = mongoose.model('Car', carSchema);
