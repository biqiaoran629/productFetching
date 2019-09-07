const cheerio = require("cheerio");
const axios = require("axios");
const { AMAZONDP, dimentionsSelector, sizeSelector } = require("../constants");

/**
 * Getting product from fetching the product page
 * @param {String} asid asid of the amazon product
 */

const getContent = async (asid) => {
  const $ = await fetchData(asid);
  console.log($(dimentionsSelector).html());
  console.log($(sizeSelector).html());
  return $;
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
