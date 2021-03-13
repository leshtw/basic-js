module.exports = function repeater(str, options) {
  let pushStringArray = [];
  let addition;

  if (options.addition == false) {
    addition = 'false';
  } else if (options.addition === null) {
    addition = 'null';
  } else {
    addition = options.addition || '';
  }


  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';

  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';

  for (let i = 0; i < additionRepeatTimes; i++) {
    pushStringArray.push(`${addition}`);
  }

  let addString = pushStringArray.join(additionSeparator);
  let result = [];

  for (let i = 0; i < repeatTimes; i++) {
    result.push(`${str}${addString}`);
  }
  return result.join(separator);
};