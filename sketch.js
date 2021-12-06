//initialisation des variables
let lumiere;
let lettre;
let img;
//let mustPlayY = false;
//let currentKey = '0';
//let mySoundAIsPlaying = false;
//let mySoundA;

// La classe Braille
class Braille {
  constructor() {
    //affectation des variables
    this.x = 125;
    this.y = 325;
    this.x1 = 325;
    this.y1 = 500;
    this.y2 = 675;
    this.diametre =150;
  }
  
dessiner() {
 // On dessine une ellipse non rempli pour former les zones de Braille
    fill(0);
    noFill();
    ellipse(this.x, this.y, this.diametre);//A
    ellipse(this.x1, this.y, this.diametre);//B
    ellipse(this.x, this.y1, this.diametre);//C
    ellipse(this.x1, this.y1, this.diametre);//D
    ellipse(this.x, this.y2, this.diametre);//E
    ellipse(this.x1, this.y2, this.diametre);//F
}
  
braille() {
  
  // On définit pour chaque lettre les ellipses qui doivent se remplir
  
     if (key == 'a' || key == 'A') {
     ellipse(this.x, this.y, this.diametre);//A
     //mySoundA.play();
     //mySoundA.noLoop();
     }
  
     if (key == 'b' || key == 'B') {
    ellipse(this.x, this.y, this.diametre);//A
    ellipse(this.x, this.y1, this.diametre);//C
    //mySoundB.play();
    }
  
    if (key == 'c' || key == 'C') {
    ellipse(this.x, this.y, this.diametre);//A
    ellipse(this.x1, this.y, this.diametre);//B
    //mySoundC.play();
    }
  
    if (key == 'd' || key == 'D') {
    ellipse(this.x, this.y, this.diametre);//A
    ellipse(this.x1, this.y, this.diametre);//B
    ellipse(this.x1, this.y1, this.diametre);//D
    //mySoundD.play();
    }
    
    if (key == 'e' || key == 'E') {
    ellipse(this.x, this.y, this.diametre);//A
    ellipse(this.x1, this.y1, this.diametre);//D
    //mySoundE.play();
    }
    
    if (key == 'f' || key == 'F') {
    ellipse(this.x, this.y, this.diametre);//A
    ellipse(this.x1, this.y, this.diametre);//B
    ellipse(this.x, this.y1, this.diametre);//C
    //mySoundF.play();
    }
  
    if (key == 'g' || key == 'G') {
    ellipse(this.x, this.y, this.diametre);//A
    ellipse(this.x1, this.y, this.diametre);//B
    ellipse(this.x, this.y1, this.diametre);//C
    ellipse(this.x1, this.y1, this.diametre);//D
    //mySoundG.play();
    }
  
    if (key == 'h' || key == 'H') {
    ellipse(this.x, this.y, this.diametre);//A
    ellipse(this.x, this.y1, this.diametre);//C
    ellipse(this.x1, this.y1, this.diametre);//D
    //mySoundH.play();
    }
    
    if (key == 'i' || key == 'I') {
    ellipse(this.x1, this.y, this.diametre);//B
    ellipse(this.x, this.y1, this.diametre);//C
    //mySoundI.play();
    }
    
    if (key == 'j' || key == 'J') {
    ellipse(this.x1, this.y, this.diametre);//B
    ellipse(this.x, this.y1, this.diametre);//C
    ellipse(this.x1, this.y1, this.diametre);//D
    //mySoundJ.play();
    }
    
    if (key == 'k' || key == 'K') {
    ellipse(this.x, this.y, this.diametre);//A
    ellipse(this.x, this.y2, this.diametre);//E
    //mySoundK.play();
    }
    
    if (key == 'l' || key == 'L') {
    ellipse(this.x, this.y, this.diametre);//A
    ellipse(this.x, this.y1, this.diametre);//C
    ellipse(this.x, this.y2, this.diametre);//E
    //mySoundL.play();
    }
    
    if (key == 'm' || key == 'M') {
    ellipse(this.x, this.y, this.diametre);//A
    ellipse(this.x1, this.y, this.diametre);//B
    ellipse(this.x, this.y2, this.diametre);//E
    //mySoundM.play();
    }
  
      if (key == 'n' || key == 'N') {
    ellipse(this.x, this.y, this.diametre);//A
    ellipse(this.x1, this.y, this.diametre);//B
    ellipse(this.x1, this.y1, this.diametre);//D
    ellipse(this.x, this.y2, this.diametre);//E
    //mySoundN.play();
    }

    if (key == 'o' || key == 'O') {
    ellipse(this.x, this.y, this.diametre);//A
    ellipse(this.x, this.y1, this.diametre);//C
    ellipse(this.x, this.y2, this.diametre);//E
    //mySoundO.play();
    }

    if (key == 'p' || key == 'P') {
    ellipse(this.x, this.y, this.diametre);//A
    ellipse(this.x1, this.y, this.diametre);//B
    ellipse(this.x, this.y1, this.diametre);//C
    ellipse(this.x, this.y2, this.diametre);//E
    //mySoundP.play();
    }

    if (key == 'q' || key == 'Q') {
    ellipse(this.x, this.y, this.diametre);//A
    ellipse(this.x1, this.y, this.diametre);//B
    ellipse(this.x, this.y1, this.diametre);//C
    ellipse(this.x1, this.y1, this.diametre);//D
    ellipse(this.x, this.y2, this.diametre);//E
    //mySoundQ.play();
    }
  
    if (key == 'r' || key == 'R') {
    ellipse(this.x, this.y, this.diametre);//A
    ellipse(this.x, this.y1, this.diametre);//C
    ellipse(this.x1, this.y1, this.diametre);//D
    ellipse(this.x, this.y2, this.diametre);//E
    //mySoundR.play();
    }
  
    if (key == 's' || key == 'S') {
    ellipse(this.x1, this.y, this.diametre);//B
    ellipse(this.x, this.y1, this.diametre);//C
    ellipse(this.x, this.y2, this.diametre);//E
    //mySoundS.play();
    }
  
    if (key == 't' || key == 'T') {
    ellipse(this.x1, this.y, this.diametre);//B
    ellipse(this.x, this.y1, this.diametre);//C
    ellipse(this.x1, this.y1, this.diametre);//D
    ellipse(this.x, this.y2, this.diametre);//E
    //mySoundT.play();
    }

    if (key == 'u' || key == 'U') {
    ellipse(this.x, this.y, this.diametre);//A
    ellipse(this.x, this.y2, this.diametre);//E
    ellipse(this.x1, this.y2, this.diametre);//F
    //mySoundU.play();
    }
  
    if (key == 'v' || key == 'W') {
    ellipse(this.x, this.y, this.diametre);//A
    ellipse(this.x, this.y1, this.diametre);//C
    ellipse(this.x, this.y2, this.diametre);//E
    ellipse(this.x1, this.y2, this.diametre);//F
    //mySoundV.play();
    }

    if (key == 'w' || key == 'W') {
    ellipse(this.x1, this.y, this.diametre);//B
    ellipse(this.x, this.y1, this.diametre);//C
    ellipse(this.x1, this.y1, this.diametre);//D
    ellipse(this.x1, this.y2, this.diametre);//F
    //mySoundW.play();
    }

    if (key == 'x' || key == 'X') {
    ellipse(this.x, this.y, this.diametre);//A
    ellipse(this.x1, this.y, this.diametre);//B
    ellipse(this.x, this.y2, this.diametre);//E
    ellipse(this.x1, this.y2, this.diametre);//F
    //mySoundX.play();
    }
  
  if (key == 'y' || key == 'Y') {
    ellipse(this.x, this.y, this.diametre);//A
    ellipse(this.x1, this.y, this.diametre);//B
    ellipse(this.x1, this.y1, this.diametre);//D
    ellipse(this.x, this.y2, this.diametre);//E
    ellipse(this.x1, this.y2, this.diametre);//F
  }
  
    //if (key == 'y' || key == 'Y') {
     //currentKey = 'y';
   // mySoundY.play();
   //   key = '0';
   // }
  
  //if (currentKey == 'y') {
   // ellipse(this.x, this.y, this.diametre);//A
   // ellipse(this.x1, this.y, this.diametre);//B
   // ellipse(this.x1, this.y1, this.diametre);//D
    //ellipse(this.x, this.y2, this.diametre);//E
    //ellipse(this.x1, this.y2, this.diametre);//F
 // }
  
    if (key == 'z' || key == 'Z') {
    ellipse(this.x, this.y, this.diametre);//A
    ellipse(this.x1, this.y1, this.diametre);//D
    ellipse(this.x, this.y2, this.diametre);//E
    ellipse(this.x1, this.y2, this.diametre);//F
    //mySoundZ.play();
    }
  
    if (key == '!') {
    ellipse(this.x, this.y1, this.diametre);//C
    ellipse(this.x1, this.y1, this.diametre);//D
    ellipse(this.x, this.y2, this.diametre);//E
    }
    
    if (key == '?') {
    ellipse(this.x, this.y1, this.diametre);//C
    ellipse(this.x1, this.y2, this.diametre);//F
    }
  
    }
}

class Lettre {
  constructor() {
    //affectation des variables
    this.x3 = 500;
    this.y3 = 200;
    
  }
dessiner(){
    fill(0); 
    textSize(100);
    textStyle(BOLD);
    text(key,this.x3,this.y3)
    }
}

function preload() {
  // On charge les sons correspondant à chaque lettre
  soundFormats('mp3', 'ogg', 'wav');
  mySoundA = loadSound('audio/A.wav');
  mySoundB = loadSound('audio/B.wav');
  mySoundC = loadSound('audio/C.wav');
  mySoundD = loadSound('audio/D.wav');
  mySoundE = loadSound('audio/E.wav');
  mySoundF = loadSound('audio/F.wav');
  mySoundG = loadSound('audio/G.wav');
  mySoundH = loadSound('audio/H.wav');
  mySoundI = loadSound('audio/I.wav');
  mySoundJ = loadSound('audio/J.wav');
  mySoundK = loadSound('audio/K.wav');
  mySoundL = loadSound('audio/L.wav');
  mySoundM = loadSound('audio/M.wav');
  mySoundN = loadSound('audio/N.wav');
  mySoundO = loadSound('audio/O.wav');
  mySoundP = loadSound('audio/P.wav');
  mySoundQ = loadSound('audio/Q.wav');
  mySoundR = loadSound('audio/R.wav');
  mySoundS = loadSound('audio/S.wav');
  mySoundT = loadSound('audio/T.wav');
  mySoundU = loadSound('audio/U.wav');
  mySoundV = loadSound('audio/V.wav');
  mySoundW = loadSound('audio/W.wav');
  mySoundX = loadSound('audio/X.wav');
  mySoundY = loadSound('audio/Y.wav');
  mySoundZ = loadSound('audio/Z.wav');
}

function setup() {
  createCanvas(600, 800);
  lumiere = new Braille();
  lettre = new Lettre()
  
  font = loadFont('terminal-grotesque.ttf');

  img = loadImage('logo.png'); // Load the image 
}

function draw() {
  background(255,81,51);
  
  image(img, 460, 700, img.width / 5, img.height / 5);

  drawWords(width * 0,5);
  
  lumiere.dessiner();
  lettre.dessiner();
  lumiere.braille();
}

function drawWords(x) {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position
  textFont(font);
  fill(0);
  textSize(50);
  text('Learn', 50, 110);
  textSize(120);
  text('Braille', 245, 110);
  
  fill(0);
  textSize(90);
  text('Click.', 50, 200);
  textSize(30);
  textWrap(WORD)
  text('Current letter:',380,160,100);
}

var index = 0;

// Toutes les parties concernant le son de l'affiche ont été mises en commentaires car nous n'avons pas encore réussi à enlever la répétition du son de chaque lettre lorsque l'on appuie sur une touche. Une mise à jour interviendra sous peu.

//function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`

//if(mySoundA.isPlaying()==true);{
 // mySoundA.play();
// }

//function keyPressed () {
//  if (mySoundAIsPlaying) {
//      mySoundA.noLoop();
//      mySoundAIsPlaying = false;
//} else {
//      mySoundA.loop();
//      mySoundAIsPlaying = true;
//    }
//}