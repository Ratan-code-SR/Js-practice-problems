const names = ["ratan", "kobita", "ribek", "ripon"];
const result = names.flatMap((value)=>{
    return value + "r";
})

console.log(result);