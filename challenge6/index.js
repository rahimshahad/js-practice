const calcTip = bill => bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill



console.log(calcTip(100))

const bills = [125, 555, 44]

// dynamic tip calculator function

function tip(bills) {
    let tips = []
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] >= 50 && bills[i] <= 300) {
            const tipped = 0.15 * bills[i]
            tips.push(tipped)
        } else {
            const tipped = 0.2 * bills[i]
            tips.push(tipped)
        }
    }
    return tips
}

console.log(tip(bills))

const tipsCup = tip(bills)

