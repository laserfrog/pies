thingy = ["pie", "cheese", "doughbut", "cheese"]
var array = []
for (let thing in thingy) {

  var yep = {
    'item': thingy[thing]
  }
  array.push(yep)
}
thingy.forEach(the_thing => {
  console.log(the_thing)
});
console.log(array)

hello = () => "Hello world!";
let pies = hello();

function cheese() {
  return "hi there!";

}
let pips = cheese()
console.log(pies, pips);

// console.log(thingy.length);
// document.addEventListener('DOMContentLoaded', function() {
//   document.querySelector('button').onclick = count;
// })

let barry = "hello";

for (let i in barry) {
  console.log(barry[i])
}

console.log(barry.substring(0, 3));
console.log(barry.at(-1));
let str = "42";
console.log(str);
console.log(Number.parseInt(str, 10));

const my_pokemon = ['barry', 'garry']
const theres = 'barry'

if (my_pokemon.includes(theres)) {
  console.log("you win!")
} else {
  console.log("you lose!")
}