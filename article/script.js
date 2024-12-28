// JavaScript to toggle the "Show More" content
document.addEventListener('DOMContentLoaded', () => {
  const showMoreButtons = document.querySelectorAll('.show-more-btn');

  showMoreButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const cardContent = event.target.closest('.card-content');
      const extraContent = cardContent.querySelector('.extra-content');

      // Toggle visibility of the extra content for the clicked card only
      if (extraContent.style.display === 'none' || extraContent.style.display === '') {
        extraContent.style.display = 'block';
        event.target.textContent = 'Show Less';
      } else {
        extraContent.style.display = 'none';
        event.target.textContent = 'Show More';
      }
    });
  });
});

