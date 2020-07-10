console.log("This is the medium level")


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

        if (score == 100){
            alert ("you win!")
        }


    }
}

complete.addEventListener('click', grade)
function grade(){
    popUp.style.opacity = 1  
    if (score <= 30){
        popUp.innerText = `Your score is a WHOPPING ${score} .... you peaked at the first level`
        
    }
    else if (score > 30 || score <= 50 ){
        popUp.innerText = `You scored ${score}... the internet is a valuable too;`
    }
    
    else if (score > 50 || score <= 70) {
        popUp.innerText = `Your score is ${score}... Try again and you might pass`
    }
    else if (score <= 80) {
        popUp.innerText = `Your score is ${score}... you must really be a fan. Try the hard level`
    }
    else if (score <= 100){
        popUp.innerText = `Your score is 100... you're hot right now go for broke on the next level`
    }
}