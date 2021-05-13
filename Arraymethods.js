const colors = ['blue', 'green', 'white'];

function iterate(item) {
  console.log(item);
}

colors.forEach(iterate);

console.log("isArray() method");
console.log(Array.isArray(colors));

console.log("includes() method");
console.log(colors.includes('green'));

console.log("push() method");
console.log(colors.push('yellow'));

console.log("pop() method");
console.log(colors.pop());

console.log("Shift() method");
console.log(colors.shift());

console.log("UnShift() method");
console.log(colors.unshift('blue'));

console.log("Splice() method");
colors.splice(1,0,'yellow');
console.log(colors);

console.log("Slice() method");
console.log(colors.slice(2,4));

console.log("Join() method");
console.log(colors.join());

console.log("IndexOf() method");
console.log(colors.indexOf('green',1));
console.log(colors.indexOf('violet'));

console.log("Map() method");
console.log(colors.map(x => x+'!'));

console.log("Filter() method");
console.log(colors.filter(word => word.length>4));
