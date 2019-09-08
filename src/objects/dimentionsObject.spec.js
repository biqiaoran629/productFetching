

const Dimentions = require("./dimentionsObject");

describe("Dimentions Objects", () => {
  it("should be able to create Dimentions Object", () => {
    const d1 = new Dimentions(2.5, 3.5, 7.2, "inches");
    expect(d1.x).toEqual(2.5);
    expect(d1.y).toEqual(3.5);
    expect(d1.z).toEqual(7.2);
    expect(d1.unit).toEqual("inches");
  });
});