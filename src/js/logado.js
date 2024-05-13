// página só é acessada se usário estiver logado
if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar essa página')
    window.location.href ="login.html"
}

// usuário deseja deslogar
function sair(){
    localStorage.removeItem('token')
    window.location.href ="login.html"
}