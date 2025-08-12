document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.learn-more');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Aquí podríamos mostrar más información del producto.');
    });
  });
});
