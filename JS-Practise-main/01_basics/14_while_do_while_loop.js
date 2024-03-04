// let's learn while and do while loop


let i = 0     // declaration od index value
while(i <= 10){ 
    if(i == 6){
        break}// here it will check the condition
console.log(i);  // print the value
i = i + 3 // change the condition increment or decrement
}


// do while loop in this loop it will do(print the value) first than check the condition


let val = 1
do {
    if (i == 3) {
        continue
    }
    console.log(val);
    val ++
} while (val <=20);


let value = 21
do {
    console.log(value);
    value ++
} while (value <= 20);