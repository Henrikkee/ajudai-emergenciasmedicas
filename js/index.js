window.onload = () => {
  const dados = [
    {
      titulo: 'Acidente de carro',
      img: 'img/justlogo.png',
    },
    {
      titulo: 'Acidente de carro',
      img: 'img/justlogo.png',
    },
  ];

  window.localStorage.setItem('dados', JSON.stringify(dados));

  hospitalForm.onsubmit = () => {
    return console.log('funciona');
  };
};
