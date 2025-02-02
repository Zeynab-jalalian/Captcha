const captchaTextBox=document.querySelector('.captch_box input');
const captchInputBox=document.querySelector('.captch_input input');
const refreshButton=document.querySelector('.refresh_button');
const message=document.querySelector('.message');
const submitButton=document.querySelector('.button');

let captchaText=null;

const generateCaptcha= ()=>{
    const randomString= Math.random().toString(36).substring(2,7);
    const randomStringArray=randomString.split("");
    const changeString=randomStringArray.map((char)=>(Math.random() > 0.5? char.toUpperCase() :char));
    captchaText=changeString.join(" ")
    captchaTextBox.value=captchaText;
    console.log(captchaText);
    
    
}
const refreshBtnClick=()=>{
    generateCaptcha();
    captchInputBox.value="";
    captchaKeyUpValidate();
}
const captchaKeyUpValidate=()=>{
    submitButton.classList.toggle('disabled',!captchInputBox.value)
    if(captchInputBox.value==="")
        message.classList.remove("active")
}
const  submitBtnClick=()=>{
     captchaText=captchaText
     .split("")
    .filter((char)=>char !== " ")
    .join("");
    message.classList.add("active")
    if(captchInputBox.value === captchaText){
        message.innerText="Entered captcha is correct"
         message.style.color="#826afb"
    }else{
          message.innerText="Entered captcha is not correct"
          message.style.color="#FF2525"
    }
}
refreshButton.addEventListener("click",refreshBtnClick);
captchInputBox.addEventListener("keyup",captchaKeyUpValidate);
submitButton.addEventListener("click",submitBtnClick);
generateCaptcha();