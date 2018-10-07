//Game

// ****************************

//stage1
//создание красного прямоугольника

const red = 255;
const green = 0;
const blue = 0;

const W = 60;
const H = 100;
const SIZE = 5;
const TYPE = "div";

const blockStyles = {
  width: W + "px",
  height: H + "px",
  position: "absolute"
};

createBlocks(SIZE, TYPE, blockStyles);

function createBlocks(size, type, styles) {
  for (let i = 0; i < size; i++) {
    const block = createBlock("type", styles);
    block.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    block.style.left = (W + 2) * i + "px";

    document.body.appendChild(block);
  }
}

function createBlock(type, style) {
  const block = document.createElement(type);
  for (let key in style) block.style[key] = style[key];
  return block;
}



function generateColor(from, to, size) {
    const colors = [];
    const step =  (to - from) / (size - 1)  ;

    for (let i = 0; i < size; i++) {
        colors.push(from + step * i);
    }
    return colors;

}

console.log(generateColor(0, 200, 5));