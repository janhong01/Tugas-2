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

//Soal no 3
const _number3 : number = 3;
let _hasil : string = `${_number3} ->`;
let _sum : number = 0;
for (let i=1; i<=_number3; i++){
    _sum += i;
    _hasil += i === _number3 ? `${i} = ${_sum}`:`${i} + `;

}
console.log(_hasil);

//Soal no 4
const _number4 : number = 6;
_hasil = `${_number4}! -> ${_number4} X`;
let _fact =  _number4;
for(let i = _number4 - 1; i >= 1; i--){
    _fact *= i;
    console.log(i);
    console.log(_fact);
    _hasil += i === 1 ? `${i} = ${_fact}` : `${i} X `;

}
console.log(_hasil)