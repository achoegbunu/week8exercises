var myDiv = document.getElementsByClassName("class1")[0]
myDiv.style.backgroundColor = "grey";

var newDiv1 = document.createElement("div1");

var newH1 = document.createElement("h1");
newH1.innerText = "welp, my h1 finally works";
var myBody = document.getElementsByTagName("body")[0]
myBody.appendChild(newDiv1)
newDiv1.appendChild(newH1)

var extraNewH1 = document.createElement("h1")
extraNewH1.innerText = "umm, yeah it still works";
var myBody = document.getElementsByTagName("body")[0]
myBody.appendChild(newDiv1)
newDiv1.appendChild(extraNewH1)

var myDiv = document.getElementsByClassName("class1")[0]
var newDiv2 = document.createElement("div2");
var coolestNewH1 = document.createElement("h1");
var newTextNode = document.createTextNode("my new h1 though, so cool");
coolestNewH1.innerText = "my new h1 though, so cool";
var myBody = document.getElementsByTagName("body")[0]
myBody.appendChild(newDiv2)
newDiv2.appendChild(coolestNewH1)

	var image1 = document.createElement("IMG");
	image1.id = "Arsenal";
	image1.src = "https://wallpaper-house.com/data/out/9/wallpaper2you_311043.gif"
	newDiv2.appendChild(image1)










