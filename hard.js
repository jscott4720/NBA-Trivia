console.log("This is the hard level")


let answers = document.querySelectorAll("p")

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
