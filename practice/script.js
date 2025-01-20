const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";
const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";
sect.appendChild(para);

const text = document.createTextNode(
    " — the premier source for web development knowledge.",
  );
const linkPara = document.querySelector("p");
linkPara.appendChild(text);
linkPara.parentNode.removeChild(linkPara);

para.style.color = "black";
para.style.backgroundColor = "red";
para.style.padding = "20px";
para.style.width = "250px";
para.style.textAlign = "center";
