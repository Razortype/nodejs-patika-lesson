
const pi = 3.14;

function circleArea(rad) {
    let area = rad * rad * pi;
    console.log(`Area of Circle : ${area}`);
}

function circleCircumference(rad) {
    let circum = 2 * pi * rad;
    console.log(`Circumference of Circle : ${circum}`)
}

module.exports = {
    circleArea,
    circleCircumference
}