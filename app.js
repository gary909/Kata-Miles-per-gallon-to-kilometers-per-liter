function converter (mpg) {
    //code to convert miles per imperial gallon to kilometers per liter
    //1 mile to 1.609344 km
    ans = (1.609344 / 4.54609188) * mpg;
    return Number(ans.toFixed(2));
}

console.log(converter(10)); // 3.54
console.log(converter(20)); // 7.08
console.log(converter(30)); // 10.62

//Imperial Gallon = 4.54609188 litres 1 Mile = 1.609344