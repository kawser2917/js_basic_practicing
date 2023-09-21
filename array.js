const name = "kawser Ahmed";
const age = 23;
const isStudent = true;
const student = {"id":101, "class": "varsity"};
const friends = [20,25,30,35,40]

console.log(typeof name)
console.log(typeof age)
console.log(typeof isStudent)
console.log(typeof student)
console.log(typeof friends) // we don't get the type of array with type of funtion

console.log(Array.isArray(friends)) //so we need to use Array.isArray to detect it is array or not