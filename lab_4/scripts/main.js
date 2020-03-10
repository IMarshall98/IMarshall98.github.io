const myHeading = document.querySelector('.header');
myHeading.textContent = "Imari's Lab 4";

var para1 = document.createElement("P");
para1.innerText = "My name has # letters";
document.body.appendChild(para1);

var para2 = document.createElement("P");
para2.innerText = "The third letter of my first name is #";
document.body.appendChild(para2);