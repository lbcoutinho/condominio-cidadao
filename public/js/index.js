$(() => {
  $("#startTest").click(function() {
    localStorage.correct = 0;
  });

  function validateAndSaveOption(btnId, inputName, correctOption) {
    $(`#${btnId}`).click(e => {
      const selected = $(`input[name=${inputName}]:checked`).val();
      if (!selected) {
        e.preventDefault();
        alert("Por favor, selecione uma opção.");
      } else if (selected == correctOption) {
        localStorage.correct = parseInt(localStorage.correct) + 1;
      }
    });
  }

  validateAndSaveOption("btn1", "question1", "1a");
  validateAndSaveOption("btn2", "question2", "2b");
  validateAndSaveOption("btn3", "question3", "3d");

  const result = $("#result");

  if (result.length) {
    const correct = parseInt(localStorage.correct);
    if (correct == 0) {
      result.html(
        "Infelizmente você não acertou nenhuma resposta. Sugerimos que leia novamente com atenção os valores e princípios do Manifesto e tente novamente."
      );
    } else if (correct == 1) {
      result.html(
        "Você acertou apenas 1 resposta. Sugerimos que leia novamente os valores e princípios do Manifesto e tente novamente."
      );
    } else if (correct == 2) {
      result.html(
        "Você acertou 2 respostas. É um bom resultado, mas sugerimos que leia novamente os valores e princípios do Manifesto para esclarecer qualquer dúvida."
      );
    } else if (correct == 3) {
      result.html(
        "Parabéns! Você acertou todas as respostas e está no caminho certo para tornar o seu condomínio mais cidadão."
      );
    }
  }
});
