// setTimeout(() => {
//     console.log('Two seconds are up')
// }, 2000)


// const names = ['Jonah', 'Billy', 'Falesha']
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
    
//         callback(data)
//     }, 2000)

// }

// geocode('Philadelphia', (data) => {
//     console.log(data)
// })


const add = (numberOne, numberTwo, callback) => {
    setTimeout(() => {

        callback(numberOne + numberTwo)

    }, 2000)
}
add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})