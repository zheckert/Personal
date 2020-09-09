//1
// var peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]

//   for (let i = 0; i < peopleArray.length; i++) {
//       console.log(peopleArray[i].name);
//   }


var movies = [
    {title: "The Shawshank Redemption", rating: "R"},
    {title: "The Godfather", rating: "R"},
    {title: "The Godfather: Part II", rating: "R"},
    {title: "The Dark Knight", rating: "PG-13"},
    {title: "12 Angry Men", rating: "PG"},
    {title: "Schindler's List", rating: "R"},
    {title: "The Lord of the Rings: The Return of the King", rating: "PG-13"},
    {title: "Pulp Fiction", rating: "R"},
    {title: "The Good, the Bad, and the Ugly", rating: "R"},
    {title: "The Lord of the Rings: The Fellowship of the Ring", rating: "PG-13"}
]

// let restricted = movies.map(function(cinema) {
//     return cinema.rating
// })

//an arrow function because I love ES6 and know about implicit returns. You can see through my clever use of 'barf' that you can name your function whatever you want as long as you're consistent. Honestly, it's probably better to name it "movie," but I'm a rebel?
let restricted = movies.map(barf => `${barf.title} is rated ${barf.rating}`)

console.log(restricted)