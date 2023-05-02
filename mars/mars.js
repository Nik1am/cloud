var count = 4;						// кількість фото
var index = 1;						// номер поточного фото
function next() {
		index++;					//номер наступного фото
		if (index > count) index = 1;		//після четвертого знов перше
		var photo = document.getElementById("current");	//знаходимо фото на сторінці
		photo.src = "image"+index+".jpg";	//адреса наступного фото
	}
	function add() {
		var newPhoto = document.createElement("img");	//створити новий об’єкт на сторінці
		index++;					//номер наступного фото
		if (index > count) index = 1;		//після четвертого знов перше
		newPhoto.src = "image"+index+".jpg";	//адреса наступного фото
		var addPhoto = document.getElementById("gallery");	//знаходимо куди додати
		addPhoto.appendChild(newPhoto);	//додаємо як дочірній елемент
	}
