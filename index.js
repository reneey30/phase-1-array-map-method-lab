const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
let names = [];
let name2;

let arr = []
const titleCased = () => {
  tutorials.forEach(tutorial => {
    names.push(tutorial.split(" "))
  })
  
  for(let line of names){
    for(let x = 0; x < line.length; x++){
      line[x] = line[x].charAt(0).toUpperCase() + line[x].slice(1);
    }
    arr.push(line.join(" "))
  }


  return arr;
}


