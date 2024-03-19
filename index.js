document.addEventListener('DOMContentLoaded', function() {
    const inputElem = document.querySelector('input');
    const buttons = document.querySelectorAll('button');
    let expression = '';
  
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent === '=') {
                try {
                    inputElem.value = eval(expression);
                } catch (error) {
                    inputElem.value = 'Error';
                }
            } else if (button.textContent === 'AC') {
                expression = '';
                inputElem.value = '';
            } else if (button.textContent === 'clear') {
                expression = expression.slice(0, -1);
                inputElem.value = expression;
            } else if (button.textContent === 'x') {
                expression += '*'; // Using * for multiplication
                inputElem.value = expression;
            } else {
                expression += button.textContent;
                inputElem.value = expression;
            }
        });
    });
  });
  