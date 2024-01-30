let sum=0;
let n=1;
while(n<=200){
    console.log(n)
    n++;
    if(sum>100){
        break;
    }
    sum+=n;
}  
console.log(sum);