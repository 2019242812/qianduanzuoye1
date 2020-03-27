const arrs = [ 'a', ['b', 'c'], ['d', 'e'] ];
const arrss = [ 'b', ['b', 'c'], ['d', 'e'] ];
const arrsss = [ 'c', ['b', 'c'], ['d', 'e'] ];
function* Arrays(arr) {
    if (Array.isArray(arr)) {
      for(let i=0; i < arr.length; i++) {
        yield* Arrays(arr[i]);
      }
    } else {
      yield arr;
    }
  }
let tlj=[...Arrays(arrs)]
console.log(tlj)
//
function Arrayse(arr) {
    while(arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
Arrayse(arrss);
//
function flatten(arr) {
    var res = [];
    arr.map(items => {
        if(Array.isArray(items)) {
            res = res.concat(flatten(items));
        } else {
            res.push(items);
        }
    });
    return res;
}
flatten(arrs);
console.log(flatten(arrsss))