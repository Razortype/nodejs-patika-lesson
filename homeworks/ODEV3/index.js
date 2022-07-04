const { circleArea, circleCircumference } = require('./circle.js');


function evalCircle(rad) {
    circleArea(rad);
    circleCircumference(rad);
}

evalCircle(5);