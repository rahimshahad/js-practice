const calcAverage = (scores) => {
    let sum = 0;
    for (i = 0; i < scores.length; i++) {
        sum += scores[i]
    }
    return sum / scores.length
}

const dolphinsScores = [85, 54, 41]
const koalasScores = [23, 34, 27]

const dolphinsAvg = calcAverage(dolphinsScores)
const koalasAvg = calcAverage(koalasScores)

console.log(dolphinsAvg, koalasAvg)

function checkWinner(dolphinsAvg, koalasAvg) {
    if (dolphinsAvg >= koalasAvg * 2) {
        console.log(`Dolphins win (${dolphinsAvg} vs ${koalasAvg})`)
    } else if (koalasAvg >= dolphinsAvg * 2) {
        console.log(`Koalas win (${koalasAvg} vs ${dolphinsAvg})`)
    } else {
        console.log("There is no winner")
    }
}
checkWinner(dolphinsAvg, koalasAvg)