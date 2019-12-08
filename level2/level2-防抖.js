function debounce(fn,wait){
    var timer = null;
    return function(){
        let context=this;
        console.log(context);
        let args=arguments;
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn().apply(context,args)
        },wait)
    }
}

function _log(){
    console.log(1)
}
window.onscroll = debounce(_log,500)