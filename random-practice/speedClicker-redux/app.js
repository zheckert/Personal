let clicks = localStorage.getItem("Click") || 0
document.getElementById("numbers").textContent = clicks

document.getElementById("button").addEventListener("click", function(){
    clicks++;
    localStorage.setItem("Click", clicks);
    document.getElementById("numbers").textContent = clicks
})