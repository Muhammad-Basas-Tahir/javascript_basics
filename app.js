// Button1
const btn = document.querySelector("#Button1");
const txt = document.querySelector("#Para1");

btn.addEventListener("click", updateBtn);

function updateBtn(){
    if(btn.textContent === "Play Music"){
        btn.textContent = "Pause Music";
        txt.textContent = "Music is Playing";
    }   else {
        btn.textContent = "Play Music"
        txt.textContent = "Music is Paused"
    }
}


// Button2
const btn2 = document.querySelector("#Button2");
const txt2 = document.querySelector("#Para2");

btn2.addEventListener("click", updateTheme);
function updateTheme(){
    if(btn2.textContent === "Dark Mode"){
        btn2.textContent = "Light Mode";
        txt2.textContent = "Theme is Light";  
        btn2.style.backgroundColor = "#AB9999"
        txt2.style.color = "#AB9999"
    }   else {
        btn2.textContent = "Dark Mode";
        txt2.textContent = "Theme Is Dark";
        btn2.style.backgroundColor = "black"
        txt2.style.color = "#3E2424"

    }


}    
// text change text
const title = document.getElementById("title");
title.textContent = "world";
title.style.color = "blue";

title.addEventListener("mouseover", () => {title.textContent = "boom"})
title.addEventListener("mouseout", () => {title.textContent = "world"})

// login/logout button
const loginButton = document.getElementById("login");
const buttonStatus = document.getElementById("status");

loginButton.addEventListener("click", () => {
    if (loginButton.textContent === "login"){
        loginButton.innerHTML = '<i class="fa-solid fa-right-from-bracket"></i>logout'
        buttonStatus.innerHTML = "you are logged in"
    }else {
        loginButton.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i>login'
        buttonStatus.innerHTML = "you are logged out"
    }
})

// button that can control visibility of a paragraph
const ctrlpara = document.getElementById("ctrlpara")
const para = document.getElementById("invisible")

ctrlpara.addEventListener("click", () => {
    if(ctrlpara.textContent.includes("Hide Content")){
        ctrlpara.textContent = "Show Content"
        para.textContent = ""
    }else {
        ctrlpara.textContent = "Hide Content"
        para.textContent = "this paragraph is being shown"
    }
})

const buttonGreeting = document.querySelector("#concatenate")

buttonGreeting.addEventListener("click", () => {
    const name = prompt("what is your name")
    const greeting = document.querySelector("#greeting")
    greeting.textContent = `hello my name is ${name}`

    
})






















