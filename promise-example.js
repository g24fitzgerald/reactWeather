//promises are easier to maintian, write better code than having multiple callbacks

//***BAD
// function getTempCallback(location, callback){
//   callback(undefined, 78); //if no error
//   callback('City not found'); //if error
// }
//
// getTempCallback('London', function(err, temp){
//   if (err){
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });

//****GOOD
//promise. have function, that returns new promise, that retur
// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//     //setTimeout delays function specified for # miliseconds
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
// //then lets us
// getTempPromise('London').then(function(temp){
//   console.log('promise success', temp);
// }, function (err){
//   console.log('promise error', err);
// });

//Challenge problem
// function addPromise(a,b){
//   return new Promise(function(resolve, reject){
//     if (typeof a === 'number' && typeof b === 'number'){
//       resolve(a+b);
//     } else { reject('both inputs need to be numbers')}
//   });
// }
// addPromise(1).then(function(sum){
//   console.log('promise success', sum);
// }, function(err){
//   console.log('promise error', err);
// });
