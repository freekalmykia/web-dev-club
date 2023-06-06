console.log('Hi, I am main.js!');

const menuButton = document.getElementById('menu-button');

console.log('menuButton: ', menuButton);

function handleMenuButtonClick() {
  console.log('menu button clicked!');
  const menu = document.getElementById('menu-overlay');
  menu.classList.remove('hidden');
}


menuButton.addEventListener('click', handleMenuButtonClick);