turnX = true;
let boxes = document.querySelectorAll(".button");
let headingX = document.querySelector("#heading-container-X");
let headingO = document.querySelector("#heading-container-O");
let headingTie = document.querySelector("#heading-container-TIE");
let newGameButton = document.querySelector("#newGame");

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

function gameEnd(){
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

function checkTie(){
    count = 0
    boxes.forEach((box) => {
        if(box.innerText != ""){
            count += 1;
        }
    })
    if(count == 9){
        console.log("its a tie L");
        headingTie.style.display = "block";
    }
}

newGameButton.addEventListener("click", () => {
    headingO.style.display = "none";
    headingX.style.display = "none";
    headingTie.style.display = "none";
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    })
})

function checkWinner(){
    for(let sequence of winPatterns){
        let index1 = sequence[0];
        let index2 = sequence[1];
        let index3 = sequence[2];

        let value1 = boxes[index1].innerText;
        let value2 = boxes[index2].innerText;
        let value3 = boxes[index3].innerText;

        // console.log(value1, value2, value3);
        if(value1 != "" && value2 != "" && value3 != ""){
            if(value1 == value2 && value3 == value2){
                if(turnX){
                    headingX.style.display = "block";
                } else{
                    headingO.style.display = "block";
                }
                gameEnd();
            }
        }
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turnX){
            box.innerText = "X";
            turnX = false;
            box.disabled = true;
        } else{
            box.innerText = "O";
            turnX = true;
            box.disabled = true;
        }
        checkWinner();
        checkTie();
    })
})