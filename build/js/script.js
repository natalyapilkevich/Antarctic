'use strict';

(function () {
  var headerNav = document.querySelector('.header__nav');
  var navToggle = document.querySelector('.header__nav button');
  var logo = document.querySelector('.header svg');

  headerNav.classList.remove('header__nav--nojs');
  headerNav.classList.remove('header__nav--opened');
  headerNav.classList.add('header__nav--closed');

  navToggle.addEventListener('click', function () {
    if (headerNav.classList.contains('header__nav--closed')) {
      headerNav.classList.remove('header__nav--closed');
      headerNav.classList.add('header__nav--opened');
      logo.style.stroke = '#011C40';
    } else {
      headerNav.classList.add('header__nav--closed');
      headerNav.classList.remove('header__nav--opened');
      logo.style.stroke = '#F9FBFD';
    }
  });
})();
