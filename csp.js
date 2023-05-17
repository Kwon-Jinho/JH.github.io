/*
* Name: kwon jin ho
* Date: may 17, 2023
* Section: IAB 6068
*
* This is the JS to implement the UI for my cryptogram generator, and
generate
* different types of ciphers from user input.
*/
"use strict";

const magicBtn = document.getElementById("magic-btn");

magicBtn.addEventListener("click", () => {
  magicBtn.textContent = "Bird";

  const x = Math.random() * (window.innerWidth - magicBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - magicBtn.offsetHeight);
 
  magicBtn.style.top = y + "px";
  magicBtn.style.left = x + "px";
});