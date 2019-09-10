const ContentWorker = require('./ContentWorker');
const mockAxios = require('../mocks/mockAxios');
const mockCheerio = require('../mocks/mockCheerio');


jest.mock('../objects/productObject');


describe('content worker', () => {
  let contentWorker = new ContentWorker('B07QZ949X5', mockAxios, mockCheerio);


  /*
  Some Missing Tests

  idea is to have 100% coverage, with good path and bad path both present

  it("should be able to get from db if it is there")
  it("should be able to get from amazon product page if its not from db")
  it("should be able to get content and create product object for valid asinid", () => {});
  it("should throw an error when is valid is false", () => {});
  it("should throw an error when fetching failed", () => {});
  it("should throw an error when getContent encountered something unexpected i.e. save failed");
  */

  it('should check if the product is valid', () => {
    expect(contentWorker.isValid(
      '4.3 x 0.4 x 7.9 inches', '#30 in Baby (See Top 100 in Baby) #2 in Baby Health Care Products #2 in Baby Teether Toys')).toEqual(true);
  });

  it('should still match with the product regardless of more spaces', () => {
    expect(contentWorker.isValid(
      '4.3 x   0.4   x   7.9   inches', '#30 in Baby        (See Top 100 in Baby) #2 in    Baby Health Care Products    #2 in Baby Teether Toys')).toEqual(true);
  });

  it('should return false if product string is invalid', () => {
    expect(contentWorker.isValid(
      '4.3 x 0.4 inches', '#30 in Baby (See Top 100 in Baby) #2 in Baby Health Care Products #2 in Baby Teether Toys')).toEqual(false);
  });

  it('should return false if product string is invalid', () => {
    expect(contentWorker.isValid(
      '4.3 x 0.4 x 7.9 inches', 'not a valid string')).toEqual(false);
  });
});