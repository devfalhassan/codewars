/*
Capitalize firt character of each word in a string
 */

const toJadenCase = function (str) {
  return str
    .split(' ')
    .map((el) => el.replace(el[0], el[0].toUpperCase()))
    .join(' ');
};
