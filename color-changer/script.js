const B1 = document.querySelector("#B1")
const B2 = document.querySelector("#B2")
const B3 = document.querySelector("#B3")
const B4 = document.querySelector("#B4")
const B5 = document.querySelector("#B5")
const box = document.querySelector("#container")
B1.addEventListener("click" , () => {
    box.style.backgroundColor = "black";
})

B2.addEventListener("click" , () => {
    box.style.backgroundColor = "red";

})
B3.addEventListener("click" , () => {
    box.style.backgroundColor = "blue";

})
B4.addEventListener("click" , () => {
    box.style.backgroundColor = "yellow";

})
B5.addEventListener("click" , () => {
    box.style.backgroundColor = "green";

})
