// const square = function (x) {
//     return x *  x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(2))

const event = {
    name: 'Birthday Party',
    guessList: ['Jonah', 'Falesha', 'Greg'],
    printGuessList() {
        console.log('Guest list for '+ this.name)

        this.guessList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuessList()
