//Soal No 1

const _number1 :number = 25;
if(_number1 % 2 === 0 )
{
    console.log(`${_number1} -> even number`);
}else {
    console.log(`${_number1} -> odd number`);
}

//Soal No 2
const _number2 :number = 7;
let isprime : boolean = true;

for(let i : number = 2; i < _number2; i++ ){
    if(_number2 % i===0){
        isprime = false;
        break;
    }
}
console.log(isprime)    


