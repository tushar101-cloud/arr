const mongoose = require('mongoose');
const Location = require('../models/Location');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = async (req, res) => {
  const { locationName, coordinates } = req.body;

  try {
    const location = new Location({ name: locationName, coordinates });
    await location.save();
    res.status(200).json({ message: 'Location saved', location });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
};
