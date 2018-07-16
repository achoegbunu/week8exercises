var myDiv = document.getElementsByClassName("class1")[0]
myDiv.style.backgroundColor = "grey";

var newDiv1 = document.createElement("div1");

var newH1 = document.createElement("h1");
newH1.innerText = "welp, my h1 finally works";
var myBody = document.getElementsByTagName("body")[0]
myBody.appendChild(newDiv1)
newDiv1.appendChild(newH1)

var extraNewH1 = document.createElement("hi")
extraNewH1.innerText = "umm, yeah it still works";
var myBody = document.getElementsByTagName("body")[0]
myBody.appendChild(newDiv1)
newDiv1.appendChild(extraNewH1)


