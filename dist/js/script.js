const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percents = document.querySelectorAll('.progress__item-percent'),
      lines = document.querySelectorAll('.progress__item-line span');


percents.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});