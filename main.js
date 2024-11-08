const { roundup } = require("./cattle.js")
const { hireDrovers, numberOfDrovers, numOfDrovers } = require("./drovers.js") //updated to add numOfDrovers function
const { journeyMaker } = require("./journey.js")

const cattleToDrive = 50
const drovers = hireDrovers(cattleToDrive)
const cattle = roundup(cattleToDrive)
const journey = journeyMaker()
const droverCount = numOfDrovers(cattleToDrive) //created a variable that called the numOfDrovers function

console.log(`
************************************************
**  K A N S A S   S L I M ' S   C A T T L E   **
************************************************

\\|/         (__)
     '\------(oo)
       ||   (__)               \\|/
       ||w--||     \\|/
   \\|/
            \\|/                     (__)
                             '\------(oo)
                               ||   (__)
                               ||w--||     \\|/
`)

console.log(`You will be accompanying ${droverCount} drovers as they drive ${cattleToDrive} cattle to Old Red's Ranch for grazing`)
console.log(`\nThe herd is made of up the following cattle (only their breed is shown):`)  

//loop  through and get the breed for each cow, need all 50 breeds.
const cattleBreedArr = []
for (const cow of cattle) {
    const cowBreed = cow.breed
    cattleBreedArr.push(cowBreed) 
} 
console.log(`${cattleBreedArr}\n`) //replaced with cattleBreedArr that lists the breeds of all cattle in a more abbreviated fashion.

console.log("Here is the team of drovers you will be joining")
for (const drover of drovers) {
    console.log(`\t* ${drover.first_name} ${drover.last_name}`)
}

console.log("\n\nYour journey will take you through the wildness of the American Midwest and across the following terrain")
for (const area of journey) {
    console.log(`\t* ${area}`)
}
