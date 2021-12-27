var names_of_people = [];
    
function submit(){
	person= document.getElementById("name1").value;
	list = names_of_people.push(person);
}

function show(){
	document.getElementById("list").innerHTML="p1";
}