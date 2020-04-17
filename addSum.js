
var addSum = function(fn) {
    var limit = fn.length; 
    var params = []; 
    return function fns(...arg) {
        params = params.concat(arg); 
        if (limit <= params.length) {   
            return fn.apply(null, params);
        } else {
            return fns;
        }
    };
};
function sum(a, b, c) {
    return a + b + c
}
let sumfn = addSum(sum)
let x=sumfn(14)(22)
console.log(x(3))
