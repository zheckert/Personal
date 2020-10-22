const vowels = "aeiou"

function pigLatin(str){
    if(str.length <= 3){
        return str;
    }else if(vowels.includes(str.charAt(0))){
        return str + "ay";
    }else{
        return "I like to eat spam"
    }
}
//     if(str.length <= 3){
//         return str;
//     }else if(str.charAt(0) === "a" || "e" || "i" || "o" || "u"){
//         return str + "ay";
//     }else if(str.charAt(0) != "a" || "e" || "i" || "o" || "u"){
//         return "I like to eat spam"
        return str.slice(1) + "ay"
//     }
// }
//try using str.includes()

console.log(pigLatin("hello"))

console.log(pigLatin("ant"))

console.log(pigLatin("annie"))

console.log(pigLatin("corpse"))

// console.log(pigLatin("I am a barf monkey"))