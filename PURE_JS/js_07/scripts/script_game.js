//Game

// ****************************

//stage1
//создание красного прямоугольника

const red = 255;
const green = 0;
const blue = 0;

const W = 60;
const H = 100;

const blockStyles = {
    width: W + 'px',
    height: H + 'px',
    position: 'absolute'
};

const block = createBlock('DIV', blockStyles);
block.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
block.style.left = W + 'px';


function createBlock(type, style) {
    const block = document.createElement(type);
    for(let key in style)
    block.style[key] = style[key]
    return block;
}

document.body.appendChild(block);