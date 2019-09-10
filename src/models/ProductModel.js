const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  asin: {
    type: String,
    required: true
  },
  dimentions: {
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
      required: true
    },
    z: {
      type: Number,
      required: true
    },
    unit: {
      type: String,
      required: true
    }
  },
  rank: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

const Post = mongoose.model('post', ProductSchema);

module.exports = Post;
