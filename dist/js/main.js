//Select DOM Items For Menu *********************************************
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

//Set Initial State of Menu
let showMenu = false;

//Listen for Click
menuBtn.addEventListener('click', toggleMenu);

//Show Or Hide Menu Items
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    navItems.forEach((item) => item.classList.add('show'));

    //Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach((item) => item.classList.remove('show'));

    //Set Menu State
    showMenu = false;
  }
}

//"Read More"/"Read Less" ***********************************************

//Select DOM Items
const moreDetailContainer = document.querySelectorAll('.more-detail-container');
const moreDetailBtns = document.querySelectorAll('.more-btn');

//Set State For for "More" / "Less" Details
let showDetails = false;

//Listen and Handle Event for "More" / "Less" Details

moreDetailContainer.forEach((item) =>
  item.querySelector('a').addEventListener('click', function () {
    if (!showDetails) {
      item
        .querySelectorAll('.more-detail')
        .forEach((details) => details.classList.add('active'));

      this.textContent = 'Read Less';

      showDetails = true;
    } else {
      item
        .querySelectorAll('.more-detail')
        .forEach((details) => details.classList.remove('active'));

      this.textContent = 'Read Details';
      showDetails = false;
    }
  })
);
