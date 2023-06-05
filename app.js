"use strict";
let user;
user = ['John', 25];
console.log(user[0]);
console.log(user[1]);
// *22222222222
function filterObjectsByProperty(objects, value) {
    const filteredObjects = [];
    for (const obj of objects) {
        if (obj.property === value) {
            filteredObjects.push(obj);
        }
    }
    return filteredObjects;
}
const myObjects = [
    { property: 'A' },
    { property: 'B' },
    { property: 'C' },
    { property: 'A' },
];
const filteredObjects = filterObjectsByProperty(myObjects, 'A');
console.log(filteredObjects);
// !333333333333333
function findObjectByProperty(objects, property, propertyValue) {
    for (let obj of objects) {
        if (obj.hasOwnProperty(property) && obj[property] === propertyValue) {
            return obj;
        }
    }
    return undefined;
}
const myObjects2 = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Alice', age: 33 },
    { name: 'Bob', age: 35 }
];
const result = findObjectByProperty(myObjects2, 'name', 'Alice');
console.log(result);
// *444444444444
function calculateAverage(properties) {
    if (properties.length === 0) {
        return 0;
    }
    const sum = properties.reduce((accumulator, currentValue) => accumulator + currentValue);
    const average = sum / properties.length;
    return average;
}
function calculatePropertiesAverage(objects) {
    const propertyAverages = {};
    const keys = Object.keys(objects[0]);
    for (const key of keys) {
        const properties = objects.map(obj => obj[key]).filter(value => typeof value === 'number');
        const average = calculateAverage(properties);
        propertyAverages[key] = average;
    }
    return propertyAverages;
}
const objects2 = [
    { value1: 10, value2: 20, value3: 30 },
    { value1: 5, value2: 15, value3: 25 },
    { value1: 2, value2: 8, value3: 12 }
];
const averages = calculatePropertiesAverage(objects2);
console.log(averages);
