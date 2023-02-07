function handleMouseEnter() {
    this.classList.add('s-card--hovered') //adiciona sozinho uma classe no elemento quando passa o mouse por cima
}

function handleMouseLeave() {
    this.classList.remove('s-card--hovered')
}

function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName('s-card');
    
    for (let index = 0; index < cardElements.length; index++){
        const card = cardElements[index]
        card.addEventListener('mouseenter', handleMouseEnter)
        card.addEventListener('mouseleave', handleMouseLeave)
    }
}

//espera a pagina toda carregar pra executar a função
document.addEventListener("DOMContentLoaded", addEventListenersToCards, false)



