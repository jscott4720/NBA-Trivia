console.log("This is the hard level")


let answers = document.querySelectorAll("p")
let complete = document.querySelector('.complete')
let popUp = document.querySelector(".popup")

let score = 0

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
    popUp.style.opacity = 1  
    if (score <= 30){
        popUp.innerText = `Your score is a WHOPPING ${score} .... you get a D for effort I guess`
        
    }
    else if (score > 30 || score <= 50 ){
        popUp.innerText = `You scored ${score}... its admirable you got this far to be completely honest`
    }
    
    else if (score > 50 || score <= 70) {
        popUp.innerText = `Your score is ${score}... SOOO close but no cigar`
    }
    else if (score <= 80) {
        popUp.innerText = `Your score is ${score}... If I knew how to add applause I would`
    }

    else if (score <= 100) {
        popUp.innerText = `Your score is 100, you are the GOAT.`
    }
}