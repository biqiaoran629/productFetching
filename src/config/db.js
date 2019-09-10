const mongoose = require('mongoose');
const mongoURI = require('./mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });

    console.log('MongoDB connected...');
  }
  catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;