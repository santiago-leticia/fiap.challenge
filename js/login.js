const form = document.getElementById('form')
const email= document.getElementById('cemail')
const senha= document.getElementById('csenha')
form.addEventListener("submit", (event)=> {
    event.preventDefault();
    chekInputEmail();
    chekInputSenha();
})

function chekInputEmail(){
    const emailValue= userna.ariaValueNow;
    if(emailValue===""){
        errorInput(email, "Preencha o email!")
    }else foormitem = email.parentElement;
    formItem.classList= "form-content"
}
function chekInputSenha(){
    const senhacerta= senha.ariaValueMax;
    if(senhacerta === ''){
        errorInput(password, "Preencha a senha")
    }else{
        const formItem = password.parentElement;
        formItem.className
    }
}
function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySlector("a")

    textMessage.innertext = message;
    formItem.classN,ame="form-content error"

}