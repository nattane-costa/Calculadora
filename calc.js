// Seleciona o visor e todos os botões
const display = document.getElementById('display');
const buttons = document.querySelectorAll('#buttons .button');

// Função para atualizar o visor
function updateDisplay(value) {
   let temp = display.value + value;
   display.value = temp.replace(/\s+/g, '');
}

// Função para realizar o cálculo
function calculate() {
  try {
    const expression = display.value.
    replace(/,/g, '.')  // Substitui vírgula por ponto decimal - regex
    .replace(/×/g, '*')  // Substitui símbolo de multiplicação por * - regex
    .replace(/÷/g, '/'); // Substitui símbolo de divisão por / - regex

    // Usa eval() para calcular a expressão
    let result = eval(expression);  ///DANGERRRR! SECURUTY BREAK

    // Converte o ponto decimal do resultado para vírgula
    display.value = result.toString().replace('.', ',');
  
} catch (error) {
    display.value = "Erro";
  }
}

// Função para limpar o visor
function clearDisplay() {
  display.value = '';
}

// Adiciona o evento de clique a cada botão
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent;

    if (button.dataset.number) {
      // Se o botão for um número, adiciona o número ao visor
      // "truthy" ou "falsy" = undefined***,null,false,0, NaN
      console.log("Você apertou: " + button.dataset.number );
      updateDisplay(buttonValue);

    } else if (button.dataset.operation) {
      // Se for uma operação, adiciona a operação ao visor
      console.log("Numeros? " + button.dataset.number );
      console.log("Você apertou: "+ `${buttonValue}` );
      updateDisplay(`${buttonValue}`); //Interpolação de String

    } else if (button.dataset.clear) {
      // Se for o botão de limpar, limpa o visor
      console.log("Numeros? " + button.dataset.number );
      console.log("Você apertou: " + button.dataset.clear );
      clearDisplay();

    } else if (button.dataset.equal) {
        console.log("Numeros? " + button.dataset.number );
        console.log("Você apertou: " + button.dataset.equal );
      // Se for o botão de igual, realiza o cálculo
      calculate();

    } else if (button.dataset.decimal) {
      // Se for o botão de vírgula, adiciona a vírgula para decimais
      updateDisplay(',');
    }else if (button.dataset.parentheses || button.dataset.percentage){
        alert("Feature ainda não implementada! Sorry :/");
    }
  });  
});


document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); //previne o efeito padrão, a.k.a. apertar o botão novamente
        calculate();
    } 
  });
