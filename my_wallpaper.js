// your parameter variables go here!

// setup parameters
let strokeWidth = 3; // width of the stroke for the whole drawing
let outLineColor = 0 // color used for outline and pupil
let bodyColor = "tan"; // color of the fur
let wiskerColor = "brown"; // color of the wiskers
let eyeColor = "green"; // color of the eyes
let toungeColor = "pink"; // color of the tounge

// eye parameters
let eyeSize = 15; // size of the eyes
let pupilSize = eyeSize; // size of the pupils
let pupilDiolation = 2; // scale of the width of the pupiles
let eyesXOffSet = 0; // how far the eyes sit on the X axis reitive to the centre of the face 
let eyesYOffSet = 8; // how far the eyes sit on the Y axis reitive to the centre of the face 
let eyeSpacing = 40; // space between the eyes

// mouth parameters
let mouthYOffSet = 15; // how far the mouth sits below the centre of the face
let mouthSize = 20; // size of the mouth
let mouthGrin = 60; // size of the grin
let toungeLength = 20; // length of the tounge

// head parameters
let headXPos = 100; // x position of the whole head
let headYPos = 100; // y position of the whole head
let faceWidth = 10; // width of the face
let neckWidth = 20; //width of the neck
let topWidth = 20; // width of the to of the head
let neckXFill = 30; // x fill area for the neck
let neckYFill = 45; // y fill area for the neck

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = pWallpaper.grid_settings.cell_width / 2;
}

function wallpaper_background() {
  background(240, 255, 240); // color of the background
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  strokeWeight(strokeWidth);
  stroke(outLineColor);

  fill(bodyColor);

  // head position & whitespace fill
  noStroke();
  rect(headYPos - neckXFill/2 , headYPos, neckXFill, neckYFill);

  // face
  stroke(outLineColor);
  arc(headXPos - faceWidth/2, headYPos, 80, 90, 90 + neckWidth/2, 180);
  arc(headXPos - faceWidth/2 + 10, headYPos, 100, 90, 180, 230);
  noFill();
  arc(headXPos - faceWidth/2 - 50, headYPos, 98, 90, 310, 330);
  fill(bodyColor); 
  arc(headXPos + faceWidth/2, headYPos, 80, 90, 0, 90 - neckWidth/2);
  arc(headXPos + faceWidth/2 - 10, headYPos, 100, 90, 310, 0);
  noFill();
  arc(headXPos + faceWidth/2 + 50, headYPos, 98, 90, 210, 230);
  fill(bodyColor);

  // top of the head
  arc(headXPos, headYPos + 20, 100, 90, 270 - topWidth, 270 + topWidth);

  // tounge
  fill(toungeColor);
  arc(headXPos, headYPos + mouthYOffSet + 5, 10, toungeLength, 0, 180)

  // wiskers
  fill(wiskerColor);
  arc(headXPos - mouthSize/2, headYPos + mouthYOffSet, mouthSize, mouthSize, 10, 170 - mouthGrin);
  arc(headXPos + mouthSize/2, headYPos + mouthYOffSet, mouthSize, mouthSize, 10 + mouthGrin, 170);
  
  // eyes
  noStroke();
  fill(eyeColor);
  ellipse(headXPos - eyeSpacing/2 + eyesXOffSet, headYPos + eyesYOffSet, eyeSize, eyeSize);
  ellipse(headXPos + eyeSpacing/2 + eyesXOffSet, headYPos + eyesYOffSet, eyeSize , eyeSize);
  fill(outLineColor);
  ellipse(headXPos - eyeSpacing/2 + eyesXOffSet, headYPos + eyesYOffSet, pupilSize / pupilDiolation, pupilSize);
  ellipse(headXPos + eyeSpacing/2 + eyesXOffSet, headYPos + eyesYOffSet, pupilSize / pupilDiolation , pupilSize);
}
