function indexPage() {
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
  window.onload = () => {
    window.localStorage.setItem('dados', JSON.stringify(dados));
    hospitalForm.onsubmit = () =>{
      console.log('funciona');
      return true;
    }
  };
  let item = JSON.parse(window.localStorage.getItem('dados'));
  item.forEach((element) => {
    console.log(element.titulo);
  });


}
indexPage();
