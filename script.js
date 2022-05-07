body {background-color:black;
	color:white;
	font:arial;
}

h1 {color:grey;
	font:verdana;
	padding: 0px 10px;
}

.maindiv { background-color:white;
	color:black;
	width:400px;
	padding:20px;
	border-radius:25px;
	margin:auto;
	line-height:normal;
}

#mainform { margin:auto; 
	line-height:30px;
	display:table;
}

#mainform p { display: table-row; 
}

#mainform label { display:table-cell
}

.result { display:none;
}

footer {padding: 0px 10px;
	padding-top:10px;
}

know = {

"Hello" : "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  Hi there!",
"hello" : "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  Hi there!",
"HELLO" : "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  Hi there!",
"Who are you?" : "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp I am Nikhil's Assistant",
"How are you?" : "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp I am Fine",
"How old are you?" : "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp I am infinity in age"




};

function talk() {
var user = document.getElementById("userBox").value;
document.getElementById("userBox").value= "";
document.getElementById("chatLog").innerHTML += user+"<br>";

if (user in know) {
document.getElementById("chatLog").innerHTML += know[user] + "<br>";
} else 

{
document.getElementById("chatLog").innerHTML += "I don't understand... <br>";
}
}

