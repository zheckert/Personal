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


// var movies = [
//     {title: "The Shawshank Redemption", rating: "R"},
//     {title: "The Godfather", rating: "R"},
//     {title: "The Godfather: Part II", rating: "R"},
//     {title: "The Dark Knight", rating: "PG-13"},
//     {title: "12 Angry Men", rating: "PG"},
//     {title: "Schindler's List", rating: "R"},
//     {title: "The Lord of the Rings: The Return of the King", rating: "PG-13"},
//     {title: "Pulp Fiction", rating: "R"},
//     {title: "The Good, the Bad, and the Ugly", rating: "R"},
//     {title: "The Lord of the Rings: The Fellowship of the Ring", rating: "PG-13"}
// ]

// // let restricted = movies.map(function(cinema) {
// //     return cinema.rating
// // })

// //an arrow function because I love ES6 and know about implicit returns. You can see through my clever use of 'barf' that you can name your function whatever you want as long as you're consistent. Honestly, it's probably better to name it "movie," but I'm a rebel?
// let restricted = movies.map(barf => `${barf.title} is rated ${barf.rating}`)

// console.log(restricted)
// let i = 100;
// while(i--){
//   console.log(i)
// }

// i = 100
// while(--i){
// console.log(i)
// }

// var input = "666666";

// try {
//   if(input == "") {
//     throw "Input cannot be empty";
//   } else if(input.length > 5) {
//     throw "Input is to big";
//   } else {
//     console.log("You code runs fine!");
//   }
// } catch(err) {
//   console.log(err);
// } finally {
//   console.log("Runs no matter what");
//   console.log("And the input was " + input);
// }

// console.log(this)

// function People (age) {
//   this.age = age
//   // this.name = name
//   // console.log(this.name)
// }

// let Samuel = new People(45)
// let Sally = new People(3)

// console.log(Samuel)

// function highAndLow(numbers){
//   parseInt(numbers);
//   return Math.max(numbers) , Math.min(numbers);
// }

// console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))

//I MADE THE BELOW PROGRAM ALL BY MYSELF!

// function DNAStrand(dna){
//   let arr = [];
//   for(let i = 0; i < dna.length; i++){
//     if(dna.charAt(i) === "A"){
//        arr.push("T")
//        }else if(dna.charAt(i) === "T"){
//        arr.push("A")
//        }else if(dna.charAt(i) === "C"){
//        arr.push("G")
//        }else if(dna.charAt(i) === "G"){
//        arr.push("C")
//        }
// }
// return arr.join("");
// }
// console.log(DNAStrand("ATTGC"));

function countSheeps(arrayOfSheep) {
    let sheepTotal = 0
    for(let i = 0; i < arrayOfSheep.length; i++){
      if(arrayOfSheep[i] === true){
        sheepTotal++;
      }
    }
    return `There are ${sheepTotal} sheeps in total`
  }

  var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];
    
console.log(countSheeps(array1))