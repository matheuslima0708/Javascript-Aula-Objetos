//// FUNCAO DE CHECAR O TIPO
const typeCheck = (type) => {
    const typeString = Reflect.apply(Object.prototype.toString, type, [])
    return typeString.slice(
        typeString.indexOf('') + 1, 
        typeString.indexOf(']')
    ).toLowerCase()
}

// console.log(typeCheck([]));
// console.log(typeCheck(null));
// console.log(typeCheck({}));
// console.log(typeCheck('teste'));
// console.log(typeCheck(123));

//// FUNCAO DE CLONAGEN PROFUNDA DE ARRAYS
// const cloneArray = (element) => {
//     const clonedArray = []
//     for( const item of element) {
//         if (typeCheck(item) === 'array') clonedArray.push(cloneArray(item))
//         else clonedArray.push(item)
//     }
//     return clonedArray
// }
//// FUNCAO ACIMA MAIS ENXUTA E DECLARATIVA
const cloneArray = (element) => {
    if(typeCheck(element) !== 'array') return element
    return element.map(cloneArray)
}

const numbers = [1, 2, 3]
const numbersCopy = numbers
console.log(numbers === numbersCopy);
console.log(numbers === cloneArray(numbers));