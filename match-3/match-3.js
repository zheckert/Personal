//Made utilizing https://www.youtube.com/watch?v=XD5sZWxwJUk&feature=youtu.be as a base. 

//How would we turn this into something like that one PSP game that was a matcher? We could instantiate classes and have health and armor values and formulas to calculate damage.  Also add cool graphics

//function(s) for removing blocks should be called after a move takes place, then remove setInterval function (Wouldn't this go at the end of a move, so check for matches at dragEnd? AND check for 4 before 3. We could wrap the checks and dropping functions into a function to make it easier to call it
//Maybe we need to have it so a row of ANY length can be removed, with a more complicated score modifier?)
//Need to add matches of 5
//Need to only allow a move if there's a match
// need to make sure rows are repopulating properly
//need to add images
//need to add animations


document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid")
    const width = 8
    const squares = []
    let score = 0

    const widgetColors = [
        //"url(graphics/<file-name-here>"
        "F531B1",
        "AB22D4",
        "7231EB",
        "222ED4",
        "96F548",
        "752581"
    ]

    buildArea = () => {
        for (let i = 0; i < width * width; i++) {
            const square = document.createElement("div")
            square.setAttribute("draggable", true)
            square.setAttribute("id", i)
            let randomColor = Math.floor(Math.random() * widgetColors.length)
            square.style.backgroundColor = widgetColors[randomColor]
            grid.appendChild(square)
            squares.push(square)
        }
    }

    buildArea()

    let colorBeingDragged
    let colorBeingReplaced
    let squareIdBeingDragged
    let squareIdBeingReplaced

    squares.forEach(square =>  square.addEventListener("dragstart", dragStart))
    squares.forEach(square =>  square.addEventListener("dragend", dragEnd))
    squares.forEach(square =>  square.addEventListener("dragover", dragOver))
    squares.forEach(square =>  square.addEventListener("dragenter", dragEnter))
    // squares.forEach(square =>  square.addEventListener("dragleave", dragLeave))    
    squares.forEach(square =>  square.addEventListener("drop", dragDrop))

    function dragStart() {
        colorBeingDragged = this.style.backgroundColor
        squareIdBeingDragged = parseInt(this.id)
    }

    function dragOver(e) {
        e.preventDefault()
    }

    function dragEnter(e) {
        e.preventDefault()
    }

    // function dragLeave() {
    //     this.style.backgroundImage = ""
    // }

    function dragDrop() {
        colorBeingReplaced = this.style.backgroundColor
        squareIdBeingReplaced = parseInt(this.id)
        this.style.backgroundColor = colorBeingDragged
        squares[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced
    }

    function dragEnd() {
        let validMoves = [
            squareIdBeingDragged -1, 
            squareIdBeingDragged -width,
            squareIdBeingDragged +1, 
            squareIdBeingDragged +width 
        ]

        let validMove = validMoves.includes(squareIdBeingReplaced)

        if(squareIdBeingReplaced && validMove) {
            squareIdBeingReplaced = null
        } else if (squareIdBeingReplaced && !validMove) {
            squares[squareIdBeingReplaced].style.backgroundColor = colorBeingReplaced
            squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged
        } else squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged
    }
    
    function dropSquares(){
        for (i = 0; i < 55; i++) {
            if (squares[i + width].style.backgroundColor === ""){
                squares[i + width].style.backgroundColor = squares[i].style.backgroundColor
                squares[i].style.backgroundColor = ""
                const rowOne = [0, 1, 2, 3, 4, 5, 6, 7]
                const isRowOne = rowOne.includes(i)
                if (isRowOne && squares[i].style.backgroundColor === ""){
                    let randomColor = Math.floor(Math.random() * widgetColors.length)
                    squares[i].style.backgroundcolor = widgetColors[randomColor]
                }
            }
        }
    }

    function checkRowForFour() {
        for (i = 0; i < 60; i++) {
            let rowOfFour = [i, i+1, i+2, i+3]
            let decidedColor = squares[i].style.backgroundColor
            const isBlank = squares[i].style.backgroundColor === ""
            
            const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55]
            if (notValid.includes(i)) continue

            if (rowOfFour.every(index => squares[index].style.backgroundColor === decidedColor && !isBlank)) {
                score += 5
                rowOfFour.forEach(index => {
                squares[index].style.backgroundColor = ""
                })
            }
        }
    }
    checkRowForFour()
    
    function checkColumnForFour() {
        for (i = 0; i < 47; i++) {
            let columnOfFour = [i, i+width, i+width*2, i+width*3]
            let decidedColor = squares[i].style.backgroundColor
            const isBlank = squares[i].style.backgroundColor === ""
    
            if (columnOfFour.every(index => squares[index].style.backgroundColor === decidedColor && !isBlank)) {
                score += 5
                columnOfFour.forEach(index => {
                squares[index].style.backgroundColor = ""
                })
            }
    
        }
    }
    checkColumnForFour()

    function checkRowForThree() {
        for (i = 0; i < 61; i++) {
            let rowOfThree = [i, i+1, i+2]
            let decidedColor = squares[i].style.backgroundColor
            const isBlank = squares[i].style.backgroundColor === ""
            
            const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55]
            if (notValid.includes(i)) continue

            if (rowOfThree.every(index => squares[index].style.backgroundColor === decidedColor && !isBlank)) {
                score += 3
                rowOfThree.forEach(index => {
                squares[index].style.backgroundColor = ""
                })
            }
        }
    }
    checkRowForThree()
    
    function checkColumnForThree() {
        for (i = 0; i < 47; i++) {
            let columnOfThree = [i, i+width, i+width*2]
            let decidedColor = squares[i].style.backgroundColor
            const isBlank = squares[i].style.backgroundColor === ""
    
            if (columnOfThree.every(index => squares[index].style.backgroundColor === decidedColor && !isBlank)) {
                score += 3
                columnOfThree.forEach(index => {
                squares[index].style.backgroundColor = ""
                })
            }
    
        }
    }
    checkColumnForThree()
    
    window.setInterval(function(){
        dropSquares()
        checkRowForFour()
        checkColumnForFour()
        checkRowForThree()
        checkColumnForThree()
    }, 100)
})


