for (let number = 1; number <= 100; number++) {
  
    // let square = number * number;  

    if(number == 1){
        console.log(number)
        continue;
    }else if (Math.sqrt(number) === Math.floor(Math.sqrt(number))) {
        console.log(number);
        break;
    }

    console.log(number)
  
}