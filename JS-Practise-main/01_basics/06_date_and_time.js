// dates and time

const date = new Date()

console.log(date.toDateString()); //returns date with Day Wed Oct 11 2023

console.log(date.toLocaleDateString());

console.log(date.toString()); // returns date with Day and time 
                            // Wed Oct 11 2023 13:57:57 GMT+0000 (Coordinated Universal Time)

console.log(date.toISOString()); // returns date with time with ISO string

const time = Date.now()

console.log(time);
console.log(date.getDay());
console.log(date.getMonth() +1);

console.log(new Date("2023-01-14").getTime());
console.log(new Date("2023-01-14").toLocaleDateString("en-in"));

