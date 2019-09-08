const contentWorker = require("../workers/contentWorker");

const getProduct = async (req, res) => {
  const {
    params: { asin_id }
  } = req;

  // Issue bad request
  if (!asin_id) {
    return res.status(400).json("No Amazon product ID is entered!");
  }

  // TODO
  try {
    const content = await contentWorker.getContent(asin_id);
    res.json(`got data for ${asin_id}: ${content}`);
  } catch (e) {
    // Server error
    const errorMsg = `error getting product ${asin_id}.`;
    return res.status(500).json(errorMsg);
  }
};

module.exports = {
  getProduct
};
