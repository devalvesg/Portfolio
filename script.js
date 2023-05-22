var section2 = document.getElementById('sobreMim');
var section3 = document.getElementById('projetos');
var message = document.querySelector('.message');

window.addEventListener('scroll', function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop >= section2.offsetTop && scrollTop < section3.offsetTop) {
    message.classList.add('show');
  } else {
    message.classList.remove('show');
  }
});

// const botao = document.getElementsByClassName('btn-header');
const menu = document.getElementById('menu');
const close = document.getElementById('close');
const icon = document.getElementById('icon')

function navBar() {
  if (menu.style.display === 'none') {
    menu.style.display = 'flex'
    icon.style.display = 'none'
    close.style.display = 'flex'
    icon.add("rotacionando");
  }
  else {
    showOff()
  }

  menu.addEventListener('click', () => {
    showOff()
  })

};

function showOff() {
  menu.style.display = 'none'
  icon.style.display = 'flex'
  close.style.display = 'none'
}

window.sr = ScrollReveal({reset: true});

sr.reveal('#cabecalho', {duration: 1500})
sr.reveal('#inicio', {duration: 1500})
sr.reveal('#sobreMim', {duration: 1500})
sr.reveal('#habilidades', {duration: 1500})
sr.reveal('#projetos', {duration: 1500})
// sr.reveal('footer', {duration: 1500})