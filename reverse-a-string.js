/*
reverseString("hello") should return a string.
reverseString("hello") should become "olleh".
reverseString("Howdy") should become "ydwoH".
reverseString("Greetings from Earth") should return "htraE morf sgniteerG".
*/

function reverseString(str) {
  str = str.split('').reverse().join('');
  return str;
}

reverseString("Greetings from Earth");