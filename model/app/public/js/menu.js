function toggleMenu() {
    let list = document.getElementById('nav-content');
    list.classList.toggle('active');
    if(list.classList.contains('active')) {
        list.style.transform = "translateY(210px)";
    } else {
        list.style.transform = "translateY(0px)";
    }
}
function toggleMode() {
    let page = document.getElementById('page');
    page.classList.toggle('dark');
    page.classList.toggle('light');
}
document.getElementById('menu').addEventListener('click', toggleMenu);
document.getElementById('modes').addEventListener('click', toggleMode);