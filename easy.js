console.log("This is the easy level")

let answers = document.querySelectorAll("p")

console.log(answers)

for (i = 0; i < answers.length; i++) {
    let buttons = answers[i]
    buttons.addEventListener("click", beenClicked)

    function beenClicked(e){
        console.log(e)
    }
}