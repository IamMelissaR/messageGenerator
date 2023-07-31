//function to select random value from each array in the object
const generateRandomNum = (num) => { Math.floor(Math.random() * num)}

//object storing the arrays to be selected from
const collectiveHarryPotterInfo = {
    house: ['Gryffindor', 'Slytherin', 'Ravenvclaw', 'Hufflepuff'],
    qualityOfYear: ['super easy', 'challenging but satisfying', 'more magical than imaginable', 'dangerous...beware!', 'beyond confusing'],
    opponent: ['a troll', 'your relection', 'a ghost', 'Voldemort', 'Dumbledore']
}
//array to store (push to) the message
let personalMessage = []

//iterate over the object and then use switch to push the each selected value to the personalMessage array
for(let property in collectiveHarryPotterInfo) {
    let optionIdx = generateRandomNum(collectiveHarryPotterInfo[property].length)

    switch(property) {
        case 'house':
            personalMessage.push(`What house should you be in...hmm...better be...${collectiveHarryPotterInfo[property][optionIdx]}!`)
            break
        case 'qualityOfYear': personalMessage.push(`Your year at Hogwarts will be ${collectiveHarryPotterInfo[property][optionIdx]}.`)
            break
        case 'opponent':
            personalMessage.push(`You will have an epic battle against ${collectiveHarryPotterInfo[property][optionIdx]}`)
            break
        default: 
        personalMessage.push('Uh oh, something has gone wrong')
    }
}

console.log(personalMessage)
