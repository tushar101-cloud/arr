const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  coordinates: { type: String, required: true },
  beaconData: { type: Object, default: {} },
});

module.exports = mongoose.model('Location', LocationSchema);
