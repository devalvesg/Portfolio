var section2 = document.getElementById('sobreMim');
var section3 = document.getElementById('projetos');
var message = document.querySelector('.message');

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop >= section2.offsetTop && scrollTop < section3.offsetTop) {
    message.classList.add('show');
  } else {
    message.classList.remove('show');
  }
});