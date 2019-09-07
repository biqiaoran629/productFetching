const AMAZONDP = "http://www.amazon.com/dp/";

/*
    from chrome: 
    const dimentionsSelector = "#prodDetails > div.wrapper.USlocale > div.column.col1 > div > div.content.pdClearfix > div > div > table > tbody > tr:nth-child(2) > td.value";
    but we should update it to use the td.name instead of 2nd child.
  */
const dimentionsSelector =
  "#prodDetails > div.wrapper.USlocale > div.column.col1 > div > div.content.pdClearfix > div > div > table > tbody > tr:nth-child(2) > td.value";
const sizeSelector = "#SalesRank > td.value";

module.exports = {
  AMAZONDP,
  dimentionsSelector,
  sizeSelector
};
