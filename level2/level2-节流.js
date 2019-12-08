function throttle(func, wait) {
  var context, argument;
  var previous = 0;

  return function() {
      var now = new Date().getTime();
      context = this;
      arg = arguments;
      if (now - previous > wait) {
          func.apply(context, argument);
          previous = now;
      }
  }
}
function _log(){
  console.log(1)
}
window.onscroll = throttle(_log,500)