(function () {
  const items = document.querySelectorAll('.faq__item');

  items.forEach(function (item) {
    const btn = item.querySelector('.faq__question');

    btn.addEventListener('click', function () {
      const isActive = item.classList.contains('is-active');

      items.forEach(function (other) {
        other.classList.remove('is-active');
        other.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('is-active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();
