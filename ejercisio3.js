//factorial-for.js 
let fact = 1
for (let i = 1; i <= 10; i++) {
    fact *= i
}
console.log(fact)

//factorial-while.js
let j = 1
let facto = 1
while (j <= 10) {
    facto *= j
    j++
}
console.log(facto)

//factorial-break.js
let k = 1
let factu = 1
while (k <= 100) {
    if (k === 11) break
    factu *= k
    k++
}

console.log(factu)