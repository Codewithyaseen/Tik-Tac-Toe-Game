const  box = document.querySelectorAll(".box");
const  msg = document.querySelector(".msg");
const  msgBox = document.querySelector(".msg-box");
const  newGame = document.querySelector(".newbtn");
const  resetGame = document.querySelector(".reset");

let turn0 = true;
let count = 0;

let winPattern = [
    [0, 1 , 2],
    [0, 3 , 6],
    [0, 4 , 8],
    [1, 4 , 7],
    [2, 5 , 8],
    [2, 4 , 6],
    [3, 4 , 5],
    [6, 7 , 8],
];

resetGame.style.display = "none";

box.forEach((boxes)=>{
    boxes.addEventListener("click",()=>{
       if(turn0 === true){
            boxes.innerText = "O";
            boxes.classList.add("black")
            turn0 = false;
       }else{
            boxes.innerText = "X"
            boxes.classList.add("red")
            turn0 = true
       }
       boxes.disabled = true;
       resetGame.style.display = "block";
       count++;
       let isWinner = checkWinner();
       if(count === 9 && !isWinner){
            msg.innerHTML = `Game was draw ! Play Again`;
            newGame.style.display = "block";
       }
       
    })
})

function checkWinner(){
    for(let pattern of winPattern){
        let pos1 = box[pattern[0]].innerHTML;
        let pos2 = box[pattern[1]].innerHTML;
        let pos3 = box[pattern[2]].innerHTML;
        if(pos1 != "" && pos2 != "" && pos3 != "" ){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("Winner  ",pos1);
                ShowWinner(pos1);
                box.forEach(boxes => {
                    boxes.disabled = true;
                });
                newGame.style.display = "block"
                return true;
            }
        }
    }
    return false;
}

function ShowWinner(winner){
    msg.innerText = `Congratualtion winner is '${winner}'`;

}

newGame.addEventListener("click",()=>{
    for(let boxes of box){
        boxes.disabled = false
        boxes.innerHTML = ""
        boxes.classList.remove("black", "red");
    }
    msg.innerHTML = "";
    turn0 = true;
    count = 0;
    newGame.style.display = "none";
    resetGame.style.display = "none"
})

resetGame.addEventListener("click",()=>{
    for(let item of box){
        item.innerHTML = "";
        item.disabled = false;
        msg.innerHTML = "";
        item.classList.remove("black", "red");
    }
    msg.innerText = "";
    turn0 = true;
    resetGame.style.display = "none"
    count = 0; // Count reset
    newGame.style.display = "none"; 
    
})