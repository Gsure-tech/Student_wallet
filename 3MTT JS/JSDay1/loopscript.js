alert('loop')
// Syntax
/*  
for(initialization; condition; increment){
    statement
}
*/
 
// let result, i, arrayOutput=[];
let result =[];
let i;

for(i=1; i<=10; i++){
    // result = arrayOutput.push(i)
        if(i % 2 !=0){
            result.push(i);
        }

}

console.log(result);