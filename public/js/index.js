$(() => {
  function validateAndSaveOption(btnId, inputName) {
    $(`#${btnId}`).click(e => {
      const selected = $(`input[name=${inputName}]:checked`).val();
      if (!selected) {
        e.preventDefault();
        alert("Por favor, selecione uma opção.");
      } else {
        localStorage.setItem(inputName, selected);
      }
    });
  }

  validateAndSaveOption("btn1", "question1"); // 1a
  validateAndSaveOption("btn2", "question2"); // 2b
  validateAndSaveOption("btn3", "question3"); // 3d

  const result = $("#result");

  if (result.length) {
    // Validate answers
    let correct = 0;
    if (localStorage.getItem('question1') == '1a') {
      correct++;
    }
    if (localStorage.getItem('question2') == '2b') {
      correct++;
    }
    if (localStorage.getItem('question3') == '3d') {
      correct++;
    }

    // Define result message
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
