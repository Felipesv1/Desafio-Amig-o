const btnMobile = document.getElementById('btn_mobile')


function toggleMenu(ev){
    if(ev.type === 'touchstart')
    {
        ev.preventDefault()
    }
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
    const active = nav.classList.contains('active')
    ev.currentTarget.setAttribute('aria-expanded',active)
    if(active){
        ev.currentTarget.setAttribute('aria-label','fechar menu')
    }else{
        ev.currentTarget.setAttribute('aria-label','Abrir menu')
        
    }
}

btnMobile.addEventListener('click',toggleMenu)
btnMobile.addEventListener('touchstart',toggleMenu)
