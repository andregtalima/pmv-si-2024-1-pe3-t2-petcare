
var formSignin = document.querySelector('#signin');
var formSignup = document.querySelector('#signup');
var btnColor = document.querySelector('.btnColor');

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelCadNome')
let validNome = false

let email = document.querySelector('#email')
let labelCadEmail = document.querySelector('#labelCadEmail')
let validEmail = false

let senha = document.querySelector('#cadSenha')
let labelCadSenha = document.querySelector('#labelCadSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

// muda para login
document.querySelector('#btnSignin').addEventListener('click', () =>{
    console.log("Clicou em login"); // Verificação
    formSignin.style.left = "25px";
    formSignup.style.left = "450px";
    btnColor.style.left = "0px";
});

// muda para cadastro
document.querySelector('#btnSignup').addEventListener('click', () =>{
    console.log("Clicou em cadastro"); // Verificação
    formSignin.style.left = "-450px";
    formSignup.style.left = "25px";
    btnColor.style.left = "110px";
});

// Validações do preenchimento do cadastro

nome.addEventListener('keyup', ()=>{
if(nome.value.length <= 2){
labelNome.setAttribute('style', 'color: red')
labelNome.innerHTML = 'Nome *Insira no mínimo 3 caracteres*'
validNome = false
} else{
    labelNome.setAttribute('style', 'color: black')
    labelNome.innerHTML = 'Nome'
    validNome = true
}
})

email.addEventListener('keyup', ()=>{
    if(email.value.length <= 7){
    labelCadEmail.setAttribute('style', 'color: red')
    labelCadEmail.innerHTML = 'Email *Insira um email válido*'
    validEmail = false
    } else{
        labelCadEmail.setAttribute('style', 'color: black')
        labelCadEmail.innerHTML = 'Email'
        validEmail = true
    }
    })


senha.addEventListener('keyup', ()=>{
        if(senha.value.length <= 7){
        labelCadSenha.setAttribute('style', 'color: red')
        labelCadSenha.innerHTML = 'Senha *A senha deve conter no mínimo 8 caracteres*'
        validSenha = false
        } else{
            labelCadSenha.setAttribute('style', 'color: black')
            labelCadSenha.innerHTML = 'Senha'
            validSenha = true
        }
        })

confirmSenha.addEventListener('keyup', ()=>{
        if(senha.value != confirmSenha.value){
            labelConfirmSenha.setAttribute('style', 'color: red')
            labelConfirmSenha.innerHTML = 'Confirme sua senha *As senhas não conferem*'
            validConfirmSenha = false
        } else{
            labelConfirmSenha.setAttribute('style', 'color: black')
            labelConfirmSenha.innerHTML = 'Confime sua senha'
            validConfirmSenha = true
            }
            })


 // cadastra o usuário e salva em localStorage
function cadastrar(){
    if(validNome && validEmail && validSenha && validConfirmSenha){
let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

listaUser.push(
    {
        nomeCad: nome.value,
        emailCad: email.value,
        senhaCad: senha.value
    }
)

alert('Usuário cadastrado com sucesso')
window.location.href = 'login.html'

localStorage.setItem('listaUser', JSON.stringify(listaUser))

    } else{
        alert('Preencha corretamente os campos')
    }
}

// efetua o login
function entrar() {
   
let emailLogin = document.querySelector('#emailLogin').value;
let senhaLogin = document.querySelector('#senhaLogin').value;

let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

let userValid = listaUser.find(user => user.emailCad === emailLogin && user.senhaCad === senhaLogin);

if (userValid) {
window.location.href = 'logado.html' 
let token = Math.random().toString(16).substring(2)
localStorage.setItem('token', token)


} else {
    // credenciais inválidas
    alert('Email ou senha incorretos. Por favor, tente novamente.');
}
}