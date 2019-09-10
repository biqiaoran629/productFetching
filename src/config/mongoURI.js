const mongoURI = process.env.MONGO_URI ? process.env.MONGO_URI : 'mongodb://admin:admin12345@ds042888.mlab.com:42888/amazon_asin_product';

module.exports = mongoURI;
