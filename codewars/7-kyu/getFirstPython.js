"use strict";
//https://www.codewars.com/kata/5827bc50f524dd029d0005f2
function getFirstPython(list) {
    const foundDev = list.find((dev) => dev.language === "Python");
    if (foundDev) {
        return `${foundDev.firstName}, ${foundDev.country}`;
    }
    return "There will be no Python developers";
}
//test case
var list1 = [
    { firstName: "Mark", lastName: "G.", country: "Scotland", continent: "Europe", age: 22, language: "JavaScript" },
    { firstName: "Victoria", lastName: "T.", country: "Puerto Rico", continent: "Americas", age: 30, language: "Python" },
    { firstName: "Emma", lastName: "B.", country: "Norway", continent: "Europe", age: 19, language: "Clojure" },
];
