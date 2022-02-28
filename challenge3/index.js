
const dolphins = [96, 108, 89]
const koalas = [88, 91, 110]

function average (array){
    let sum = 0
    for(let i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum/array.length
}

