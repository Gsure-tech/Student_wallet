alert('loop')
// Syntax
/*  
for(initialization; condition; increment){
    statement
}
*/
 
// let result, i, arrayOutput=[];
let result =[];
let odd =[];
let i;

for(i=1; i<=10; i++){
    // result = arrayOutput.push(i)
        if(i % 2 !=0){
            result.push(i);
        } else{
            odd.unshift(i);
        }

}

console.log(result);
console.log(odd)

// using while loop

let a =1, oddNumbers =[], evenNumbers =[];

while(a<=10){

        if(a % 2 !=0){
            oddNumbers.push(a);
            
        } else{
            evenNumbers.unshift(a);
        }
        a++;
}


console.log(evenNumbers);
console.log(oddNumbers);