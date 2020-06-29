document.querySelector('.hamburger').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.sidebar').classList.toggle('hide');
});