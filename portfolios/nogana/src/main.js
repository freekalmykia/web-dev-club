const menuButton = document.getElementById('menu-button');

menuButton.addEventListener('click', handleMenuButtonClick);

function handleMenuButtonClick() {
    const menuOverlay = document.getElementById('menu-overlay');
    menuOverlay.classList.remove('hidden');
}

const closeButton = document.getElementById('menu-overlay').querySelector('div > svg');

function closeMenuOverlay() {
    console.log('closing');
    const menuOverlay = document.getElementById('menu-overlay');
    menuOverlay.classList.add('hidden');
}

closeButton.addEventListener('click', closeMenuOverlay);