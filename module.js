//if we want to import other files then we use require with relative path

const {people,ages} = require('./people');

console.log(people,ages); // it will return an empty object bcz we dont export anything from people.
//after we export ..then it will print the exported value

const os = require('os');//builtin module . gives info about OS
console.log(os.platform(),os.homedir());