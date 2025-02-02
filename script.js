const captchaTextBox=document.querySelector('.captch_box input');
const captchInputBox=document.querySelector('.captch_input input');
const refreshButton=document.querySelector('.refresh_button');
const message=document.querySelector('.message');
const submitButton=document.querySelector('.button');

let captchaText=null;

const generateCaptcha= ()=>{
    const randomString= Math.random().toString(36).substring(2,7);
    console.log(randomString);
    
}
generateCaptcha();