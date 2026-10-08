document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('nav');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('nav-open');
    });
  }

  // 2. Interactive Menu Category Filter (for menu.html)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const menuCategories = document.querySelectorAll('.menu-category');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active-filter'));
      btn.classList.add('active-filter');

      const filterValue = btn.getAttribute('data-filter');

      menuCategories.forEach(category => {
        if (filterValue === 'all' || category.dataset.category === filterValue) {
          category.style.display = 'block';
        } else {
          category.style.display = 'none';
        }
      });
    });
  });

  // 3. Dynamic "Add to Order" Selection & Total Counter
  const menuItems = document.querySelectorAll('.menu-item');
  let orderCount = 0;

  // Create a floating order badge if on the menu page
  const menuContainer = document.querySelector('.menu-container');
  if (menuContainer) {
    const orderBar = document.createElement('div');
    orderBar.className = 'order-bar';
    orderBar.innerHTML = `<span>Items selected: <strong id="order-count">0</strong></span>`;
    document.body.appendChild(orderBar);

    const countDisplay = document.getElementById('order-count');

    menuItems.forEach(item => {
      item.style.cursor = 'pointer';
      item.addEventListener('click', () => {
        item.classList.toggle('selected');
        if (item.classList.contains('selected')) {
          orderCount++;
        } else {
          orderCount--;
        }
        countDisplay.textContent = orderCount;
        orderBar.classList.toggle('visible', orderCount > 0);
      });
    });
  }
});