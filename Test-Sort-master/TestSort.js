const Sort = require('./sort.js');

let list = [];
for(let x=0;x<10;x++){
  list[x]=Math.random();
}
//run the sorts
let sorted = Sort.merge(list);
