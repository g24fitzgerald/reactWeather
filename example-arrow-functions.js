// var names = ['aldrin', 'bob', 'buzz'];
// //standard. long way
// names.forEach(function(name){
//   console.log('forEach', name);
// });
// //curly braces for multi-line
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
// //single line ES6
// names.forEach((name) => console.log(name));
//
// //when using a simple expression,
// var returnMe = (name) => name + '!';
// console.log(returnMe('Kim'));
//
// //major differences, arrowFunctions take on parents binding, unlike anonymous funtions
// //here this keyword doesn't refer to Kim. this binds the function
// var person = {
//   name: 'Kim',
//   greet: function(){
//     names.forEach(function(name){
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();
//
// //here this binds the name of parent: personTwo. doesn't update this keyword
// var personTwo = {
//   name: 'Kim',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };

// personTwo.greet()

//******Challenge
function add(a,b) {
  return a + b;
}
console.log(add(5,11));
// add -statement (with {})
var addStatement = (a,b) => {
  return a+b;
};
console.log(addStatement(4,10));
//add -expression (single line)
var addExpression = (a,b) => a+b;

console.log(addExpression(1,9));

//use expression sytax to handle everythin on one line
