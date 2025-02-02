// DOM
const captcha=document.querySelector('.captcha input');
const input=document.querySelector('.input input');
const message=document.querySelector('.message');
const refresh=document.querySelector('.refresh');
const button=document.querySelector('.btn');


let captchaText=null; //Captcha in captcha-field

function generateCaptcha(){ //generate captcha
    let randomC=Math.random().toString(36).substring(2,7);
    let randomCArr=randomC.split("");
    let changeRandomCArr=randomCArr.map(function(e){
        if(Math.random() > 0.5){
        return e.toUpperCase();
        }else{
        return e;
        }
    })
    captchaText=changeRandomCArr.join(" ");
    captcha.value=captchaText;
    
}
generateCaptcha();
const refreshBtn=()=>{
    generateCaptcha();
    input.value="";
    validate();
}
const validate=()=>{
 button.parentElement.classList.toggle("disabled",!input.value);
 if(input.value===""){
   message.classList.remove("active");
 }
}
refresh.addEventListener("click",refreshBtn);
input.addEventListener("keyup",validate);
