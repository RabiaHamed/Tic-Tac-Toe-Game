let boxes = document.querySelectorAll('.box');
let btn = document.getElementById('reset');
var newBtn = document.getElementById('new-btn');
var msgBox = document.querySelector('.msg-box');
var msg = document.getElementById('msg');
var main = document.getElementById('main');




let turnO = true;

var winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

var restGame = ()=>{
    turnO= true;
    enableBoxes();
    msgBox.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        // console.log("click");
        if (turnO) {
            box.innerText = "O"
            turnO = false;
            box.style.color = "#870D3A";
        }else{
            box.innerText = "X"
            turnO = true;
            box.style.color = "purple";
        }
        box.disabled = true;

        checkWinner();
    })
});


var checkWinner = ()=>{
    for(pattern of winPatterns){
       
    var player1 = boxes[pattern[0]].innerText;
    var player2 = boxes[pattern[1]].innerText;
    var player3 = boxes[pattern[2]].innerText;

     if(player1 != "" && player2 != "" && player3 != ""){
        if(player1 === player2 && player2 === player3){
            // console.log("winner", player1 );
            showWinner(player1);
        }
     }


    }
}

var disabledBoxes = () =>{
    for(var box of boxes){
        box.disabled = true;
    }
}

var enableBoxes = () =>{
    for(var box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
var showWinner = (winner)=>{
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgBox.classList.remove("hide");
    disabledBoxes();
    main.style.display = "none"
}

newBtn.addEventListener("click", restGame);
btn.addEventListener("click", restGame);


function gameAgin() {
    main.style.display = "block";
}