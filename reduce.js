Array.prototype._myReduce = function (fn, initial) {
    let i = 0;
    let Array = this;
    var reduces = (function fns(prevRes) {
      const res = fn(prevRes, Array[i], i, Array);
      if (i >= Array.length - 1) {
        return res;
      } else {
        i++;
        return fns(res);
      }
    });
    if (initial == undefined) {
      if(this.length === 1) {
        return this[0];
      }
      return reduces(Array[i++]);
    } 
     else{
      return reduces(initial);
    }
  }
  Numbers=[1,2,3,4]
  let add=function(a,b){
return a+b;}
  Numbers._myReduce(add)
