var Cat = require('./Cat');
var Mouse = require('./Mouse');

var cat = new Cat();
var mouse = new Mouse('mickey');
cat.eat(mouse);
console.log(cat)