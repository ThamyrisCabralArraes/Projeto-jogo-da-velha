const clickJogar = () => {
  const divs = document.getElementsByClassName('celula');
  for (let index = 0; index < divs.length; index += 1) {
    divs[index].addEventListener('click', (event) => {
      event.target.textContent = 'T';
    });
  }
};

const divsFilhas = () => {
  const grid = document.querySelector('.grid');

  for (let index = 0; index < 9; index += 1) {
    const divs = document.createElement('div');
    divs.className = 'celula';
    divs.id = index;
    grid.appendChild(divs);
  }
  clickJogar();
};
divsFilhas();
