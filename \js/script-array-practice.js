//STEP 1
let myMovies = ['TopGun', 'Good Fellas', 'Ferris Buellers Day Off', 'Toy Story', 'The Lego Batman Movie'];
console.log(myMovies[1]);

//STEP 2
let movies = new Array(5);
movies[0] = 'TopGun'
movies[1] = 'Good Fellas'
movies[2] = 'Ferris Buellers Day Off'
movies[3] = 'Toy Story'
movies[4] = 'The Lego Batman Movie'
console.log(movies[0])

//STEP 3
let movies = new Array(5);
movies[0] = 'TopGun'
movies[1] = 'Good Fellas'
movies[2] = 'Ferris Buellers Day Off'
movies[3] = 'Toy Story'
movies[4] = 'The Lego Batman Movie'
movies.splice(2, 0, 'DodgeBall');
console.log(movies.length)

//STEP 4
let movies = [];
movies.push('TopGun', 'Good Fellas', 'Ferris Buellers Day Off', 'Toy Story', 'The Lego Batman Movie');
delete movies[0];
console.log(movies);

//STEP 5
let movies = [];
movies.push('TopGun', 'Good Fellas', 'Ferris Buellers Day Off', 'Toy Story', 'The Lego Batman Movie', 'Dodge Ball', 'Out Of Time');
for (let movie in movies) {
    console.log(movies[movie])};

//STEP 6
let movies = [];
movies.push('TopGun', 'Good Fellas', 'Ferris Buellers Day Off', 'Toy Story', 'The Lego Batman Movie', 'Dodge Ball', 'Out Of Time');
for (let i of movies) {
    console.log(i)};

//STEP 7
let movies = [];
movies.push('TopGun', 'Good Fellas', 'Ferris Buellers Day Off', 'Toy Story', 'The Lego Batman Movie', 'Dodge Ball', 'Out Of Time');
movies.sort();
for (let i of movies) {
    console.log(i)};

//STEP 8
let movies = ['TopGun', 'Good Fellas', 'Ferris Buellers Day Off', 'Toy Story', 'The Lego Batman Movie', 'Dodge Ball', 'Out Of Time'];
let leastFavMovies = ['Who stole the swag?', 'Plotless', 'Unwatchable III']
console.log('\nMovies I like:\n\n')
for (let i = 0; i < 3; i++)  {
    console.log(movies[i])};
console.log('... \n\n\nMovies I regret watching:\n\n') 
for (let x = 0; x < 3; x++)  {
    console.log(leastFavMovies[x])};  
console.log('... \n\n');

//STEP 9
let favMovies = ['TopGun', 'Good Fellas', 'Ferris Buellers Day Off', 'Toy Story', 'The Lego Batman Movie', 'Dodge Ball', 'Out Of Time'];
let leastFavMovies = ['Who stole the swag?', 'Plotless', 'Unwatchable III']
let movies = favMovies.concat(leastFavMovies);
movies.sort();
console.log(movies.reverse());

//STEP 10
let favMovies = ['TopGun', 'Good Fellas', 'Ferris Buellers Day Off', 'Toy Story', 'The Lego Batman Movie', 'Dodge Ball', 'Out Of Time'];
let leastFavMovies = ['Who stole the swag?', 'Plotless', 'Unwatchable III']
let movies = favMovies.concat(leastFavMovies);
let lastItem = movies.slice(-1)[0];
console.log(lastItem);

//STEP 11
let favMovies = ['TopGun', 'Good Fellas', 'Ferris Buellers Day Off', 'Toy Story', 'The Lego Batman Movie', 'Dodge Ball', 'Out Of Time'];
let leastFavMovies = ['Who stole the swag?', 'Plotless', 'Unwatchable III']
let movies = favMovies.concat(leastFavMovies);
let firstItem = movies.slice(0)[0];
console.log(firstItem);

//STEP 12
let favMovies = ['TopGun', 'Good Fellas', 'Ferris Buellers Day Off', 'Toy Story', 'The Lego Batman Movie', 'Dodge Ball', 'Out Of Time'];
let leastFavMovies = ['Who stole the swag?', 'Plotless', 'Unwatchable III']
let movies = favMovies.concat(leastFavMovies);
movies = movies.sort();
console.log(`Before replacing the bad movies: \n ${movies}`)        // DISPLAY THE ORIGINAL MOVIES ARRAY

bad1 = movies.findIndex((value, index, array) => {
    return value == 'Who stole the swag?'});                        // REPLACE THE FIRST BAD MOVIE WITH A GOOD MOVIE
movies[bad1] = 'What a movie!';

bad2 = movies.findIndex((value, index, array) => {
    return value == 'Plotless'});                                   // REPLACE THE SECOND BAD MOVIE WITH A GOOD MOVIE
    movies[bad2] = 'Wowser!';

bad3 = movies.findIndex((value, index, array) => {
    return value == 'Unwatchable III'});                            // REPLACE THE THIRD BAD MOVIE WITH A GOOD MOVIE
movies[bad3] = 'Incredible!';

console.log(`After replacing the bad movies: \n ${movies}`)         // DISPLAY THE UPDATED MOVIES ARRAY

//STEP 13
movies = [["Top Gun", 1], ["Good Fellas", 2], ["Ferris Buellers Day Off", 3], ["Toy Story", 4], ["The Lego Batman Movie", 5]];
let flatMoviesArray = movies.flat();                                // FLATTEN THE TWO DIMENSIONAL ARRAY
let movieName = flatMoviesArray.filter((item) => {                  // CALL THE FILTER METHOD
    return typeof item === 'string'                                 // RETURN ONLY THE ARRAY ITEMS THAT ARE STRINGS
    })
    console.log(movieName);                                         // DISPLAY THE MOVIE NAMES

//STEP 14
let employees = ['MO', 'CURLY', 'LARRY', 'LLOYD', 'HARRY'];         // CREATE STRING ARRAY
function showEmployee(x) {                                          // CREATE FUNCTION
    console.log('\nEmployees:\n\n')
    for (let emp in employees) {                                    // LOOP THROUGH EMPLOYEE NAMES USING FOR/IN LOOP
        console.log(employees[emp])};
        console.log('\n')
} 
showEmployee(employees);                                            // CALL THE FUNCTION

//STEP 15
originalValues = [58, '', 'abcd', true, null, false, 0];
remove = ['', false, 0, null]
    let filteredValues = originalValues.filter(values => !remove.includes(values));
console.log(filteredValues)

//STEP 16
numberList = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];                 // ARRAY WITH 10 NUMBERS

function getRandomNumber(min, max) {                                    // FUNCTION TO GENERATE A RANDOM NUMBER
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

let randomNum = getRandomNumber(0, 9);                                  // CALL THE FUNCTION & ASSIGN TO A VARIABLE

console.log(numberList);                                                // DISPLAY THE ARRAY CONTENTS
console.log(`The index number I randomly chose is: ${randomNum}, which is this number in the list: ${numberList[randomNum]}`);

//STEP 17
numberArray = [100, 50, 75, 200, 30, 180, 9];
reSort = numberArray.sort(function(a, b) {
    return a - b;
  });
  console.log(reSort);
console.log(`\nThe largest number in the array is: ${numberArray[reSort.length - 1]}\n`);

