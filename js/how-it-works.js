(function () {
  const items = document.querySelectorAll('.hiw__accordion-item');

  items.forEach(function (item) {
    const btn = item.querySelector('.hiw__accordion-btn');

    btn.addEventListener('click', function () {
      const isActive = item.classList.contains('is-active');

      items.forEach(function (other) {
        other.classList.remove('is-active');
      });

      if (!isActive) {
        item.classList.add('is-active');
      }
    });
  });
})();
