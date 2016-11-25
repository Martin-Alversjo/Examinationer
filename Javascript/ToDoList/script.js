
//Hämta in data från HTML dokumentet
var input = document.getElementById('input');
var button = document.getElementById('button');
var lista = document.getElementById('ul1');
var lista2 = document.getElementById('ul2');


//Funktion för att lägga till Syssla
function addToDo() {
		var syssla = document.createElement('li');

		if (input.value === "") {
			alert("Du måste lägga till text.");
		}
		else {
			syssla.innerHTML = input.value + '<i onclick="removeListItem(this.parentElement)" class="fa fa-trash-o" aria-hidden="true"></i> <i onclick="listItemClick(this)" class="fa fa-check" aria-hidden="true"></i>';
			lista.appendChild(syssla);

		}
		input.value = "";
}

//Funktion för att skicka färdig syssla till listan "Färdiga Sysslor"
function listItemClick(listItem){
		lista2.appendChild(listItem.parentElement);
}

//Funktion för att ta bort syssla
function removeListItem(listItem) {
		var currentList = listItem.parentElement;
		currentList.removeChild(listItem);
}
