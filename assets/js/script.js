function showFrame(frameId) {
    document.querySelectorAll('.frame-content').forEach(div => {
        div.style.display = 'none';
    });
    document.getElementById(frameId).style.display = 'block';
}
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white.svg";
    }
}