const calcTip = bill => bill >=50 && bill <= 300 ? 0.15 * bill : 0.2 * bill
    


console.log(calcTip(100))