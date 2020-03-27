let cu=function(fn){

    let arg=[].slice.call(arguments,1);
    let fns=function(){
        if(arguments.length===0){
            return fn.apply(this,arg);
        }else{
            arg.push(...arguments);
            return fns;
        }
    }
    return fns;
}
function add(){
    let s=[].reduce.call(arguments,(a,b)=>a+b);
    return s;
}
console.log(cu(add)(1,2,3)(2)(3)())