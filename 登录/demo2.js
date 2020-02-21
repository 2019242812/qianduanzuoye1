let form =document.getElementsByClassName('biaodan');
let button = document.getElementById('button');
let email = document.getElementById('email');
let password = document.getElementById('password');
let passwords = document.getElementById('passwords');
let erro= document.getElementById('erro');




let shuju=function(data){
  data=data||{};
  data.type=(data.type||"GET").toUpperCase();
  console.log(data.url)
  //data.datatype=data.datatype||"json";
  //let datas=formatParams(data.datas)
  const request= new XMLHttpRequest;
  if(data.type=="GET"){
      request.open('GET',data.url,true)
      request.send(null);
  }else if(data.type=="POST"){
  request.open("post",data.url,true);
   request.setRequestHeader('Content-type',"application/x-www-form-urlencoded");
   request.send(data.data);
}
//setTimeout(function(){
//    if(xhr.readySate!=4){
//        xhr.abort();
 //   }
//},options.timeout)
request.onreadystatechange=function(){
  if(request.readyState==4){
      var status=request.status;
      if(status>=200&&status<300||status==304){
        data.sucess()
      }
      else{
          data.error()
      }
  }

}
//function formatParams(data){
 //   var arr=[];
  //  for(var name in data){
  ///      arr.push(encodeURIComponent(name)+"="+encodeURIComponent(data[name]));
  //  }
  //  arr.push(("v="+Math.random()).replace("."))
//}
}//ajax

  let ajax=function({ url,type,data,success,error}){
  
    const formatData = (data) => `?${Object.keys(data).reduce((acc, cur) => `${acc}&${cur}=${data[cur]}`, '').slice(1)}`
    const datas=formatData(data)
    const request=new XMLHttpRequest()
    request.onreadystatechange=function(){
      if (request.readyState === 4) {
        if (request.status >= 200 && request.status < 300 || request.status === 304) {
          success(request)
        } else {
          error(request)
        }
      }
    }
    if(type.toUpperCase()==="GET"){
      request.open("GET",url+datas)
      request.send(null)
    }
  if(type.toLocaleLowerCase()==="POST"){
    request.open("POST",url)
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    request.send(datas);
  }
  }




let click=function(){
    let values=  function(e){
        return c= e.value
        }
if(values(email)===''||values(password)===''||values(passwords)===''){
   erro.innerHTML='信息不完整，请再次确认无漏填'
}
else if(values(password)!=values(passwords)){
    erro.innerHTML='两次密码不同，请检查后重新输入'
}
  else{
      erro.innerHTML='请填入信息'
      ajax({
        url:'',
        type:'post',
        data:{
            username:'',
            password:''
        },
        success:function(request){
            const ajax=JSON.parse(request.responseText)
            //
            let url="Untitled-3.html"
            window.location.href=url
        }
    })
  }
}
button.addEventListener('click',click,false)