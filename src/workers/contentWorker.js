const { AMAZONDP, SELECTORS: { DIMENTIONSELECTOR, SIZERANKSELECTOR }, ERRORS: { FETCHING, PRODUCTINVALID } } = require('../constants');
const { REGEX: { RANKCATEGORYREGEX, DIMENTIONSREGEX } } = require('../constants');
const Product = require('../objects/productObject');
const ProductModel = require('../models/ProductModel');

class ContentWorker {

  constructor(asin, axiosClient, cheerioClient) {
    this.asin = asin;
    this.axios = axiosClient;
    this.cheerio = cheerioClient;
  }

  /**
   * Getting product from fetching the product page. First we try to get it from DB.
   * If it doesn't exist, then we parse the Amazon product page for it.
   * @returns {Object} productObject from db
   */

  async getContent() {
    let currentProduct;

    try {
      // Get from DB
      currentProduct = await ProductModel.findOne({ asin: this.asin });

      if (currentProduct)
        return currentProduct;

      console.log('not found from db');

      currentProduct = await this.getProductFromFetch(this.asin);

      return currentProduct;
    } catch (e) {
      throw new Error(e);
    }
  }
  /**
   * Fetch Product info from amazon through web scraping
   * @returns {Object} Product Object
   */
  async getProductFromFetch() {
    // Fetch from website
    const $ = await this.fetchData(this.asin);

    const dimentionRawText = $(DIMENTIONSELECTOR).text();
    const sizeRawText = $(SIZERANKSELECTOR).text();

    if (!this.isValid(dimentionRawText, sizeRawText)) {
      throw new Error(PRODUCTINVALID);
    }

    const currentProduct = new Product(this.asin, dimentionRawText, sizeRawText);

    this.saveToDB(currentProduct);
    return currentProduct;
  }


  /**
   * Save the current product to DB
   * @param {Obect} currentProduct currentProduct object
   */
  async saveToDB(currentProduct) {
    console.log('saving to db...');
    const product = new ProductModel(currentProduct);
    product.save();
    console.log('saved to db!');
  }

  /**
   * Fetch the amazon product page
   * @returns {Object} cheerio object
   */
  async fetchData() {
    try {
      const result = await this.axios.get(AMAZONDP + this.asin);
      return this.cheerio.load(result.data);
    } catch (e) {
      throw new Error(FETCHING);
    }
  }

  /**
 * Returns true if the given raw texts are valid. Otherwise returns false.
 * @param {String} dimentionRawText Raw dimention text from cheerio
 * @param {String} sizeRankRawText Raw dimention text from cheerio
 * @returns {Boolean}
 */
  isValid(dimentionRawText, sizeRankRawText) {
    return Boolean(dimentionRawText.match(DIMENTIONSREGEX) && sizeRankRawText.match(RANKCATEGORYREGEX));
  }
}


module.exports = ContentWorker;
