let myImage = document.querySelector('img');

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/mr-robot.jpg'){
		myImage.setAttribute('src','images/season-2.jpg');
	} else {
		myImage.setAttribute('src','images/mr-robot.jpg');
	}
}

function setHeading(name) {
	let myHeading = document.querySelector('h1');
	myHeading.textContent = 'just a hacker,'+name+'!';
}

function setUserName() {
	let myName = prompt('Please input your name');
	localStorage.setItem('name',myName);
	setHeading(myName);
}

let storedName = localStorage.getItem('name');
if(!storedName){
	setUserName();
} else {
	setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;