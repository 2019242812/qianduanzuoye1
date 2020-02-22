let form =document.getElementById('biaodan');
let button = document.getElementById('button');
let email = document.getElementById('email');
let password = document.getElementById('password');
let passwords = document.getElementById('passwords');
let erro= document.getElementById('erro');
let a=document.getElementsByClassName('head1');
  let ajax=function({ url,type,data,success,error}){
    console.log(data)
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

//console.log(form)
let click=function(){
  let values=  function(e){
    return c= e.value
    }
    //var formdata=new FormData(form);
        var reg = /(?=.*[0-9])(?=.*[a-z])^[0-9A-Za-z]{6,12}$|(?=.*[0-9])(?=.*[A-Z])^[0-9A-Za-z]{6,12}$/;
        var regs=/^[0-9]{10}$/
        //console.log(reg.test(values(passwords)))
if(values(email)===''||values(password)===''||values(passwords)===''){
   erro.innerHTML='信息不完整，请再次确认无漏填'
}

else if(values(password)!=values(passwords)){
    erro.innerHTML='两次密码不同，请检查后重新输入'
}
else if(regs.test(values(email))===false){
    erro.innerHTML='账号格式不对'
}

else if(reg.test(values(passwords))===false||reg.test(values(password))===false){
    erro.innerHTML='密码格式不对'
 }
  else{
      erro.innerHTML='请填入信息s'
      let value=document.getElementsByClassName('kuang')[0].value;
      let valuetwo=document.getElementsByClassName('kuang')[1].value;
      console.log('ss')
 // ajax({
    //  url:'',
    //  type:'post',
     // data:{
     //     username:value,
     //     password:valuetwo,
     // },
     // success:function(request){
      //    const ajax=JSON.parse(request.responseText)
        
      //},
     // error:function(){
       // alert('ss')
     // }
      
      
  //})
   //const request= new XMLHttpRequest()
  // request.open('post',API)
   //request.setRequestHeader()
   //request.send('');
   //request.onreadystatechange=function(){




    let url="denglu.html"
    window.location.href=url
   //}
   
  }
}
button.addEventListener('click',click,false)


