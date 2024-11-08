const { database } = require("./database.js")

let numOfDrovers = (herdSize) => { //created a new function that will take the herd size and return the value of the # of drovers needed
    const numNeeded = herdSize /10
    return numNeeded
}

const hireDrovers = (herdSize) => {
    const drovers = []
    const allDrovers = database.drovers
    const numberNeeded = herdSize / 10  //cattleToDrive was not a declared variable, changed to reference herdSize variable.

    for (let counter = 0; counter < numberNeeded; counter++) {
        const randomHerderId = Math.floor(Math.random() * allDrovers.length)
        drovers.push(allDrovers[randomHerderId])
    }
    return drovers //added a return call
}

module.exports = { hireDrovers, numOfDrovers} //added numOfDrovers to export
