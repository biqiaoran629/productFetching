
/**
 * Remove commas from integer strings like 95,715
 * @param {String} stringValue String integer value
 * @returns {String}
 */
const removeCommas = stringValue => stringValue.replace(/,/g, "");

module.exports = {
  removeCommas
};