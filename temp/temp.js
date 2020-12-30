const countCharacters = (str) => {
    const output = {}

    for(let i = 0; i < str.length; i++){
        let character = str[i]
        if(output[character] === undefined){
            output[character] = 1
        }else{
            output[character]++
        }
    }return output
}