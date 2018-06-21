function varTest() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x);
  }
  console.log(x);
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;
    console.log(x);
  }
  console.log(x);
}

varTest();
return;
letTest();

// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
// https://www.ecma-international.org/activities/Languages/Language%20overview.pdf (page 23)