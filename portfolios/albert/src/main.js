console.log('Hi, I am main.js!');

// add smooth scrolling on anchor links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', event => {
    event.preventDefault();
    const id = anchor.getAttribute('href').replace('#', '');
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  })
})

const menuButton = document.getElementById('menu-button');

console.log('menuButton: ', menuButton);

menuButton.addEventListener('click', handleMenuButtonClick);

const closeButton = document.getElementById('menu-overlay').querySelector('div > svg');

console.log('closeButton: ', closeButton);

const handleCloseButtonClick = () => {
  console.log('close button clicked');
  const menu = document.getElementById('menu-overlay');
  menu.classList.add('hidden');
}

closeButton.addEventListener('click', handleCloseButtonClick);

function handleMenuButtonClick() {
  console.log('menu button clicked!');
  const menu = document.getElementById('menu-overlay');
  menu.classList.remove('hidden');
}

