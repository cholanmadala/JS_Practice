// // const destruct = (name, age,location, pin, sex='Male') => {
// // 	console.log(sex);
// // }

// // destruct('cholan', 29, 'Bangalore', 560037, 'Male');
// // destruct('Dhanusha', 27, 'Bangalore', 560037, 'Female');

// var {oned: twod} = {oned: 124};
//  console.log(twod);

// var {yz: name} = {yz: 'Cholan Madala'}
// console.log(name);

// var data = [
// {name: 'Madala Cholan Satyanarayana', age: 29},
// {name: 'Madala Radha Krishna', age: 55},
// {name: 'Madala Naveen Raghuveer', age: 27},
// {name: 'Madala Durga Dhaatri', age: 1.5}
// ];

// console.log(data.map(({name, age}) => name + ' ' + age ));
// console.log(data.sort((a,b) => a.age - b.age));


function Cars (name, cost) {
	this.name = name;
	this.cost = cost;
	var data= 'Cars private variable';
	this.getData = () => {
		console.log('in getData ', this);
		return data };
	this.setData = function (setValue) {
		console.log('in setData ', this);
		data = setValue
	};
}

// var xuv = Cars('xuv', 22);
// console.log(xuv)
var xuv1 = new Cars('xuv', 22);
var verna = new Cars('verna', 22);
var crv = new Cars('crv', 22);
var i20 = new Cars('i20', 22);
// console.dir(xuv1);
// console.log(typeof xuv1);
// console.log(i20.name, i20.data, i20.getData());
i20.setData('i20 is a better car than i10');
console.log(i20.getData())
// console.log(i20.name, i20.data, i20.getData());
// console.log(verna.name, verna.data, verna.getData());