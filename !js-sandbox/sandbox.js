




// let vomit = [

// += is the addition assignment operator. This operator adds the value on the right of the operator to the variable on the left. The resultant value is then assigned to the variable on the left.

// let assignment = (num) => {
//     return num += 5
// } 
// console.log(assignment(3))

// //1
// // var peopleArray = [
// //     {
// //       name: "Harrison Ford",
// //       occupation: "Actor"
// //     },
// //     {
// //       name: "Justin Bieber",
// //       occupation: "Singer"
// //     },
// //     {
// //       name: "Vladimir Putin",
// //       occupation: "Politician"
// //     },
// //     {
// //       name: "Oprah",
// //       occupation: "Entertainer"
// //     }
// //   ]

// //   for (let i = 0; i < peopleArray.length; i++) {
// //       console.log(peopleArray[i].name);
// //   }


// // var movies = [
// //     {title: "The Shawshank Redemption", rating: "R"},
// //     {title: "The Godfather", rating: "R"},
// //     {title: "The Godfather: Part II", rating: "R"},
// //     {title: "The Dark Knight", rating: "PG-13"},
// //     {title: "12 Angry Men", rating: "PG"},
// //     {title: "Schindler's List", rating: "R"},
// //     {title: "The Lord of the Rings: The Return of the King", rating: "PG-13"},
// //     {title: "Pulp Fiction", rating: "R"},
// //     {title: "The Good, the Bad, and the Ugly", rating: "R"},
// //     {title: "The Lord of the Rings: The Fellowship of the Ring", rating: "PG-13"}
// // ]

// // // let restricted = movies.map(function(cinema) {
// // //     return cinema.rating
// // // })

// // //an arrow function because I love ES6 and know about implicit returns. You can see through my clever use of 'barf' that you can name your function whatever you want as long as you're consistent. Honestly, it's probably better to name it "movie," but I'm a rebel?
// // let restricted = movies.map(barf => `${barf.title} is rated ${barf.rating}`)

// // console.log(restricted)
// // let i = 100;
// // while(i--){
// //   console.log(i)
// // }

// // i = 100
// // while(--i){
// // console.log(i)
// // }

// // var input = "666666";

// // try {
// //   if(input == "") {
// //     throw "Input cannot be empty";
// //   } else if(input.length > 5) {
// //     throw "Input is to big";
// //   } else {
// //     console.log("You code runs fine!");
// //   }
// // } catch(err) {
// //   console.log(err);
// // } finally {
// //   console.log("Runs no matter what");
// //   console.log("And the input was " + input);
// // }

// // console.log(this)

// // function People (age) {
// //   this.age = age
// //   // this.name = name
// //   // console.log(this.name)
// // }

// // let Samuel = new People(45)
// // let Sally = new People(3)

// // console.log(Samuel)

// // function highAndLow(numbers){
// //   parseInt(numbers);
// //   return Math.max(numbers) , Math.min(numbers);
// // }

// // console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))

// //I MADE THE BELOW PROGRAM ALL BY MYSELF!

// // function DNAStrand(dna){
// //   let arr = [];
// //   for(let i = 0; i < dna.length; i++){
// //     if(dna.charAt(i) === "A"){
// //        arr.push("T")
// //        }else if(dna.charAt(i) === "T"){
// //        arr.push("A")
// //        }else if(dna.charAt(i) === "C"){
// //        arr.push("G")
// //        }else if(dna.charAt(i) === "G"){
// //        arr.push("C")
// //        }
// // }
// // return arr.join("");
// // }
// // console.log(DNAStrand("ATTGC"));

// // function countSheeps(arrayOfSheep) {
// //     let sheepTotal = 0
// //     for(let i = 0; i < arrayOfSheep.length; i++){
// //       if(arrayOfSheep[i] === true){
// //         sheepTotal++;
// //       }
// //     }
// //     return `There are ${sheepTotal} sheeps in total`
// //   }

// //   var array1 = [true,  true,  true,  false,
// //     true,  true,  true,  true ,
// //     true,  false, true,  false,
// //     true,  false, false, true ,
// //     true,  true,  true,  true ,
// //     false, false, true,  true ];
    
// // console.log(countSheeps(array1))

// // function capitalizeNames(arr){
// //   console.log(arr.map(str => str[0].toUpperCase() + str.slice(1).toLowerCase())) 
// // }

// // console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
// // console.log(namesOnly([
// //   {
// //       name: "Angelina Jolie",
// //       age: 80
// //   },
// //   {
// //       name: "Eric Jones",
// //       age: 2
// //   },
// //   {
// //       name: "Paris Hilton",
// //       age: 5
// //   },
// //   {
// //       name: "Kayne West",
// //       age: 16
// //   },
// //   {
// //       name: "Bob Ziroll",
// //       age: 100
// //   }
// // ])); 

// // function namesOnly(arr){

// //   return arr.map(folks => folks.name)

// // }

// // function forTheDom(arr){
// //   return arr.map(dom => {
// //     return `<h1>${dom.name}<h1> `+`<h2>${dom.age}</h2>`
// //   })
// // }
// // console.log(forTheDom([
// //   {
// //       name: "Angelina Jolie",
// //       age: 80
// //   },
// //   {
// //       name: "Eric Jones",
// //       age: 2
// //   },
// //   {
// //       name: "Paris Hilton",
// //       age: 5
// //   },
// //   {
// //       name: "Kayne West",
// //       age: 16
// //   },
// //   {
// //       name: "Bob Ziroll",
// //       age: 100
// //   }
// // ])); 

// // 4) Calculate the sum of elements of an array of numbers

// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const question = (arr) => {
// // 	let sum = 0
// // 	for(let i = 0; i < arr.length; i++){
// //   	sum += arr[i]
// //   }
// //   return sum
// // }

// // console.log(question(arr))

// // ///From https://edabit.com/challenge/R3AYf3eTdATXTQTdZ
// // function firstLast(arr) {
// //     let a = arr.shift()
// //     let b = arr.pop()
// //     console.log(a)
    
// // }

// // firstLast(["edabit", 13, null, false, true])

// // //Here was my solution:

// // function firstLast(arr) {
// // 	let c = [];
// // 	let a = arr.shift()
// // 	let b = arr.pop()
// // 	c.push(a)
// // 	c.push(b)
// // 	return c
// // }

// // //Here was the top solution:
// // function firstLast(arr) {
// // 	return [arr.shift(), arr.pop()]
// // }
// ]

// function countCharacters(arr) {
// 	let num = 0
// 	for (let i = 0; i < arr.join('').length; i++){
// 		num++
// 	}console.log(num) 
// }

// countCharacters([
//     '###',
//     '###',
//     '###'
//     ])

    // https://edabit.com/challenge/nkp5xkZwbBH5Ape8b

    // function sumOfCubes(nums) {
    //     let final = 0
    //     for (let i = 0; i < nums.length; i++){
    //         // Math.pow(nums[i], 3)
    //         final += nums.length[i] ** 3
    //     }
    //     return final
    // }
    
    // console.log(sumOfCubes([1, 5 , 9])

    // function countCode(arr) {  
    //     let total = 0
    //     for(let i = 0; i < arr.length; i++){
    //         arr[i] === "code" && total++
    //     }return total
    // }
    
    // console.log(countCode(["code", "code", "cool", "code"]))