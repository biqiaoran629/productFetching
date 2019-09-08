

const Product = require("./productObject");

describe("Product Objects", () => {
  it("should be able to create Product Object", () => {
    const p1 = new Product("4.3 x 0.4 x 7.9 inches", "#30 in Baby (See Top 100 in Baby) #2 in Baby Health Care Products #2 in Baby Teether Toys");
    expect(p1.dimentions.x).toEqual(4.3);
    expect(p1.dimentions.y).toEqual(0.4);
    expect(p1.dimentions.z).toEqual(7.9);
    expect(p1.dimentions.unit).toEqual("inches");
    expect(p1.rank).toEqual(30);
    expect(p1.category).toEqual("Baby");
  });

  it("should check if the product is valid", () => {
    expect(Product.isValid(
      "4.3 x 0.4 x 7.9 inches", "#30 in Baby (See Top 100 in Baby) #2 in Baby Health Care Products #2 in Baby Teether Toys")).toEqual(true);
  });

  it("should still match with the product regardless of more spaces", () => {
    expect(Product.isValid(
      "4.3 x   0.4   x   7.9   inches", "#30 in Baby        (See Top 100 in Baby) #2 in    Baby Health Care Products    #2 in Baby Teether Toys")).toEqual(true);
  });

  it("should return false if product string is invalid", () => {
    expect(Product.isValid(
      "4.3 x 0.4 inches", "#30 in Baby (See Top 100 in Baby) #2 in Baby Health Care Products #2 in Baby Teether Toys")).toEqual(false);
  });

  it("should return false if product string is invalid", () => {
    expect(Product.isValid(
      "4.3 x 0.4 x 7.9 inches", "not a valid string")).toEqual(false);
  });
});