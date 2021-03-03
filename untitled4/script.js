let data = [5, 1, 4, 3, 6, 10, 21, 31, 244, 18, 213, 122, 4214]
let names = ['Mary', 'Kate', 'Alice', 'Vladilen', 'Tatyana', 'Andrew', 'Stephan']

function selectionSort(array) {
    let arrayLength = array.length
    let newArray = []

    function findSmallest(array) {
        let smallest = array[0]
        let smallestIndex = 0
        for (let i = 1; i <= array.length; i++) {
            if (array[i] < smallest) {
                smallest = array[i]
                smallestIndex = i
            }
        }

        return smallestIndex
    }

    for (let i = 1; i <= arrayLength; i++) {
        let smallest = findSmallest(array)
        newArray.push(array[smallest])
        array.splice(smallest, 1)
    }
    return newArray
}

// console.log(data = selectionSort(data))
// console.log(names = selectionSort(names))


const binarySearch = function (array, item) {
    let low = 0
    let high = array.length - 1

    while (low <= high) {
        let mid = (low + high) / 2
        mid = Math.floor(mid)
        let guess = array[mid]
        if (guess === item) {
            return mid
        }

        if (guess > item) {

            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return null
}

// console.log( binarySearch(data, 4))
// console.log( binarySearch(names, 'Stephan') )
//
// console.log('------------')
//
// console.log(data.sort((a, b) =>  a - b ))
// console.log(names.sort( (a, b) => a - b ))
//
// console.log(data.indexOf( 4 ))
// console.log(names.indexOf('Stephan'))


function hackPentagon() {
    let current = 0
    let p = new Promise(resolve => {
        setTimeout(function hack() {
            console.log(`Hacking Pentagon: ${current}%`)
            if (current < 100) {
                setTimeout(hack, 100)
            }

            current++
        }, 1000)
    })
    return null
}

console.log(hackPentagon())

