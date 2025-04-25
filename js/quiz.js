// script.js
let currentQuestion = 0;
let correctAnswers = 0;  // Nova variável para contar os acertos

const questions = [
    {
        question: "Quando começamos a nos falar?",
        options: ["28/05", "15/05", "24/05", "30/05"],
        correctAnswer: 0 // Resposta correta: Brownie de chocolate
    },
    {
        question: "Qual serie estamos assistindo",
        options: ["Breaking bad", "Vis a Vis", "Elite", "Você"],
        correctAnswer: 1 // Resposta correta: Caminhada no parque
    },
    {
        question: "Qual nosso lanche favorito?",
        options: ["Blackout", "Burguer King", "Abbatata", "Ki Lanchão"],
        correctAnswer: 2 // Resposta correta: "De Volta para o Futuro"
    },
    {
        question: "Onde foi nosso primerio beijo?",
        options: ["Carro", "My casa", "Lanchonete", "Igreja"],
        correctAnswer: 3 // Resposta correta: Viajar pelo mundo
    },
    {
        question: "Qual filme ja assistimos juntos?",
        options: ["Corra", "365 dias", "Bad Boys", "Até o ultimo homem"],
        correctAnswer: 3 // Resposta correta: Perfect – Ed Sheeran
    },
    {
        question: "Quais animais queremos ter?",
        options: ["Gato", "Cachorro", "Passaro", "Gato & Cachorro"],
        correctAnswer: 3 // Resposta correta: Perfect – Ed Sheeran
    },
    {
        question: "O que me faz rir?",
        options: ["Piadas", "Memes", "Cocegas", "Você🤣🫵"],
        correctAnswer: 2 // Resposta correta: Perfect – Ed Sheeran
    },
    {
        question: "Qual apelido carinhoso mais usamos?",
        options: ["Minha vida", "Querido(a)", "Meu Bem", "Amor"],
        correctAnswer: 3 // Resposta correta: Perfect – Ed Sheeran
    },
    {
        question: "Qual musica nos representa?",
        options: ["Vegas(i wanna ride)", "Sweater Weather", "R U Mine", "Beggin"],
        correctAnswer: 1 // Resposta correta: Perfect – Ed Sheeran
    },
    {
        question: "O que mais fazemos juntos?",
        options: ["Assistir", "Cozinhar", "Jogar", "Passear"],
        correctAnswer: 0 // Resposta correta: Perfect – Ed Sheeran
    },
    {
        question: "Qual foi o presente mais marcante?",
        options: ["Cartinhas", "Buquê", "Aliança", "Bobbie Goods"],
        correctAnswer: 2 // Resposta correta: Perfect – Ed Sheeran
    }
];

// Função para carregar as perguntas e opções
function loadQuestion() {
    const questionElement = document.getElementById("question");
    const options = document.querySelectorAll(".option");
    const feedback = document.getElementById("feedback");

    feedback.innerHTML = ""; // Limpa o feedback anterior

    if (currentQuestion < questions.length) {
        const currentQ = questions[currentQuestion];
        questionElement.innerText = currentQ.question;

        options.forEach((button, index) => {
            button.innerText = currentQ.options[index];
            button.onclick = function() { checkAnswer(index); };  // Adiciona o evento de clique diretamente nos botões
        });
    } else {
        // Exibe o resultado antes de redirecionar
        questionElement.innerText = `Você acertou ${correctAnswers} de ${questions.length} perguntas!`;
        document.querySelector(".options").style.display = "none";

        // Redireciona após 3 segundos com a exibição do resultado
        setTimeout(() => {
            window.location.href = `acabou.html`; // Passa o número de acertos pela URL
        }, 3000); // 3 segundos para o usuário ver o resultado
    }
}

// Função para checar a resposta e atualizar o contador de acertos
function checkAnswer(selected) {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    const feedback = document.getElementById("feedback");

    if (selected === correctAnswer) {
        correctAnswers++;  // Incrementa a contagem de acertos
        feedback.innerHTML = "Resposta correta! 🎉";
    } else {
        feedback.innerHTML = "Resposta errada. 😢 Vamos tentar de novo!";
    }

    currentQuestion++; // Avança para a próxima pergunta

    // Se ainda houver mais perguntas, carrega a próxima. Caso contrário, mostra o resultado.
    setTimeout(() => {
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            loadQuestion(); // Exibe o resultado final
        }
    }, 1000);
}

// Carregar a primeira pergunta
loadQuestion();
