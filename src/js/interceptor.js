document.addEventListener('DOMContentLoaded', function () {
    const usuarioNome = localStorage.getItem('usuarioNome');

    modifyMenuIfUserLogged(usuarioNome);
    refreshAllMenu();
});

function modifyMenuIfUserLogged(usuarioNome) {
    if (usuarioNome) {
        document.getElementById('welcome-message-user').textContent = `Olá ${usuarioNome}!`;
        document.getElementById('desktop-login-icon').textContent = `logout`;
        document.getElementById('tablet-login-icon').textContent = `logout`;
        document.getElementById('mobile-login-icon').textContent = `logout`;

        document.getElementById('last-item-menu').textContent = `Sair`;
    } else {
        const sidebarItem = document.getElementById('sidebar-item-logged');
        const sidebarTabletItem = document.getElementById('sidebar-tab-item-logged');
        const sidebarMobileItem = document.getElementById('sidebar-mob-item-logged');
        sidebarItem.style.display = 'none';
        sidebarTabletItem.style.display = 'none';
        sidebarMobileItem.style.display = 'none';

        var elements = document.getElementsByClassName("bottom-menu-item");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.width = 20 + "%";
        }
    }
}

function refreshAllMenu() {
    document.getElementById('logout-desktop').addEventListener('click', function () {
        clearLocalStorage();
    });

    document.getElementById('logout-tablet').addEventListener('click', function () {
        clearLocalStorage();
    });

    document.getElementById('logout-mobile').addEventListener('click', function () {
        clearLocalStorage();
    });
}

function clearLocalStorage() {
    localStorage.removeItem('usuarioNome');
    localStorage.removeItem('usuarioEmail');
    localStorage.removeItem('usuarioSenha');
    window.location.href = 'login.html';
}
