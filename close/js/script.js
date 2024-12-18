function toggleSwitch(element) {
    element.classList.toggle('active');
}
function toggleMenu() {
    const menu = document.getElementById('menu');
    const toggle = document.querySelector('.menu-toggle');
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
}