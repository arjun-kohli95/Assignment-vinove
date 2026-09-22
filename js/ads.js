(function () {
  const announcements = [
    '10-DAY REPLACEMENT GUARANTEE',
    'PROFILES IN 48 HOURS',
    '94% ON-TIME DELIVERY',
    '2,500+ PROJECTS DELIVERED',
    '675+ ENGINEERS ACTIVE',
    '4.8* ON CLUTCH',
    '20+ YEARS IN SOFTWARE DELIVERY',
    'ISO 27001 CERTIFIED'
  ];

  function buildSet(container) {
    announcements.forEach(function (text) {
      const item = document.createElement('span');
      item.className = 'ads__item';
      item.textContent = text;
      container.appendChild(item);

      const dot = document.createElement('span');
      dot.className = 'ads__dot';
      dot.textContent = '•';
      container.appendChild(dot);
    });
  }

  const set1 = document.getElementById('ads-set-1');
  const set2 = document.getElementById('ads-set-2');

  if (set1) buildSet(set1);
  if (set2) buildSet(set2);
})();
