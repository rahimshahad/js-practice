const jonMass = 92
const markMass = 78

const jonHeight = 1.95
const markHeight = 1.69

// const bmi = (mass, height) => {
//     mass / height ** 2
// }
function bmi(mass, height){
    return mass / height ** 2;
}

jonBMI = bmi(jonMass, jonHeight)
markBMI = bmi(markMass, markHeight)
console.log(jonBMI)
console.log(markBMI)

const markHigherBMI = markBMI > jonBMI
console.log(markHigherBMI)