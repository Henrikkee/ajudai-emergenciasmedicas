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

var adapter = new LocalStorage('db')
var db = low(adapter)

db.defaults({ items: [
  {
    name: 'Acidente de Carro',
    sections: [
      {
        nome: 'Atropelamento',
        articles: [
          {
            title: 'Conteudo Teste',
            content: 'Conteudo do artigo',
            image: 'image content'
          }
        ]
      }
    ]
  },
  {
    name: 'Sangramento',
    sections: [
      {
        nome: 'Atropelamento',
        articles: [
          {
            title: 'Conteudo Teste',
            content: 'Conteudo do artigo',
            image: 'image content'
          }
        ]
      }
    ]
  },
  {
    name: 'Doença Respiratória',
    sections: [
      {
        nome: 'Atropelamento',
        articles: [
          {
            title: 'Conteudo Teste',
            content: 'Conteudo do artigo',
            image: 'image content'
          }
        ]
      }
    ]
  },
  {
    name: 'Doença Cardiaca',
    sections: [
      {
        nome: 'Atropelamento',
        articles: [
          {
            title: 'Conteudo Teste',
            content: 'Conteudo do artigo',
            image: 'image content'
          }
        ]
      }
    ]
  },
  {
    name: 'Pressão Alta/Baixa',
    sections: [
      {
        nome: 'Atropelamento',
        articles: [
          {
            title: 'Conteudo Teste',
            content: 'Conteudo do artigo',
            image: 'image content'
          }
        ]
      }
    ]
  },
  {
    name: 'Alergia',
    sections: [
      {
        nome: 'Atropelamento',
        articles: [
          {
            title: 'Conteudo Teste',
            content: 'Conteudo do artigo',
            image: 'image content'
          }
        ]
      }
    ]
  },
  {
    name: 'Depressão',
    sections: [
      {
        nome: 'Atropelamento',
        articles: [
          {
            title: 'Conteudo Teste',
            content: 'Conteudo do artigo',
            image: 'image content'
          }
        ]
      }
    ]
  },
  {
    name: 'Diabetes',
    sections: [
      {
        nome: 'Atropelamento',
        articles: [
          {
            title: 'Conteudo Teste',
            content: 'Conteudo do artigo',
            image: 'image content'
          }
        ]
      }
    ]
  },
  {
    name: 'Asma',
    sections: [
      {
        nome: 'Atropelamento',
        articles: [
          {
            title: 'Conteudo Teste',
            content: 'Conteudo do artigo',
            image: 'image content'
          }
        ]
      }
    ]
  },
]}).write()

console.log(db.get('items').value())
console.log('here')