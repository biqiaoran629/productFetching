

const Product = require("./productObject");

describe("Product Objects", () => {
  it("should be able to create Product Object", () => {
    const p1 = new Product("abcdefg", "4.3 x 0.4 x 7.9 inches", "#30 in Baby (See Top 100 in Baby) #2 in Baby Health Care Products #2 in Baby Teether Toys");
    expect(p1.asin).toEqual("abcdefg");
    expect(p1.dimentions.x).toEqual(4.3);
    expect(p1.dimentions.y).toEqual(0.4);
    expect(p1.dimentions.z).toEqual(7.9);
    expect(p1.dimentions.unit).toEqual("inches");
    expect(p1.rank).toEqual(30);
    expect(p1.category).toEqual("Baby");
  });
});