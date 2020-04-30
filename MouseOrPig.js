stroke(0, 0, 0);
var bodyX = 200; 
var bodyY = 220; 
var bodyW = 118;
var bodyH = bodyW/2;
var faceSize = 200;
var eyeSize = faceSize/8;
var narizinho = faceSize/4;
var narina = narizinho/4;

draw  = function() {
    background(94, 212, 255);
    fill(252, 171, 252);
    triangle(mouseX - 95, mouseY - 30, mouseX - 25, mouseY - 90, mouseX- 110, mouseY - 115);
    triangle(mouseX + 95, mouseY - 125, mouseX + 90, mouseY - 25, mouseX - 50, mouseY - 70); //ORELHA DE FORA
    fill(220, 40, 185);
    triangle(mouseX - 85, mouseY - 30, mouseX - 25, mouseY - 75, mouseX - 90, mouseY - 100);
    triangle( mouseX + 85, mouseY - 110, mouseX - 10, mouseY - 75, mouseX + 75, mouseY - 65);//ORELHA DE DENTRO
    fill(252, 171, 252);
    ellipse(mouseX, mouseY, faceSize, faceSize); // head
    ellipse(mouseX, mouseY + 10, narizinho, narizinho); // nariz
    fill(219, 140, 219);
    ellipse(mouseX - 10, mouseY + 5, narina, narina); //narina esquerda
    ellipse(mouseX + 10, mouseY + 5, narina, narina); //narina direita
    fill(0, 0, 0);
    arc(mouseX, mouseY + 47, 90, 73, 0, 180);
    fill(255, 0, 0);
    arc(mouseX, mouseY + 85, 45, -30, 20, 162);
    fill(0, 0, 0);
    ellipse(mouseX - 50, mouseY - 20, eyeSize, eyeSize); // left eye
    ellipse(mouseX + 50, mouseY - 20, eyeSize, eyeSize); // right eye
};
