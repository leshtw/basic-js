const CustomError = require("../extensions/custom-error");

const chainMaker= {
  chainStorage: [],
  getLength() {
    // возвращает текущую длину цепочки в виде числа;
    return this.chainStorage.length;
  },
  addLink(value){
    // добавляет ссылку, содержащую stringпредставление элемента valueв цепочку;
      if (value===undefined) {
          value='( )';
          this.chainStorage.push( value )
      } else {
          this.chainStorage.push('( ' + value +  ' )' )
      }

      return this;
  },
  removeLink(position) {
    // удаляет звено цепи в указанном положении;
      if (position < 0 || position===undefined) {
        this.chainStorage = [];
          throw new Error
      }
      this.chainStorage.splice(position - 1,1);
      return this;
  },
 reverseChain() {
  // переворачивает цепочку;
  this.chainStorage.reverse()
  return this
 },
  finishChain() {
    // заканчивается цепочка и returnsэтим.
    let result  = this.chainStorage.join('~~');
     this.chainStorage=[];
     return  result;
  }
};

module.exports = chainMaker;
