const mongoose = require('mongoose');

const RouteSchema = new mongoose.Schema({
  origin: { 
    type: [Number], 
    required: true 
  },
  destination: { 
    type: [Number], 
    required: true 
  },
  waypoints: { 
    type: [[Number]], 
    required: false 
  },
  timestamp: { 
    type: Date, 
    default: Date.now 
  },
});

module.exports = mongoose.model('Route', RouteSchema);
