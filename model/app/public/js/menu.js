function toggleMenu() {
    let list = document.getElementById('nav-wrapper');
    list.classList.toggle('active');
    if(list.classList.contains('active')) {
        list.style.left = "0%";
    } else {
        list.style.left = "-100%";
    }
}
document.getElementById('menu').addEventListener('click', toggleMenu);
document.getElementById('close-navbar').addEventListener('click', toggleMenu);