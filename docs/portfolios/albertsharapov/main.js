console.log('Hi, I am main.js!');

// add smooth scrolling on anchor links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', event => {
    event.preventDefault();
    const id = anchor.getAttribute('href').replace('#', '');
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  })
})

document.getElementById('hero-section-button').addEventListener('click', () => {
  document.getElementById('my-work').scrollIntoView({ behavior: 'smooth' })
})

const menuButton = document.getElementById('menu-button');

menuButton.addEventListener('click', handleMenuButtonClick);

const closeButton = document.getElementById('menu-overlay').querySelector('div > svg');

closeButton.addEventListener('click', handleCloseButtonClick);

function handleMenuButtonClick() {
  const menu = document.getElementById('menu-overlay');
  menu.classList.remove('hidden');
  document.body.classList.add('h-screen');
  document.body.classList.add('overflow-hidden');
}

function handleCloseButtonClick() {
  const menu = document.getElementById('menu-overlay');
  menu.classList.add('hidden');
  document.body.classList.remove('h-screen');
  document.body.classList.remove('overflow-hidden');
}

