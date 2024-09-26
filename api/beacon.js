const mongoose = require('mongoose');
const Location = require('../models/Location');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = async (req, res) => {
  const { locationName, beaconData } = req.body;

  try {
    const location = await Location.findOneAndUpdate(
      { name: locationName },
      { $set: { beaconData } },
      { new: true, upsert: true }
    );
    res.status(200).json({ message: 'Beacon location updated', location });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
};
