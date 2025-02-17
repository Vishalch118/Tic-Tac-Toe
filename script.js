let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGame = document.querySelector("#newGame");
let msg = document.querySelector(".msg");
let msg1 = document.querySelector("#msg");
let turnO = true;

let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const disableBoxes = () => {
    boxes.forEach((box) => box.disabled = true);
};

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
};

const showWinner = (winner) => {
    msg1.innerText = `Congrats, Winner is ${winner}`;
    msg.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of win) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 !== "" && val1 === val2 && val2 === val3) {
            showWinner(val1);
            return;
        }
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        box.innerText = turnO ? "O" : "X";
        box.disabled = true;
        turnO = !turnO;
        checkWinner();
    });
});

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msg.classList.add("hide");
};

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
