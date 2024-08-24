
const container = document.querySelector(".container");
const button = document.querySelector("button");
const screenY = window.innerHeight;

container.style.cssText = ` display: flex;
                            flex-direction: column; gap: 1px;
                            justify-content: space-around;
                            height: ${screenY * 0.5}px;
                            width: ${screenY * 0.5}px;
                            border: 1px solid black`

function makeGrid(numberOfSquares) {
    const row = document.createElement("div");

    row.style.cssText = `   display: flex;
                            justify-content: space-around;
                            gap: 1px;
                            flex: 1 1 auto;`

    row.className = "row";

    if(numberOfSquares > 100)
        numberOfSquares = 100;
    if(numberOfSquares <= 0 || isNaN(numberOfSquares))
        numberOfSquares = 1;
    for(let i = 0; i < numberOfSquares; i++) {
        const div = document.createElement("div");
        div.className = "square";
        div.style.border = "1px solid black";
        div.style.flexGrow = "1";
        div.setAttribute("isTouched", "true");
        row.appendChild(div);
    }
    
    for(let i = 0; i < numberOfSquares; i++) {
        const newRow = row.cloneNode(true);
        container.appendChild(newRow);
    }
}

container.addEventListener("mouseover", (e) => {
    if(e.target.className === "square") {
        if (e.target.getAttribute("isTouched") === "true") {
            const r = Math.random() * 256;
            const g = Math.random() * 256;
            const b = Math.random() * 256;
            e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            e.target.style.opacity = "0";
            e.target.setAttribute("isTouched", "false");
        }
        else e.target.style.opacity = `${Number(e.target.style.opacity) +0.1}`
    }
})

button.addEventListener("click", () => {

    const newNumberOfSquares = Number(prompt("Please enter the value for the new grid."));
    for(const row of document.querySelectorAll(".container .row")) {
        row.remove();
    }
    makeGrid(newNumberOfSquares);
})

makeGrid(16);