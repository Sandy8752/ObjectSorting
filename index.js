const people = [
  { name: 'Alice', age: 21 },
  { name: 'Alice', age: 24 },
  { name: 'Max', age: 21 },
  { name: 'June', age: 23 },
  { name: 'July', age: 24 }
];

function groupBy(arr) {
  let obj = {};
  for(let i=0; i<arr.length; i++) {
    let field = arr[i].age.toString();
    if(obj[field]) {
      obj[field].push(arr[i]);
    } else {
      obj[field] = [arr[i]];
    }
  }
  return obj;
}



console.log(groupBy(people));