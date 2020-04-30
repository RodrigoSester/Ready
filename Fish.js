background(89, 216, 255);

var drawFish = function(centerX, centerY, bodyLength, bodyHeight, bodyColor){
noStroke();
fill(random(255), random(255), random(255));
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};
mouseClicked = function() {
    background(89, 216, 255);
    drawFish(random(400), random(400), random(200), random(200), random(255));
    drawFish(random(400), random(400), random(200), random(200), random(255));
    drawFish(random(400), random(400), random(200), random(200), random(255));
    drawFish(random(400), random(400), random(200), random(200), random(255));
};


