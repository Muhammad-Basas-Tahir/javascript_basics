//destructure assignment

let arr = [
    {id:1, name:'Ahmed'},
    {id:2, name:'Basas'},
    {id:3, name:'Taimen'},
]
const [A, B, C] = arr


let obj = {company:"developersClub"}

const combine = {...arr[0],...obj}
console.log(combine);

