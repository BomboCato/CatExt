"use strict";

function createCat()
{
    let img = document.createElement("IMG");
    img.src = chrome.runtime.getURL('icons/cat.png');
    img.height = 48;
    img.width = 48;
    img.alt = "Your feline friend";
    img.id = "cat-image";
    img.style.position = "absolute";

    moveCatRandom(img);
    img.style.zIndex = 99999;

    img.addEventListener("click", (event) => {
        moveCatRandom();
    });
    document.body.prepend(img);
    return img;
};

function moveCatRandom(img)
{
    let body_height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    let body_width = Math.max(document.body.scrollWidth, document.body.offsetWidth, document.documentElement.clientWidth, document.documentElement.scrollWidth, document.documentElement.offsetWidth);
    
    img.style.top = Math.random() * (body_height - 100) + 50;
    img.style.left = Math.random() * (body_width - 100) + 50;
}

document.body.style.border = "5px solid red";
createCat();