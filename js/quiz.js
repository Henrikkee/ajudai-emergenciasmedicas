let questions = {
    question: "A dor está em qual parte do corpo?",
    answers: [
        {
            text: "Cabeça",
            sub: {
                question: "Você está tendo algum desses sintomas ?",
                answers: [
                    {
                        text: "Febre",
                        url: '/artigo.html?name=Intoxicações&title=Intoxicação%20alimentar'
                    }, {
                        text: "Gripe",
                        url: '/artigo.html?name=Intoxicações&title=Intoxicação%20alimentar'
                    }, {
                        text: "Falta de Respiração",
                        url: '/artigo.html?name=Intoxicações&title=Intoxicação%20alimentar'
                    }, {
                        text: "Desidratação",
                        url: '/artigo.html?name=Intoxicações&title=Intoxicação%20alimentar'
                    }
                ]
            }
        },{
            text: "Peito",
            url: '/artigo.html?name=Intoxicações&title=Intoxicação%20alimentar'
        },{
            text: "Abdômen",
            url: '/artigo.html?name=Quedas&title=Quedas'
        }, {
            text: "Joelhos",
            url: '/artigo.html?name=Queimaduras&title=Queimaduras'
        } 
    ]
}

let messages = [
    'Vamos começar',
    'Continuando...',
    'Quase lá',
    'Finalizando...'
]

let i = 0;

function setQuestion(questions){
    $(".quiz-helpMessage").text(messages[i]);
    $("#quiz-lblQuestion").text(questions.question);
    $("#quiz-listQuestion").html("")
    questions.answers.forEach(function(val) { 
        $("#quiz-listQuestion").append($("<li>" + val.text +"</li>").click(function(){
            console.log(val)
            if(val.sub) setQuestion(val.sub)
            else if(val.url) window.location.href = val.url
            else alert("Opção não consigurada, contacte o desenvolvedor")
        }))
    })
    i++;
}

$(function () {
    setQuestion(questions)
});