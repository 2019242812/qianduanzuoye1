function Accumulator(value){
    this.read=function(sss){
        
        this.value=this.value+sss
    }
      this.value=value;
        }
var accumulator = new Accumulator(1);
accumulator.read(2); 
accumulator.read(3); 
console.log(accumulator.value); 