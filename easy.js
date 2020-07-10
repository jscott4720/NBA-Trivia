console.log("This is the easy level")

let answers = document.querySelectorAll("p")
let complete = document.querySelector('.complete')
let question = document.querySelectorAll(".questions")
let popUp = document.querySelector(".popup")
let popUpImage = document.querySelector(".popupimage")

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
       popUp.innerText = `Your score is a WHOPPING ${score} .... this just might not be for you big dog`
       
   }
   else if (score > 30 || score <= 50 ){
       popUp.innerText = `You scored ${score}... probably not in your best interest to try the medium level`
   }
   
   else if (score > 50 || score <= 70) {
       popUp.innerText = `Your score is ${score}... Try again and you might pass`
   }
   else if (score <= 80) {
       popUp.innerText = `Your score is ${score}... you've completed the warm up click the medium level to continue`
   }
   else if (score <= 100){
       popUp.innerText = `Your score is 100... this quiz IS for you`
   }
}

