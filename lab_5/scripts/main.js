/*change heading*/
const myHeading = document.querySelector('.header');
myHeading.textContent = "Imari's List of Countries";

/*ran console.log(countries.length) = 243*/

/*inject ordered list into content with class countries*/
var newList = document.createElement("OL");
var cont = document.querySelector('.content');
cont.appendChild(newList);
newList.className += "countries";

/*onclick function*/
document.querySelector('.activate').addEventListener("click", function(){
    const list = document.querySelector('.countries');
    list.innerHTML = '';
    for (let i = 0; i < 25; i++){
        let num = Math.floor(Math.random() * 243);
        let selected = countries[num];
        let listItem = document.createElement('li');
        listItem.innerHTML = JSON.stringify(selected);
        list.appendChild(listItem);
    }
    unselectedCountries = []
    for (let i = 0; i < countries.length; i++) {
        let curr = countries[i];
        if (list.includes(curr) === -1) {
          let result = curr;
          unselectedCountries.appendChild(result);
          console.log(unselectedCountries)}}
    })