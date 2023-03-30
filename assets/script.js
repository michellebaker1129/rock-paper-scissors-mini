// Ask user for R, P, or S?
// Select form value from index page
let button = document.querySelectorAll(".choice");
console.log(button);

// Add event listener to form
// Capture user input

// Check the input IS R, P or S


// Compare user and computer values

// Log wins, ties or losses
let ties = 0;
let wins = 0;
let losses = 0;

// Ask user to play again
// button.addEventListener("click",function(event){
//     event.preventDefault()

//     let userChoice;

//     console.log(event)
//     console.log(this)
// })

button.forEach(function (choice) {
  console.log(choice);



  choice.addEventListener("click", function () {
    let userChoice = this.value;
    console.log(userChoice);

      // Write a function to get R,P or S from my computer
let choiceArr = ["R", "P", "S"];
let index = Math.floor(Math.random() * choiceArr.length);
let computerChoice = choiceArr[index];
console.log(computerChoice);


    if (userChoice === computerChoice) {
      ties++;
        console.log(userChoice,"vs", computerChoice)
    } else if (computerChoice === "R") {
        console.log(userChoice,"vs", computerChoice)
      if (userChoice === "P") {
        wins++;
      } else {
        losses++;
      }
    } else if (computerChoice === "P") {
        console.log(userChoice,"vs", computerChoice)
        if (userChoice === "S") {
            wins++;
        } else {
            losses++
        }
    }

    else if (computerChoice === "S") {
        console.log(userChoice,"vs", computerChoice)
        if (userChoice === "R") {
            wins++;
        } else { 
            losses++
        }
    }

    let winsEl= document.getElementById("Wins")
    let tiesEl= document.getElementById("Ties")
    let lossesEl= document.getElementById("Losses")

    winsEl.textContent = wins
    tiesEl.textContent = ties
    lossesEl.textContent = losses

});
});