"use strict"

// TASK1

//   Шаг #1

//     - Добавьте на страницу div.panel. Расположите в нем кнопку «+».
//     - Каждый раз при нажатии кнопки «+» в div.panel должна добавляться группа DOM узлов, а 
//       именно div.input-group>input:text+button{-}. То есть коробка с инпутом и кнопкой.
//     - При нажатии на кнопку «-» должен удаляться родительский для нее div.input-group, таким 
//       образом удаляя input и button.
const addInputGroup = function () {
    let panel = document.querySelector('.panel');
    let inputGroup = document.createElement('div');
    let input = document.createElement('input');
    let button = document.createElement('button');
    inputGroup.classList.add('input-group');
    input.type = 'text';
    button.classList = ('button minus');
    button.innerHTML = '-';
    panel.appendChild(inputGroup);
    inputGroup.appendChild(input);
    inputGroup.appendChild(button);
    let minusButtons = document.querySelectorAll('.button.minus');
    minusButtons.forEach(function(minusButton) {
        minusButton.addEventListener('click', delInputGroup);
    })
}

const delInputGroup = function() {
    let parentNode = this.parentNode;    
    parentNode.remove();
} 

let plusButton = document.querySelector('.button.plus');
plusButton.addEventListener('click', addInputGroup);

