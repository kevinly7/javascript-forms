"use strict";

var person = {
	name: 'felix',
	sayHello: function() {
		return 'Hello ' + this.name;
	}
};

console.log(person.name);
person.name = 'Dave';
person.coolnessFactor = Math.POSITIVE_INFINITY;
person.reportCoolness = function() {
	if (this.coolnessFactor > 50) {
		console.log('very cool!');
	}
	else {
		console.log('total nerd!');
	}
};

console.log(person.sayHello());
person.reportCoolness();