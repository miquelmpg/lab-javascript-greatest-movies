// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movies => movies.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.reduce((numMovies, movies) => {
        if (movies.director === "Steven Spielberg" && movies.genre.includes("Drama")) {
            numMovies += 1;
        }
        return numMovies;
    },0)
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    return moviesArray.reduce((sumScore, movie) => {
        if (!movie.score) {
            return sumScore + 0;
        }
        sumScore += (movie.score / moviesArray.length);
        return +(sumScore).toFixed(2);
    }, 0);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    return moviesArray
        .filter(movie => (movie.genre.includes("Drama") && movie.genre.length === 1))
        .reduce((sumScore, movie, index, arr) => {
        sumScore += (movie.score / arr.length);
        return +(sumScore).toFixed(2);
    }, 0);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesByYear = moviesArray.toSorted((movieYearA, movieYearB) => {
        if (movieYearA.year !== movieYearB.year) {
            return movieYearA.year - movieYearB.year
        } else {
            return movieYearA.title.localeCompare(movieYearB.title);      
        }
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesByTitle = moviesArray
                            .map( movies => movies.title)
                            .toSorted((movieTitleA, movieTitleB) => movieTitleA.localeCompare(movieTitleB))
                            .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return newarray = moviesArray.map(movie => {
        film = {...movie};
        minutes = parseInt(film.duration.split(" ")[1]);
        hours = parseInt(film.duration.split(" ")[0]) * 60;
        if (film.duration.includes("min")) {
            film.duration = hours + minutes;
        } else {
            minutes = 0;
            film.duration = hours + minutes;
        }
        return film;
    });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) return null;
    return moviesArray
            .reduce((infoMovie, movie)  => {
                if (!infoMovie[movie.year]) {
                    infoMovie[movie.year] = {sum: 0, count: 0, avg: 0};
                }
                infoMovie[movie.year].count += 1;
                infoMovie[movie.year].year = movie.year;
                infoMovie[movie.year].sum += movie.score;
                infoMovie[movie.year].avg = +(infoMovie[movie.year].sum / infoMovie[movie.year].count).toFixed(1);
                return infoMovie;
            }, [])
            .sort((a, b) => b.year - a.year)
            .reduce((bestYearAvg, movieInfo, index, array) => {
                let max = array.reduce((maxAvg, movieAvg) => {
                    if (movieAvg.avg > maxAvg) {
                        maxAvg = movieAvg.avg;
                    }
                    return maxAvg;
                    }, 0);
                    if (movieInfo.avg === max) {
                        bestYearAvg = `The best year was ${movieInfo.year} with an average score of ${movieInfo.avg}`;
                    }
                    return bestYearAvg;
            },"");
}
