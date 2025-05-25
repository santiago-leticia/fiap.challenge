let botao= document.querySelector('#enviar')

botao.addEventListener('click', clicou)

function clicou(){
    botao.innerHTML="Você ja enviou"}

    console.log(document.getElementById("titulo"))
    console.log(document.getElementById('titulo').innerHTML)
    
    let titulo = document.getElementById('titulo')
    
    console.log(titulo);
    console.log(titulo.innerHTML);
    
    let texto = document.getElementById("ctexto")
    
    function mudarTexto(){
        titulo.innerHTML = texto.value
    }
    let duvida=document.getElementById('ctexto')
    console.log(duvida)


    const form = document.getElementById('cemail');
    const campos= document.querySelectorAll('.required');
    const spans = document.querySelectorAll('.span-required');
    function setError(FAQ){
        campos[FAQ].computedStyleMap
    }
    function nameValidade(){
        if(campos[0].value.length==0){
            setError[0]
        }
        else{
            let texto= texto.getElementById('ctexto')
            console.log(texto)
        }
    
    }
