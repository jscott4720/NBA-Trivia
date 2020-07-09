console.log("This is the easy level")

let answers = document.querySelectorAll("p")
let complete = document.querySelector('.complete')
let separator = document.querySelectorAll(".separator")
let score = 0 
let currentQuestion = 0;
let lastQuestion = 0;
let nextQuestion = 0;
let questionAnswered = 0;

console.log(answers)

for (i = 0; i < answers.length; i++) {
    let buttons = answers[i]
    
    buttons.addEventListener("click", beenClicked)
    

    function beenClicked(e){
        console.log(e)
        if (e.target.attributes[0].nodeValue == "Correct") {
            score+=10
        }

        
    }
    
}

complete.addEventListener('click', grade)
function grade(){
    alert(`Your score is ${score}`)
}
window.onload = function beginTrivia() {
    separator[currentQuestion].style.display = "block"
}
console.log(separator)