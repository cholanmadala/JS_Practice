/*// (function() {
// 	for (var i = 0; i < 10; i++) {
// 		(function check(i) {
// 			setTimeout(function() {
// 				console.log(i);
// 			}, 1000);
// 		})(i);
// 	}
// })();

function Cars (name, model) {
	this.name = name;
	this.model = model;
}

Cars.prototype = {
	constructor: Cars,
	getName: function (){
		return this.name;
	},
	getModel: function (){
		return this.model;
	},
	getSomedetails: function () {
		return 'Hey this is of cars';
	}
}

function inheritPrototype (child, parent) {
	var copyOfParent = Object.create(parent.prototype);
	copyOfParent.constructor = child;
	child.prototype = copyOfParent;
}

function Bikes (company, power) {
	this.company =company;
	this.power = power;
}

inheritPrototype(Bikes, Cars);

Bikes.prototype.getPower = function(){
	return this.power;
}

var bikeOne = new Bikes('Honda', '200cc');
console.log(bikeOne.getSomedetails());
console.log(bikeOne.getPower());


*/
/*
console.log(shape);
var shape;

shape = 'circle';
console.log(shape);*/

// function getShortest(data){
// var small;
// var zerosIndex = [];
// console.log(data.length);
// for (var i = 0; i< data.length; i++) {
// 	if (data[i] !== 0) {
// 		if(!small && data[i] !== 0) {
//             small = data[i];
//         } else if (small && data[i] < small) {
//             small = data[i];
//         }
// 	} else {
// 		// data.splice(i, 1);
// 		zerosIndex.push(i);
// 	}
// }
// console.log(data);
// console.log('zeros at ', zerosIndex);
// for(var i=0; i < zerosIndex.length; i++){
// 	data.splice(i, 1);
// }
// console.log(data.length);
// 	return small;
// }

// function subtracting (data) {
// var smallest = getShortest(data);
// console.log('smallest is: ', smallest);
// 	for(var i =0; i< data.length; i++){
// 		data[i] = data[i] - smallest;
// 	}
// 	if (data.length === 1) {
// 		return data;
//     } else {
// 		return subtracting (data);
// 	}
// }
// getShortest([1, 0, 0, 0]);

// function removeSmallest (data){
// 	var i=0;
// 	while(i < data.length) {
// 		console.log(data[i]);
// 		if(data[i] === 0) data.splice(i, 1);
// 		i++;
// 	}
// 	console.log(data)
// }

// removeSmallest([1, 0, 0, 0, 1, 0, 0, 0]);

// --------------------------------- ES6 Practice -------------------------

// let x = 1;
// function check() {
// console.log(x);
// let x = 10;
// }
// check();
// console.log(x);

// --------------------------------- for loop with let -------------------------

// function createDivs () {
// 	for (let i = 0; i < 40; i++) {
// 		var div = document.createElement('div');
// 		div.onclick = function () {
// 			console.log(i);
// 		}
// 		document.getElementsByTagName('body')[0].appendChild(div);
// 	}
// }

// createDivs();

// $.ajax({
//   url: 'https://api.wit.ai/message',
//   data: {
//     'q': 'brightness to 23',
//     'access_token' : 'MKJ72OW4UEK6KUBOLABK3XJF7ZZWEST3'
//   },
//   dataType: 'jsonp',
//   method: 'GET',
//   success: function(response) {
//       console.log("success!", response);
//   }
// });


// function getWitResponse () {
// 		const MY_WIT_TOKEN = 'MKJ72OW4UEK6KUBOLABK3XJF7ZZWEST3';
// 		const val = 'Brightness to 56';
// 		const url = `https://api.wit.ai/message?q=${val}`;
// 		const headers =  {
// 				method: 'GET',
// 				headers: {Authorization: `Bearer ${MY_WIT_TOKEN}`}
// 			  };
// 		fetch(url, headers)
// 		  .then((resp) => resp.json())
// 		  .then(function(data) {
// 			console.log(data);
// 			console.log(data.entities.intent && data.entities.intent[0].confidence ?
// 				[data.entities.intent[0].value, data.entities.intent[0].confidence] :
// 				'no intent'
// 			);
// 		  })
// 		  .catch(function(error) {
// 			console.log(error);
// 		  });
// 	}

// 	getWitResponse();

// const caller = (name, age) => {
// 	console.log(name + ' is an awesome guy. His age is just ' + age + '.');
// }
// console.log(1);
// setTimeout(caller, 0*1000, 'Cholan', 29);
// console.log(2);
// setTimeout(caller, 3*1000, 'Madala', 28);
// setTimeout(caller, 4*1000, 'Satya', 27);
// setTimeout(caller, 5*1000, 'MCS', 26);

// setImmediate(
//   () => console.log('I am equivalent to setTimeout with 0 ms'),
// );

// setTimeout(
//   () => console.log('Hello after 10 seconds. MAYBE!'),
//  10 * 1000,
// );
// for (let i = 0; i < 1e3; i++) {
//   // Block Things Synchronously
//   console.log('hi');
// }

// console.log('next is interval');

// let counter = 0;
// const timerId = setInterval(() => {
// 	++counter;
// 	console.log('Hello World', counter);
// 	if (counter == 10) {
// 		clearInterval(timerId);
// 		console.log('Done');
// 	}
// }, 1*1000)
// console.log('end')

// for (let i = 0; i < 1e3; i++) {
//   // Block Things Synchronously
//   console.log('hi again');
// }

// var myObj = {
// counter : 1,
// whoCalledMe : () => {
//   console.log('Caller is', this);
// }
// }
// // setTimeout(myObj.whoCalledMe, 0);
// myObj.whoCalledMe();
// var y ={data: 'this is obj y'};
// myObj.whoCalledMe.call(y);

// console.log(data2);

// var apiMapping = (routes) => {
//             let resp = routes.map((r) => {
//                 let name = (r.method + r.path)
//                     .split(/[\/:]/)
//                     .map((p, i) => {
//                         if (i) {
//                             if (p) {
//                                 return p.charAt(0).toUpperCase() + p.slice(1);
//                             } else {
//                                 return 'By';
//                             }
//                         } else {
//                             return p;
//                         }
//                     })
//                     .join('');
//                 return {
//                     name: name,
//                     method: r.method,
//                     path: r.path
//                 };
//             });
//         return JSON.stringify(resp);
//     };
//     var gen = apiMapping(data2);
//     console.dir(gen);

//

// function check () {
//     for(var i = 0; i<10; i++) {
//         setTimeout(checkLog, 10000, i);
//     }
// }

// function checkLog(i) {
//     console.log(i);
// }
// check();

// function doSetTimeout(i) {
//   setTimeout(function() { console.log(i); }, 1000);
// }

// for (var i = 1; i <= 2; ++i)
//   doSetTimeout(i);

// const obj = {
//   id: '42',
//   whoCalledMe: () => {
//     console.log('Caller is', this);
//   }
// };

// console.log(setTimeout(obj.whoCalledMe, 2000));


// function loopTimer (delay) {
//     setTimeout(function () {
//         console.log(`delay of ${delay} seconds`);
//         loopTimer(delay+1);
//     }, delay * 1000);
// }

// function loggerFunc (i) {
//     console.log(`delay of ${i} seconds`);
// }

// loopTimer(1);

// let timer = 5;
// let timerId;
// function loopTimer (delay) {
//     // ++timer;
//     if (timer === 5) {
//         clearInterval(timerId);
//         timerId = setInterval(function () {
//             console.log(`Hello World. ${delay} ms`);
//             loopTimer(delay+100);
//         }, delay);
//         timer = 0;
//     }
//     timer = timer + 1;
// }

// loopTimer(100);


// let lastIntervalId, counter = 5;
// const greeting = delay => {
//   if (counter === 5) {
//     clearInterval(lastIntervalId);
//     lastIntervalId = setInterval(() => {
//       console.log('Hello World. ', delay);
//       greeting(delay + 100);
//     }, delay);
//     counter = 0;
//   }
// counter += 1;
// };
// greeting(100);

// function divClick(ev) {
// 	console.log(ev);
// 	// ev.preventDefault();
// 	ev.stopPropagation();
// }
// console.log(named);
// function check(){
// 	named = 'cholan';
// 	// = 90;
// }
// console.log(named);
// check();
// console.log(named);