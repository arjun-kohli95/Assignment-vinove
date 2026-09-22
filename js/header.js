(function () {
  const toggle = document.querySelector('.header__toggle');
  const menu = document.querySelector('.header__mobile-menu');
  const iconMenu = document.querySelector('.icon-menu');
  const iconClose = document.querySelector('.icon-close');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', function () {
    const isOpen = menu.classList.toggle('is-open');
    iconMenu.style.display = isOpen ? 'none' : 'block';
    iconClose.style.display = isOpen ? 'block' : 'none';
  });

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('is-open');
      iconMenu.style.display = 'block';
      iconClose.style.display = 'none';
    });
  });
})();
