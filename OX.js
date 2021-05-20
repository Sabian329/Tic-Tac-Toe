var body = document.querySelector("body");

var pX = document.querySelector(".X_score");

var pO = document.querySelector(".O_score");

var playerOne = document.querySelector(".player_one");
var playerOneBtn = document.querySelector(".add_Btn1");

var playerTwo = document.querySelector(".player_two");
var playerTwoBtn = document.querySelector(".add_Btn2");

var clickSoud = document.querySelector("#myAudio");

var winSound = document.querySelector("#myAudioWin");


function addPlayerOne(){
      var txtPlayers = document.createTextNode('1. '+playerOne.value);
      pX.appendChild(txtPlayers);
      playerOne.style.display = "none";
      playerOneBtn.style.display = "none";
      playerOne.style.textAlign= "center";
      clickSoud.play();
}
function addPlayerTwo(){
      var txtPlayers = document.createTextNode("2. "+playerTwo.value);
      pO.appendChild(txtPlayers);
      playerTwo.style.display = "none";
      playerTwoBtn.style.display = "none";
      playerTwo.style.textAlign= "center";
      clickSoud.play();
}

var clicks = 0;
function clicker(){
      clickSoud.play();
clicks++;
if(clicks == 10){
      location.reload();
};
if(clicks % 2 ===0){   
}else{     
}
};

var b1 = document.querySelector(".game_btn1");
var b2 = document.querySelector(".game_btn2");
var b3 = document.querySelector(".game_btn3");
var b4 = document.querySelector(".game_btn4");
var b5 = document.querySelector(".game_btn5");
var b6 = document.querySelector(".game_btn6");
var b7 = document.querySelector(".game_btn7");
var b8= document.querySelector(".game_btn8");
var b9 = document.querySelector(".game_btn9");

function drawFunction1(){     
      if(clicks % 2 === 0){
      var txto = document.createTextNode('X');
      b1.appendChild(txto);
      }else{
      var txtx = document.createTextNode('O');
      b1.appendChild(txtx);
      };
      console.log(b1.textContent+1);
};
function drawFunction2(){     
      if(clicks % 2 === 0){
            var txto = document.createTextNode('X');
            b2.appendChild(txto);
            }else{
            var txtx = document.createTextNode('O');
            b2.appendChild(txtx);
            };
            console.log(b2.textContent+2);
};
function drawFunction3(){     
      if(clicks % 2 === 0){
            var txto = document.createTextNode('X');
            b3.appendChild(txto);
            }else{
            var txtx = document.createTextNode('O');
            b3.appendChild(txtx);
            };
            console.log(b3.textContent+3);
};
function drawFunction4(){     
      if(clicks % 2 === 0){
            var txto = document.createTextNode('X');
            b4.appendChild(txto);
            }else{
            var txtx = document.createTextNode('O');
            b4.appendChild(txtx);
            };
            console.log(b4.textContent+4);
      };

function drawFunction5(){     
      if(clicks % 2 === 0){
            var txto = document.createTextNode('X');
            b5.appendChild(txto);
            }else{
            var txtx = document.createTextNode('O');
            b5.appendChild(txtx);
           };
           console.log(b5.textContent+5);
};
function drawFunction6(){     
      if(clicks % 2 === 0){
            var txto = document.createTextNode('X');
            b6.appendChild(txto);
            }else{
            var txtx = document.createTextNode('O');
            b6.appendChild(txtx);
            };
            console.log(b6.textContent+6);
};
function drawFunction7(){     
      if(clicks % 2 === 0){
            var txto = document.createTextNode('X');
            b7.appendChild(txto);
            }else{
            var txtx = document.createTextNode('O');
            b7.appendChild(txtx);
            };
            console.log(b7.textContent+7);
};
function drawFunction8(){     
      if(clicks % 2 === 0){
            var txto = document.createTextNode('X');
            b8.appendChild(txto);
            }else{
            var txtx = document.createTextNode('O');
            b8.appendChild(txtx);
            };
            console.log(b8.textContent+8);
};
function drawFunction9(){     
      if(clicks % 2 === 0){
            var txto = document.createTextNode('X');
            b9.appendChild(txto);
            }else{
            var txtx = document.createTextNode('O');
            b9.appendChild(txtx);
            };
            console.log(b9.textContent+9);
            
};

function cli(){

if(b4.textContent == "O" &&b5.textContent == "O" && b6.textContent == "O" ||
b1.textContent == "O" &&b2.textContent == "O" && b3.textContent == "O" ||
b7.textContent == "O" &&b8.textContent == "O" && b9.textContent == "O" ||
b1.textContent == "O" &&b4.textContent == "O" && b7.textContent == "O" ||
b2.textContent == "O" &&b5.textContent == "O" && b8.textContent == "O"||
b3.textContent == "O" &&b6.textContent == "O" && b9.textContent == "O"||
b1.textContent == "O" &&b5.textContent == "O" && b9.textContent == "O"||
b3.textContent == "O" &&b5.textContent == "O" && b7.textContent == "O" ){
      var pO = document.querySelector(".O_score");
      
      var scoreO = document.createTextNode(" Win !");
       var refreshPng = document.createElement("img");
      refreshPng.src = "icons/refresh.png";
      refreshPng.onclick = startAgain;
      pO.appendChild(scoreO);
      pO.appendChild(refreshPng);
      

      refreshPng.style.width = ("35px");
      refreshPng.style.height = ("35px");
      refreshPng.style.marginLeft = ("20px")
      
      function startAgain(){
            location.reload();
      };

      
}else if(b4.textContent == "X" &&b5.textContent == "X" && b6.textContent == "X"||
b1.textContent == "X" &&b2.textContent == "X" && b3.textContent == "X" ||
b7.textContent == "X" &&b8.textContent == "X" && b9.textContent == "X"||
b1.textContent == "X" &&b4.textContent == "X" && b7.textContent == "X"||
b2.textContent == "X" &&b5.textContent == "X" && b8.textContent == "X"||
b3.textContent == "X" &&b6.textContent == "X" && b9.textContent == "X"||
b1.textContent == "X" &&b5.textContent == "X" && b9.textContent == "X"||
b3.textContent == "X" &&b5.textContent == "X" && b7.textContent == "X"){
      var pX = document.querySelector(".X_score");
      var scoreX = document.createTextNode(" Win !")
      var refreshPng = document.createElement("img");
      refreshPng.src = "icons/refresh.png";
      refreshPng.onclick = startAgain;
     
      pX.appendChild(scoreX);
      pX.appendChild(refreshPng);

      refreshPng.style.width = ("35px");
      refreshPng.style.height = ("35px");
      refreshPng.style.marginLeft = ("20px")
      
      function startAgain(){
            location.reload();
      }; 
      }
};


