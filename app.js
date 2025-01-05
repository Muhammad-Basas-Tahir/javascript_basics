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



const btn2 = document.querySelector("#Button2");
const txt2 = document.querySelector("#Para2");

btn2.addEventListener("click", updateTheme);

function updateTheme(){
    if(btn2.textContent === "Dark Mode"){
        btn2.textContent = "Light Mode";
        txt2.textContent = "Theme is Light";    
    }   else {
        btn2.textContent = "Dark Mode";
        txt2.textContent = "Theme Is Dark";
    }
}    

const title = document.getElementById("title")
title.textContent = "world"
