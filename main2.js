var player1 = localStorage.getItem("player1")
var player2 = localStorage.getItem("player2")

var player1Score = 0
var player2Score = 0

document.getElementById("player1Score").innerHTML= player1+": "
document.getElementById("player2Score").innerHTML= player2+": "

document.getElementById("player1Score").innerHTML= player1Score
document.getElementById("player2Score").innerHTML= player2Score

document.getElementById("playerQuestion").innerHTML= "Turno de pergunta - "+player1
document.getElementById("playerAnswer").innerHTML= "Turno de resposta - "+player2
var getWord,word 

function send() {
    getWord = document.getElementById("word").value
    word = getWord.toLowerCase()

    var charAt1= word.charAt(1);

    var legthDivide2 = Math.floor(word.length/2);
    var charAt2 = word.charAt(legthDivide2);

    var legthMinus1 = word.length - 1;
    var charAt3 = word.charAt(legthMinus1);

    var removeCharAt1 = word.replace(charAt1, "_");
    var removeCharAt2 = removeCharAt1.replace(charAt2, "_");
    var removeCharAt3 = removeCharAt2.replace(charAt3, "_");
    console.log(removeCharAt3)
    console.log(removeCharAt2)
    console.log(removeCharAt1)

    var questionWord = "<h4 id=wordDisplay'>P."+removeCharAt3+"</h4>"

    var inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>"

    var checkBtn = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>"

    var row = questionWord + inputBox + checkBtn;

    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

}

var questionTurn= "player1"
var answerTurn= "player2"
/*var getAnswer,answer*/

function check() {
    getAnswer = document.getElementById("inputCheckBox")
    answer = getAnswer.toLowerCase()
    if (answer==word) {
        if (answerTurn=="player1") {
            player1Score= player1Score + 1
            document.getElementById("player1Score").innerHTML = player1Score 
        } else {
            player2Score= player2Score + 1
            document.getElementById("player2Score").innerHTML = player2Score
        }
    }

    if (questionTurn=="player1") {
       questionTurn= "player2"
       document.getElementById("playerQuestion").innerHTML= "Turno de pergunta - "+player2 
    } else {
        questionTurn= "player1"
       document.getElementById("playerQuestion").innerHTML= "Turno de pergunta - "+player1
    }
    if (answerTurn=="player1") {
        answerTurn= "player2"
        document.getElementById("playerAnswer").innerHTML= "Turno de resposta - "+player2 
     } else {
         answerTurn= "player1"
        document.getElementById("playerAnswer").innerHTML= "Turno de resposta - "+player1
     }

    document.getElementById("output").innerHTML = "";

}