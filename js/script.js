let nome = window.document.getElementById('nome')


let email = document.querySelector('#email')
let resumo = document.querySelector('#resumo')

let nomeOK = false
let emailOK = false
let resumoOK = false

let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome invalido'
        txtNome.style.color = 'red'
        nomeOK = false
    }else{
        txtNome.innerHTML = 'Nome valido'
        txtNome.style.color = 'green'
        nomeOK = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'Email invalido'
        txtEmail.style.color = 'red'
        emailOK = false
    }else{
        txtEmail.innerHTML = 'Email valido'
        txtEmail.style.color = 'green'
        emailOK = true
    }
}

function validaResumo(){
    let txtResumo = document.querySelector('#txtResumo')

    if(resumo.value.length >= 200){
    txtResumo.innerHTML = 'Excedeu o limite de caracteres(100)'
    txtResumo.style.color = 'orange'
    resumoOK = false
    }else{
        txtResumo.innerHTML = 'Tudo Certo!'
        txtResumo.style.color = 'green'
        resumoOK = true
    }
}

function enviar(){
if(nomeOK == true && emailOK == true && resumoOK == true){
    alert('Formulario enviado com sucesso"')
}else{
    alert('Preencha corretamenta para enviar...')
}
}


function mapaZoom(){
    mapa.style.width = '600px'
    mapa.style.height = '400px'
}

function mapaNormal(){
    mapa.style.width = '500px'
    mapa.style.height = '300px'
}