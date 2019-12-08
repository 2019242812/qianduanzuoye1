Function.prototype.call2 = function(context) {
    context.fn = this;
    console.log(context.fn)
    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }
    eval('context.fn(' + args +')');
    delete context.fn;
}
function sayInfo(age) {
    console.log("name:"+this.name)
    console.log("age:"+age)
  }
  var user = {
    name: "zzx"
  }
  sayInfo.call2(user,100)

  
