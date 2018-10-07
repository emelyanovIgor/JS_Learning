//"use strict";
console.clear(); // очистка консоли
const CELL_SIZE = 100; // создание поля для игры, размер, расположение на стрпанице, позиционирование 
const CELL_STYLES = {
    width: CELL_SIZE + "px",
    height: CELL_SIZE + "px",
    position: "absolute",
    textAlign: "center",
    fontSize: "50px"
};

const SIZE = 3; 
let positions = []; //создание пустого массива
let cells = []; //создание пустого массива

//создание поля 

createField(SIZE); //вызов функции createField

function createField(size) {  //функция createField
    let fieldContainer = document.getElementById("field");
    fieldContainer.style.position = "relative";
    
    let counter = 0;
    for (let i = 0; i < size; i++) { //один цикл
        positions[i] = []; 
        
        for (let j = 0; j < size; j++) { //другой цикл
            positions[i][j] = -1;
            counter++;
            cells.push(cell(fieldContainer, i, j, counter));
        }
    }
    return cells;
}

function cell(parent, i, j, counter) {
    let top = i;
    let left = j;
    let cell = document.createElement("BUTTON");
    setStyle(cell, CELL_STYLES);
    cell.style.top = top * CELL_SIZE + "px";
    cell.style.left = left * CELL_SIZE + "px";
    cell.textContent = "";
    cell.addEventListener("click", function (event) {
        listener(event, i, j, cell);
    });
    parent.appendChild(cell);
    return cell;
}

function setStyle(obj, styles) {
    for (let style in styles) {
        obj.style[style] = styles[style];
    }
}









//КРЕСТИКИ
function listener(event, i, j, cell) { //задание 5.1
    if (positions[i][j] === -1) {
        cell.textContent = "X";
        } else {
        return;
        }
    positions[i][j] = 1;
    let win = checkField(1);
    win ? console.log("player WIN") : computerStep() ? console.log("computer WIN") : console.log("next run");
}





//НОЛИК ХОД КОМПЬЮТЕРА
function computerStep() {
    let pos = checkFree();
    if (pos) {
        cells[pos[0] * SIZE + pos[1]].textContent = "O"
    } else {
        console.log("DRAW");
        return;
    }
    positions[pos[0]][pos[1]] = 0;
    let win = checkField(0);
    return win;
}
// ходы компьютера против игрока
function checkFree() {
    let freeCells = [];
    positions.forEach(function (row, i) {
        row.forEach(function (val, j) {
            if (positions[i][j] == -1) {
               freeCells.push([i, j]);
            }
        });
    });
    let freeCell = freeCells[Math.floor(Math.random() * freeCells.length)];
    return freeCell;
}

function checkField(value) {
    let win = false;
    let horizont = 0, vertical = 0, diagonalOne = 0, diagonalTwo = 0;
    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
            if (positions[i][j] == value) {
                horizont++;
            }
            for (let l = 0; l < SIZE; l++) {
                if (positions[l][j] == value) {
                    vertical++;
                }
            }
            if (i == j && positions[i][j] == value) {
                diagonalOne++;
            }
            if (i == (SIZE - j - 1) && positions[i][j] == value) {
                diagonalTwo++;
            }
            if (horizont == SIZE || vertical == SIZE || diagonalOne == SIZE || diagonalTwo == SIZE) {
                win = true;
            }
            vertical = 0;
        }
        horizont = 0;
    }
    return win;
}

function checkWin() {
    let win = false;
    return win;
}