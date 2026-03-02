const categories = document.querySelectorAll('.categories li');

categories.forEach(cat => {
  cat.addEventListener('click', () => {
    const target = document.getElementById(cat.dataset.target);

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
