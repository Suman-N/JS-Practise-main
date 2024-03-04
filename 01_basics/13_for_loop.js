// for loop or itration 

for(let i = 0; i <= 10; i++){
    const result = i
    // console.log(result); // it will print from 1 to 10 numbers
}
  

for (let i = 0; i <= 10; i++) {
    // const element = i; 
    console.log(`Table of ${i}`);

    for (let j = 0; j <= 10; j++) {
        const elementj = j;
        console.log(`${i} * ${j} = ${i*j}`);
    }
   
}

// for loop with break and continue

for (let i = 1; i <= 20; i++) {
    if(i == 5){ 
        console.log("5 is Detected");
        break
    }
 console.log(i);
    
}


for (let i = 1; i <= 20; i++) {
    if(i == 5){ 
        console.log("5 is Detected");
        continue
    }
 console.log(i);
    
}
