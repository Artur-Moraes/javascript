let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()

let pos = num.indexOf(0)
if  (pos == -1){
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}

