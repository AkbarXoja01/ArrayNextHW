let str = prompt("Hi undov bilan yozing.");
let newString = str.replace("!", "");
console.log(newString);

const array1 = [13, 45, 77, 43, 5];
function twoOld(a, b) {
  array1.sort((a, b) => a - b).reverse();
  let slice = array1.slice(0, 2);
  console.log(slice);
  if (array1 == "") {
    console.log([]);
  }
}
twoOld();

let javob = prompt(
  "Nmadur yozing va biz uni boshi va ohiri keyin esa o'rtasini ko'rsatamiz"
);
let arr = javob.split("");
function array() {
  let slice1 = javob.slice(0, 1);
  let slice2 = javob.slice(-1);
  let slice3 = javob.slice(1, -1);
  //   if (javob > 2 && 1) {
  //     console.log(null);
  //   } else
  if (javob == "") {
    console.log(null);
  } else {
    console.log(slice1 + slice2);
    console.log(slice3);
  }
}
array();
