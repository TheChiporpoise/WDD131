const pi = 3.14;
let area = 0;
function circleArea(r) {
    return pi * r * r;
}

let radius = 3;
area = circleArea(radius);
console.log('Area1 is: ' + area);

radius = 4;
area = circleArea(radius);
console.log('Area2 is: ' + area);