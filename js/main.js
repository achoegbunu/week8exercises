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
	image1.src = "https://statics.sportskeeda.com/wp-content/uploads/2012/01/vieiraDM0510_468x631-222x300.jpg"
	newDiv2.appendChild(image1)

	var btn = document.createElement("BUTTON");
	var t = document.createTextNode("CLICK ME");
	btn.appendChild(t);
	newDiv2.appendChild(btn);

	var images = [
	{
		path: "https://statics.sportskeeda.com/wp-content/uploads/2012/01/vieiraDM0510_468x631-222x300.jpg",
		desc: "Vieira the defensive genius"
	},
	{
		path: "https://statics.sportskeeda.com/wp-content/uploads/2013/02/FA-Cup-Final-Arsenal-v-Manchester-United-52962102-1360363884.jpg",
		desc: "Vieira stops Ronaldo"
	},
	{
		path: "https://cdn.images.dailystar.co.uk/dynamic/58/photos/58000/302058.jpg",
		desc: "Ozil the pass master"
    }
  ]

	function changeImage () {
		counter++;
		var image = document.getElementById("Arsenal");
		image1.src = "https://statics.sportskeeda.com/wp-content/uploads/2012/01/vieiraDM0510_468x631-222x300.jpg"
		image1.alt = "took a minute, but it got coded"
	}











