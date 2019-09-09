const AMAZONDP = "http://www.amazon.com/dp/";

const REGEX = {
  RANKCATEGORYREGEX: /^\s*#([\d,]+)\s+in\s+(.*)\s*\(.*\)/,
  DIMENTIONSREGEX: /(^\d*\.?\d*)\s*x\s*(\d*\.?\d*)\s*x\s*(\d*\.?\d*)\s*(\w+)$/
};

const SELECTORS = {
  DIMENTIONSELECTOR: "#prodDetails > div.wrapper.USlocale > div.column.col1 > div > div.content.pdClearfix > div > div > table > tbody > tr:nth-child(2) > td.value",
  SIZERANKSELECTOR: "#SalesRank > td.value"
};

const ERRORS = {
  FETCHING: "Error fetching product for asin",
  GENERIC: "Error getting product for asin",
  PRODUCTINVALID: "Invalid product asin",
};

module.exports = {
  AMAZONDP,
  ERRORS,
  SELECTORS,
  REGEX
};
