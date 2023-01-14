const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')
const botaoMenuInterno = document.querySelector('.cabecalho__menu_interno')
const menuInterno = document.querySelector('.menu-lateral')
const overlay = document.querySelector('.overlay')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
    overlay.classList.toggle('overlay--ativo')
})

botaoMenuInterno.addEventListener('click', () => {
    menuInterno.classList.toggle('menu-lateral--ativo')
    overlay.classList.toggle('overlay--ativo')
})

