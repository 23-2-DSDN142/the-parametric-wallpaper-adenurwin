// your parameter variables go here!

// setup parameters
let strokeWidth = 3; // width of the stroke for the whole drawing
let fullScale = 1.5; // scale of the full thing
let outLineColor = 50; // color used for outline and wiskers 
let bodyColor = "black"; // color of the fur
let wiskerColor = 100; // color of the wiskers
let eyeColor = "#DAA520"; // color of the eyes
let pupilColor = "black"; // color of the pupils
let toungeColor = "#FF6699"; // color of the tounge
let stripeColor = "black"; // color of the stripes
let backgroundColor = "#FFC0CB" // color of the background

// eye parameters
let eyeSize = 15; // size of the eyes
let pupilSize = eyeSize; // size of the pupils
let pupilDiolation = 1.4; // scale of the width of the pupiles
let eyesXOffSet = 0; // how far the eyes sit on the X axis reitive to the centre of the face 
let eyesYOffSet = 8; // how far the eyes sit on the Y axis reitive to the centre of the face 
let eyeSpacing = 40; // space between the eyes

// mouth parameters
let mouthYOffSet = 15; // how far the mouth sits below the centre of the face
let mouthSize = 20; // size of the mouth
let mouthGrin = 60; // size of the grin
let toungeLength = 20; // length of the tounge

// wisker parameters
let wiskerWidth = 2; // width of the wiskers
let wiskerLength = 25; // length of the wiskers
let wiskerSpacing = 10; // spacing of the bottom wisker from the top wisker

// stripe parameters
let stripeLength = 100;
let stripeWidth = 10; 
let stripeScale = 1.5;

// head parameters
let headXPos = 100/fullScale; // x position of the whole head
let headYPos = 100/fullScale; // y position of the whole head
let faceWidth = 10; // width of the face
let neckWidth = 20; //width of the neck
let topWidth = 20; // width of the to of the head
let neckXFill = 30; // x fill area for the neck
let neckYFill = 45; // y fill area for the neck

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200/fullScale;
  pWallpaper.grid_settings.cell_height = 200/fullScale;
  pWallpaper.grid_settings.row_offset  = pWallpaper.grid_settings.cell_width / 2;
}

function wallpaper_background() {
  background(backgroundColor);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  // code that draws the cat :3
  
  // head position & whitespace fill
  strokeWeight(strokeWidth);
  fill(bodyColor);
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
  arc(headXPos, headYPos + 20, 100, 90, 270 - topWidth, 270 + topWidth);

  // stripes
  noStroke();
  fill(stripeColor);
  arc(headXPos - faceWidth/2 - 39, headYPos -10, stripeLength, stripeWidth, 290, 90);
  arc(headXPos + faceWidth/2 + 28, headYPos +35, stripeLength/stripeScale, stripeWidth/stripeScale, 155, 270);

  // tounge
  stroke(outLineColor);
  fill(toungeColor);
  arc(headXPos, headYPos + mouthYOffSet + 5, 10, toungeLength, 0, 180)

  // eyes
  noStroke();
  fill(eyeColor);
  ellipse(headXPos - eyeSpacing/2 + eyesXOffSet, headYPos + eyesYOffSet, eyeSize, eyeSize);
  ellipse(headXPos + eyeSpacing/2 + eyesXOffSet, headYPos + eyesYOffSet, eyeSize , eyeSize);
  fill(pupilColor);
  ellipse(headXPos - eyeSpacing/2 + eyesXOffSet, headYPos + eyesYOffSet, pupilSize / pupilDiolation, pupilSize);
  ellipse(headXPos + eyeSpacing/2 + eyesXOffSet, headYPos + eyesYOffSet, pupilSize / pupilDiolation , pupilSize);

  // redraw the outlines
  stroke(outLineColor);
  noFill();
  arc(headXPos - faceWidth/2, headYPos, 80, 90, 90 + neckWidth/2, 180);
  arc(headXPos - faceWidth/2 + 10, headYPos, 100, 90, 180, 230);
  arc(headXPos - faceWidth/2 - 50, headYPos, 98, 90, 310, 330);
  arc(headXPos + faceWidth/2, headYPos, 80, 90, 0, 90 - neckWidth/2);
  arc(headXPos + faceWidth/2 - 10, headYPos, 100, 90, 310, 0);
  arc(headXPos + faceWidth/2 + 50, headYPos, 98, 90, 210, 230);

  // wiskers
  stroke(outLineColor);
  fill(wiskerColor);
  arc(headXPos - mouthSize/2, headYPos + mouthYOffSet, mouthSize, mouthSize, 10, 170 - mouthGrin);
  arc(headXPos + mouthSize/2, headYPos + mouthYOffSet, mouthSize, mouthSize, 10 + mouthGrin, 170);
  strokeWeight(wiskerWidth);
  line(headXPos + mouthSize/2 - 3, headYPos + mouthYOffSet + 3, headXPos + mouthSize/2 + wiskerLength, headYPos + mouthYOffSet);
  line(headXPos + mouthSize/2, headYPos + mouthYOffSet + 6, headXPos + mouthSize/2 + wiskerLength - 3, headYPos + mouthYOffSet + wiskerSpacing);
  line(headXPos - mouthSize/2 + 3, headYPos + mouthYOffSet + 3, headXPos - mouthSize/2 - wiskerLength, headYPos + mouthYOffSet);
  line(headXPos - mouthSize/2, headYPos + mouthYOffSet + 6, headXPos - mouthSize/2 - wiskerLength + 3, headYPos + mouthYOffSet + wiskerSpacing);

}
