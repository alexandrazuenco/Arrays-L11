var myArray =  ["HTML", 11, "JavaScript", 2, "CSS", 23, 12];
myArray.push(-5);
console.log ('result', myArray);
myArray.unshift(1000);
console.log ('result', myArray);
myArray.push('Last array element');
console.log ('result', myArray);
myArray.splice(3, 1);
console.log ('result', myArray);

filteredArray = myArray.filter(function (item) {
    return item !== "JavaScript";
});
console.log ('result' , myArray);

filteredNumbersArray = filteredArray.filter (function (item){
    return typeof item === "number";
})

console.log ("filtered array", filteredNumbersArray);

squareItems = filteredNumbersArray.map (function  (item) {
    return Math.pow (item, 2) 
});
console.log ("square items", squareItems);

console.log ("max elemnt is: ", Math.max.apply(null, squareItems));

var sum = 0;
for (var i=0; i< squareItems.length; i++) {
    console.log ('item= ', squareItems[i]);
    sum = sum + squareItems[i];
}

squareItems.reduce(function(item, acum) {
    acum = acum + item;

    return acum;
}, 0)

 console.log ('hurray sum' , sum);
 console.log ('hyrray reduce', reduceSum);