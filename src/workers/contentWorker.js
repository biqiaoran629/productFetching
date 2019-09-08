const cheerio = require("cheerio");
const axios = require("axios");
const { AMAZONDP, SELECTORS: { DIMENTIONSELECTOR, SIZERANKSELECTOR } } = require("../constants");
const Product = require("../objects/productObject");

/**
 * Getting product from fetching the product page
 * @param {String} asid asid of the amazon product
 */

const getContent = async asid => {
  // Try to get from DB first

  let currentProduct;

  const $ = await fetchData(asid);

  const dimentionRawText = $(DIMENTIONSELECTOR).text();
  const sizeRawText = $(SIZERANKSELECTOR).text();

  if (Product.isValid(dimentionRawText, sizeRawText)) {
    currentProduct = new Product(dimentionRawText, sizeRawText);
  }

  return currentProduct;
};

/**
 * Fetch the amazon product page
 * @param {asid} asid asid of the amazon product
 */
const fetchData = async asid => {
  try {
    const result = await axios.get(AMAZONDP + asid);
    return cheerio.load(result.data);
  } catch (e) {
    // Better error handling for sure!!
    console.log(`error fetching amazon url AMAZONDP + asid: + ${e}`);
  }
};

module.exports = {
  getContent
};
