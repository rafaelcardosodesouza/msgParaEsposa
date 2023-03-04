const coresAleatorias = ['#00FFFF', '#ef9488', '#7FFFD4', '#d1b9b6', '#98FB98', '#6decff'];

const msgUns = document.querySelectorAll('.msgUn');
msgUns.forEach((msgUn) => {
  msgUn.addEventListener('mouseenter', () => {
    const corAleatoria = coresAleatorias[Math.floor(Math.random() * coresAleatorias.length)];
    msgUn.classList.add('msgUnHover');
    msgUn.style.backgroundColor = corAleatoria;
  });
  
  msgUn.addEventListener('mouseleave', () => {
    msgUn.classList.remove('msgUnHover');
    msgUn.style.backgroundColor = '';
  });
});


