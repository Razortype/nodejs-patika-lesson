
const pi = 3.14;

function calAreaOfCircle(rad) {
    let area = rad * rad * pi;
    console.log(`Area of circle with ${rad} : ${area}`);
}


rad = process.argv.slice(2);
calAreaOfCircle(rad);