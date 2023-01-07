const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})

const botaoMenuInterno = document.querySelector('.cabecalho__menu_interno')
const menuInterno = document.querySelector('.menu-lateral')

botaoMenuInterno.addEventListener('click', () => {
    menuInterno.classList.toggle('menu-lateral--ativo')
})