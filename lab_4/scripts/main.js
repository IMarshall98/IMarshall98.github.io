myName = "Imari Marshall";
sName = myName.split(" ");
var firstName = sName[0];
var lastName = sName[1];

function clickMe(){
    const newHeader = document.querySelector('.header');
    newHeader.innerHTML= "Imari's Lab 4";

    var newPara1 = document.createElement("p");
    var para1text = document.createTextNode("My name has " + myName.length + " characters");
    newPara1.appendChild(para1text)
    var cont = document.querySelector('.content');
    cont.appendChild(newPara1);

    var newPara2 = document.createElement("p");
    var para2text = document.createTextNode("The third character of my name is " + firstName.charAt(2).toUpperCase());
    var para2text2 = document.createTextNode(" " + lastName.substring(lastName.length -3, lastName.length));
    newPara2.appendChild(para2text);
    newPara2.appendChild(para2text2);
    var cont2 = document.querySelector('.content');
    cont2.appendChild(newPara2);
}