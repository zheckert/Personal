let clicks = 0 || localStorage.getItem("clicks")
document.getElementById("numberSpot").textContent = clicks


document.getElementById("button").addEventListener("click", function(){
    clicks++;
    localStorage.setItem("clicks", clicks);
    document.getElementById("numberSpot").textContent = clicks
})