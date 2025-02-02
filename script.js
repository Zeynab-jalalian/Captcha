const captcha = document.querySelector('.captcha input');
const input = document.querySelector('.input input');
const message = document.querySelector('.message');
const refresh = document.querySelector('.refresh');
const button = document.querySelector('.btn');

let captchaText = null;
function generateCaptcha() {
    let randomC = Math.random().toString(36).substring(2, 7);
    let randomArr = randomC.split("");
    let changeArr = randomArr.map(function (e) {
        if (Math.random() > 0.5) {
            return e.toUpperCase();

        } else {
            return e;
        }
    })
    captchaText = changeArr.join(" ");
    captcha.value = captchaText;
}
generateCaptcha();
const ref = () => {
    generateCaptcha();
    input.value = "";
    validate();
}
const validate = () => {
    button.parentElement.classList.toggle("disabled", !input.value);
    if (input.value === "") {
        message.classList.remove("active");
    }
}
const btn = () => {
    captchaText=captchaText
    .split("")
    .filter((e)=>e!==" ")
    .join("")
    message.classList.add("active");
    if(captchaText===input.value){
        message.innerHTML="Entered captcha is correct";
        message.style.color="#88004b";
    }else{
        message.innerHTML="Entered captcha is not correct"
        message.style.color="#ff2525"
    }
}
refresh.addEventListener("click", ref);
input.addEventListener("keyup", validate);
button.addEventListener("click", btn);
