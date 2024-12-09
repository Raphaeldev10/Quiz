import React, { useState } from 'react';

const perguntas = [
  {
    pergunta: 'Qual é a capital do Brasil?',
    opcoes: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Belo Horizonte'],
    resposta: 'Brasília',
  },
  {
    pergunta: 'Quem descobriu o Brasil?',
    opcoes: ['Pedro Álvares Cabral', 'Cristóvão Colombo', 'Vasco da Gama', 'Fernão de Magalhães'],
    resposta: 'Pedro Álvares Cabral',
  },
  {
    pergunta: 'Quantos planetas existem no sistema solar?',
    opcoes: ['5', '7', '9', '8'],
    resposta: '8',
  },
];

function Quiz() {
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [respostasCorretas, setRespostasCorretas] = useState(0);
  const [quizFinalizado, setQuizFinalizado] = useState(false);

  const responderPergunta = (opcao) => {
    // Verifica se a resposta está correta
    if (opcao === perguntas[indicePergunta].resposta) {
      setRespostasCorretas(respostasCorretas + 1);
    }

    // Avança para a próxima pergunta ou finaliza o quiz
    if (indicePergunta + 1 < perguntas.length) {
      setIndicePergunta(indicePergunta + 1);
    } else {
      setQuizFinalizado(true);
    }
  };

  const reiniciarQuiz = () => {
    setIndicePergunta(0);
    setRespostasCorretas(0);
    setQuizFinalizado(false);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Quiz de Perguntas e Respostas</h1>
      {quizFinalizado ? (
        <div>
          <h2>Resultado</h2>
          <p>
            Você acertou {respostasCorretas} de {perguntas.length} perguntas!
          </p>
          <button onClick={reiniciarQuiz} style={{ padding: '10px', marginTop: '10px', cursor: 'pointer' }}>
            Reiniciar Quiz
          </button>
        </div>
      ) : (
        <div>
          <h2>Pergunta {indicePergunta + 1}</h2>
          <p>{perguntas[indicePergunta].pergunta}</p>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {perguntas[indicePergunta].opcoes.map((opcao, index) => (
              <li
                key={index}
                onClick={() => responderPergunta(opcao)}
                style={{
                  padding: '10px',
                  margin: '5px 0',
                  cursor: 'pointer',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  backgroundColor: '#f9f9f9',
                }}
              >
                {opcao}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Quiz;
