//MODAL

window.addEventListener('DOMContentLoaded', ()=> {
    const menuBtn = document.querySelector('#menu-btn')
    const dropdown = document.querySelector('#dropdown')
    const closeBtn = document.querySelector('#close-btn')

    menuBtn.addEventListener('click', () => {
        if(dropdown.classList.contains('hidden')){
            dropdown.classList.remove('hidden');
            dropdown.classList.add('flex');
        }
    })
    closeBtn.addEventListener('click', () => {
        if(dropdown.classList.contains('flex')){
            dropdown.classList.remove('flex');
            dropdown.classList.add('hidden');
        }
    })





})