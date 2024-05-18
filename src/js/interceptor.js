document.addEventListener('DOMContentLoaded', function () {
    const usuarioNome = localStorage.getItem('usuarioNome');
    
    modifyMenuIfUserLogged(usuarioNome);
    removeCurrentUserFromLocalStorage();
});

function modifyMenuIfUserLogged(usuarioNome) {
    if (usuarioNome) {
        document.getElementById('welcome-message').textContent = `Olá ${usuarioNome}!`;
        document.getElementById('icon-last-item-menu').textContent = `logout`;
        document.getElementById('last-item-menu').textContent = `Sair`;
    } else {
        const sidebarItem = document.getElementById('sidebar-item-logged');
        const sidebarTabletItem = document.getElementById('sidebar-tab-item-logged');
        const sidebarMobileItem = document.getElementById('sidebar-mob-item-logged');
        sidebarItem.style.display = 'none';
        sidebarTabletItem.style.display = 'none';
        sidebarMobileItem.style.display = 'none';
    }
}

function removeCurrentUserFromLocalStorage() {
    document.getElementById('logout-link').addEventListener('click', function () {
        localStorage.removeItem('usuarioNome');
        localStorage.removeItem('usuarioEmail');
        localStorage.removeItem('usuarioSenha');
        window.location.href = 'login.html';
    });
}