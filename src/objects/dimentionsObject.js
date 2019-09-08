class Dimentions {

  /**
   * 
   * Dimentions constructor
   * 
   * @param {Number} x 
   * @param {Number} y 
   * @param {Number} z 
   * @param {String} unit 
   */

  constructor(x, y, z, unit) {
    this.x = parseFloat(x);
    this.y = parseFloat(y);
    this.z = parseFloat(z);
    this.unit = unit;
  }

}

module.exports = Dimentions;