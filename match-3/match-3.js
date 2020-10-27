//How would we turn this into something like that one PSP game that was a matcher? We could instantiate classes and have health and armor values and formulas to calculate damage. 

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid")
    const width = 8
    const squares = []

    const widgetColors = [
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
    squares.forEach(square =>  square.addEventListener("dragleave", dragLeave))    
    squares.forEach(square =>  square.addEventListener("drop", dragDrop))

    function dragStart() {
        colorBeingDragged = this.style.backgroundColor
        squareIdBeingDragged = parseInt(this.id)
        console.log(this.id, "dragStart")
    }

    function dragEnd() {
        console.log(this.id, "dragEnd")
        let validMoves = [
            squareIdBeingDragged -1, 
            squareIdBeingDragged +1, 
            squareIdBeingDragged -width,
            squareIdBeingDragged +width 
        ]

        let validMove = validMoves.includes(squareIdBeingReplaced)

        if(squreIdBeingReplaced && validMove) {
            squareIdBeingReplaced = null
        } else if(squareIdBeingReplaced && !validMove) {
            squares[squareIdBeingReplaced].style.backgroundColor = colorBeingReplaced
            squares[squareIdBeingReplaced].style.backgroundColor = colorBeingDragged
        }else{
            squares[squareIdBeingDragged.style.backgroundColor = colorBeingDragged]
        }
    }

    function dragOver(e) {
        e.preventDefault()
        console.log(this.id, "dragOver")
    }

    function dragEnter(e) {
        e.preventDefault()
        console.log(this.id, "dragEnter")
    }

    function dragLeave() {
        console.log(this.id, "dragLeave")
    }

    function dragDrop() {
        console.log(this.id, "dragDrop")
        colorBeingReplaced = this.style.backgroundColor
        squareIdBeingReplaced = parseInt(this.id)
        this.style.backgroundColor = colorBeingDragged
        squares[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced
    }

})