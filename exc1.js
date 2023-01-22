var enterButton = document.getElementById('enterButton');
var againButton = document.getElementById('againButton');
var randomNumber = Math.ceil(Math.random()*100);
var numGuesses = 0;

function checkNumber() {
    numGuesses++;
    var userInput = document.getElementById('userInput').value;
    if(userInput == randomNumber){
        alert("ถูกต้อง "+ ", "+ " ค่าที่ถูกคือ : "+ randomNumber + ". คุณทายไปทั้งหมด " + numGuesses + " ครั้ง");
    }
    else if(userInput > randomNumber && userInput < 100){
        alert("You guessed too high, มากกว่า");
    }
    else if(userInput < randomNumber && userInput > 1){
        alert("You guessed too low, น้อยกว่า");
    }
    else if(userInput < 1){
        alert("Higher, it has to be between 1 and 100");
    }
    else if(isNaN(userInput)){
        alert("That's not a number!!");
    }
    else{
        alert("Lower, it has to be between 1 and 100");
    }
}

enterButton.addEventListener('click', checkNumber);
againButton.addEventListener('click', function(){
    location.reload();
});
