

function theFunction(){
    alert("You clicked it!")
}


// so I'm calling a specific element and putting an event listener on it (.addEventListener) which activates a function when "clicked"
document.getElementById("button").addEventListener("click", function(){
    alert("You clicked it!")
})

//So I'm declaring a variable that represents the html element I'd like to manipulate. I select it with its appropriate id and "getElementById"
const test = document.getElementById("third")

//Then, I'm free to manipulate my variable-
test.textContent = "Test, it's a test."
test.style.backgroundColor = "pink"
test.style.fontFamily= "Arial"

//to see the properties of an object that can be manipulated, put the object within a console.dir():
console.dir(test)

const newH1 = document.createElement("h1")
newH1.textContent = "This is an h1 I spawned"
test.appendChild(newH1)