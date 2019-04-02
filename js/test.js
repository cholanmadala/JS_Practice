/*personName="sun";
console.log(personName);
function check(){
	console.log(personName);
	var personName = 'cholan satya';
	console.log(personName);
	// = 90;
}
console.log(personName);
check();
console.log(personName);*/

function counter() {
	var count = 0;
	return function (){
		count +=1;
		console.log(count);
	}
}

var add = counter();
add();
add();
add();
console.log(count);