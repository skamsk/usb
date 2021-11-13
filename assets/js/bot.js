const buttonMessage = document.querySelector('.button-message')
const modalAuth = document.querySelector('.modal-auth')
const closeMessage = document.querySelector('.close-button')
const logInForm = document.getElementById('logInForm')
const InputFio = document.getElementById('fio')
const InputPhone = document.getElementById('phone')
const InputMessage = document.getElementById('message')



buttonMessage.addEventListener('click', () => {
  modalAuth.style.display = 'flex'
  // console.dir(buttonMessage)
  // send()
})

closeMessage.addEventListener('click', () => {
  modalAuth.style.display = 'none'
  InputFio.value=''
  InputPhone.value=''
  InputMessage.value=''
})



logInForm.addEventListener('submit', (event) => {
  send(InputFio.value, InputPhone.value, InputMessage.value)
  event.preventDefault()
  modalAuth.style.display = 'none'
  InputFio.value=''
  InputPhone.value=''
  InputMessage.value=''
})

const send = (s1, s2, s3) =>{
var chatid = "-1001621864788";
var token = "2107046347:AAFl_Gb9XV-6Bt1RfjrVmuVraEGrvQLQprA";
var text = ("<b>Фио =  </b>" +"<b>"+s1+"</b>"+"\n<b>Телефон =  </b>" + "<b>"+s2+"</b>" + "\n<b>Сообщение =  </b>" + "<b>"+s3+"</b>")


// ("<b>89638823214</b> \n <strong>89638823214</strong>")
// var text = ("<pre language='89638823214'>code</pre>")


//Отправляем текст в наш телеграм канал
otpravka(token,text,chatid);
 
function otpravka(token,text,chatid){
  var z=$.ajax({  
  type: "POST",  
  url: "https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+chatid,
  // data: "parse_mode=HTML&text="+encodeURIComponent(text), 
  data: "parse_mode=HTML&text="+text, 

  }); 
 };
 }