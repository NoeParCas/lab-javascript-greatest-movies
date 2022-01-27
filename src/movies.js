// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const directors = arr.map(movies => {
    return movies.director
  })
  return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
//Go ahead and create a howManyMovies() function that receives an array as a parameter and filter 👀 the array so we can have only the drama movies where Steven Spielberg is the director.

function howManyMovies(arr) {
  let dramaSpielberg = arr.filter((eachElement) => {
  if (eachElement.director === 'Steven Spielberg' && (eachElement.genre).includes('Drama')){
    return eachElement
  }
})
return dramaSpielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {

  if (arr.length === 0) {
    return 0;
}
let totalScore = arr.reduce((acc,elem) => {
  if (elem.score === undefined) {
    return acc
  }else{
    return acc + elem.score
  }
}, 0)
let averScore = totalScore / arr.length
return Number (averScore.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {

  if (arr.length === 0) {
    return 0;
  }

  let allDrama = 0

  let totalDramaScore = arr.reduce ((acc,eachDramaScore) => {
    if (eachDramaScore.score === undefined) {
      return acc
      }else if ((eachDramaScore.genre).includes("Drama")){
        allDrama ++
        return acc + eachDramaScore.score
      }else{
        return acc
    }},0)

    if (allDrama === 0) {
      return 0
    }

let totalDramaMovies = arr.filter((eachDramaMovies) => {
  return eachDramaMovies.genre.includes("Drama")
})
 
 let totalDramaAver = (totalDramaScore / totalDramaMovies.length).toFixed(2)
 return Number(totalDramaAver)

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {

let copyMovies = JSON.parse(JSON.stringify(arr))

let ascendingMovies = copyMovies.sort((first, second) => {
  if (first.year > second.year){
    return 1
  }else{
    return -1
  }
})
return ascendingMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {

  let copyArr = JSON.parse(JSON.stringify(arr))


  
  let orderedMovies = copyArr.sort((first, second) => {
    if (first.title > second.title){
      return 1
    }else{
      return -1
    }
  })
  return orderedMovies

  let justTitles = movies.map((element) => {
    if (element.title > 20){
    return element.slice(0, 20)
    } 
  })
return justTitles
}

  


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}

