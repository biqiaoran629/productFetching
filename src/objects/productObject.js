const Dimentions = require('./DimentionsObject');
const { REGEX: { RANKCATEGORYREGEX, DIMENTIONSREGEX } } = require('../constants');
const { removeCommas } = require('../utils');

class ProductObject {

  /**
   * 
   * constructor
   * @param {String} asin asin of the product
   * @param {String} dimentionRawText raw dimention text from cheerio
   * @param {String} sizeRankRawText raw rank text from cheerio
   */
  constructor(asin, dimentionRawText, sizeRankRawText) {
    const dimentionMatch = dimentionRawText.match(DIMENTIONSREGEX);
    const sizeRankMatch = sizeRankRawText.match(RANKCATEGORYREGEX);
    this.asin = asin;
    this.dimentions = new Dimentions(dimentionMatch[1], dimentionMatch[2], dimentionMatch[3], dimentionMatch[4]);
    this.rank = parseInt(removeCommas(sizeRankMatch[1]));
    this.category = sizeRankMatch[2].trim();
  }
}

module.exports = ProductObject;
