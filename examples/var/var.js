var a;
console.log("a: ", a);
a = 14;
console.log("a: ", a);

function toto(x, y, titi) {
  console.log("hello", a);
  {
    var a = 12;
  }
  console.log("hello", a);
}
