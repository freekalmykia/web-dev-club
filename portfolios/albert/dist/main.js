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

menuButton.addEventListener('click', handleMenuButtonClick);

const closeButton = document.getElementById('menu-overlay').querySelector('div > svg');

closeButton.addEventListener('click', handleCloseButtonClick);

function handleMenuButtonClick() {
  console.log('menu button clicked!');
  const menu = document.getElementById('menu-overlay');
  menu.classList.remove('hidden');
}

function handleCloseButtonClick() {
  console.log('close button clicked');
  const menu = document.getElementById('menu-overlay');
  menu.classList.add('hidden');
}

// document.getElementById('trades-tracker').addEventListener('click', () => {
//   window.open('https://google.com', '_blank');
// })

//
// const card = document.getElementById('trades-tracker');
// card.addEventListener('click', () => {
//   window.open('https://google.com', '_blank');
// })

//
// function goto(url) {
//   window.open(url, '_blank');
// }

// const card1 = document.getElementById('trades-tracker');
// card1.addEventListener('click', () => goto(url))

