const friendsAge = [10, 15, 20, 25, 30, 35, 40, 45];

// Splice will remove element from the array from where you want to remove and you can add also new element from the postion you mentioned
const partial = friendsAge.splice(2,5,22,26,29);

console.log(partial)
console.log(friendsAge)