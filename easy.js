console.log("This is the easy level")

let answers = document.querySelectorAll("p")
let complete = document.querySelector('.complete')
let question = document.querySelectorAll(".questions")
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
}

