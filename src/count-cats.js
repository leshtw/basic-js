module.exports = function countCats(cat) {
  let i = 0;
  for (let item of cat) {
    for (let el of item) {
      if (el==='^^') {
        i++;
      }
    }
  }
  return i;
};
