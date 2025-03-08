// 1.Write a code to find area of rectangle
let panjang = 5;
let lebar = 3;
let luas = panjang * lebar;

console.log("Luas Persegi Panjang:", luas);

//2. Write a code to find diameter, circumference and area of a circle
function circleProperties(radius) {
    let diameter = 2 * radius;
    let circumference = 2 * Math.PI * radius;
    let area = Math.PI * Math.pow(radius, 2);

    console.log("Diameter =", diameter);
    console.log("Circumference =", circumference.toFixed(4));
    console.log("Area =", area.toFixed(2));
}

let radius = 5;
circleProperties(radius);

// 3.Write a code to find angles of triangle if two angles are given
function findThirdAngle(a, b) {
    let thirdAngle = 180 - (a + b);
    return thirdAngle;
}

let a = 80;
let b = 65;
let thirdAngle = findThirdAngle(a, b);

console.log("Third Angle =", thirdAngle); // Output: 35

 //4. Write a code to get difference between dates in days
 function getDateDifference(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    let difference = Math.abs(d2 - d1);
    return difference / (1000 * 60 * 60 * 24);
}

let date1 = "2025-03-02";
let date2 = "2025-03-07";

let daysDifference = getDateDifference(date1, date2);

console.log("Difference in days =", daysDifference); // Output: 5

// 5.Write a code to print your name initial in Uupercase
function getInitials(name) {
    let initials = name.split(' ').map(word => word[0].toUpperCase()).join('');
    return initials;
}

let name = "Ghazi Al Ghifari";
let initials = getInitials(name);

console.log(initials); // Output: GAG
