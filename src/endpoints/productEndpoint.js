const contentWorker = require("../workers/contentWorker");

const getProduct = (req, res) => {
  const {
    params: { asin_id }
  } = req;

  // Issue bad request
  if (!asin_id) {
    return res.status(400).json("No Amazon product ID is entered!");
  }

  // TODO
  try {
    console.log(`getting product... ${asin_id}`);
    console.log("what happened?");
    console.log(JSON.stringify(contentWorker.getContent(asin_id)));
    res.json(`got data! for ${asin_id}`);
  } catch (e) {
    // Server error
    const errorMsg = `error getting product ${asin_id}.`;
    console.log(errorMsg);
    return res.status(500).json(errorMsg);
  }
};

module.exports = {
  getProduct
};
