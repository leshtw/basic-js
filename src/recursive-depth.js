const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
  }

  calculateDepth(arr) {
    let Max=1;
    arr.map((item)=>{
      let currentDepth = 1;
        if(Array.isArray(item)) {
          currentDepth+= this.calculateDepth(item);
            Max = Math.max(Max, currentDepth)
        }
    })
    return Max
}
};