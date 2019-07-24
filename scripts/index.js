console.log(`There are ${characters.length} characters in the array.`);

// For each of these questions, write a function that returns the answer.

const createCharacters = ({name,died,titles,aliases,tvSeries,culture,playedby})=> {
    return {
        name,
        died,
        titles,
        aliases,
        tvSeries,
        culture,
        playedby
    }
}

let characterInfo = characters.map(createCharacters)

console.log(characterInfo)
// How many characters names start with "A"?
const filterA = ({name}) =>{
        return name.charAt(0) === 'A'
}
const filterByA = characterInfo.filter(filterA)
console.log(filterByA)
// How many characters names start with "Z"?
const filterZ = ({name}) =>{
    return name.charAt(0) === 'Z'
}
const filterByZ = characterInfo.filter(filterZ)
console.log(filterByZ)
// How many characters are dead?
const filterDead = ({died}) =>{
    return died !== ""
}
const filteredByDead = characterInfo.filter(filterDead)
console.log(filteredByDead)
// Who has the most titles?
    // const filterByTitleCount = ({titles}) => {
    //     return titles.length 
    // }
// How many are Valyrian?
const filterbyValyrian = ({culture})=>{
    return culture === 'Valyrian'
}
const filteredByValyrian = characterInfo.filter(filterbyValyrian)
console.log(filteredByValyrian)
// What actor plays "Hot Pie" (and don't use IMDB)?
const filterHot = ({name}) =>{
    if ( name === 'Hot Pie'){
        return characterInfo.playedby
    }
}
const filteredHot = characterInfo.filter(filterHot)
console.log(filteredHot)
// How many characters are *not* in the tv show?

// Produce a list characters with the last name "Targaryen"

// Create a histogram of the houses (it's the "allegiances" key)
 


// After you are finished, submit a Pull Request for code review.