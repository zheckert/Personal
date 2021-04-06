const secondLargest = (arr) => {
    // let sorted = arr.sort((a, b) => b - a)
    // return sorted[1]
    let largest = 0;
    let secondLargest = 0;
    for (let i = 0; i < arr.length; i++) { 
            if (largest < arr[i]) {
                secondLargest = largest;
                largest = arr[i];
            } else if (secondLargest < arr[i]) { 
                if (arr[i]!=largest){
                    secondLargest = arr[i];
                } 
            }
        }
        
        return secondLargest; 
}

console.log(secondLargest([25, 143, 89, 13, 105]))