const names = ['abul','babul','cabul','dabul','mabul','abul','tabul','babul','cabul','cabul','mabul']

function removeDuplicate(names){
    const uniqueName = [];
    for(let i=0;i<names.length;i++){
        let name = names[i];
        if(uniqueName.includes(name) === false){
            uniqueName.push(name)
        }
    }
    return uniqueName;
}

const uniqueList = removeDuplicate(names)
console.log(uniqueList)