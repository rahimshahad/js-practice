const bills = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const calcTip = bill => bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill
let tips = []
let totals = []

for(i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i])
    tips.push(tip)
    totals.push( tip + bills[i])
}

console.log(totals)

function calcAverage (arr){
    let sum = 0
    for(i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    const avg = sum/arr.length
    console.log(avg)
}

calcAverage(totals)