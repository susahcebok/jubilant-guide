let song;
function setup() {
  song = loadSound('https://susahcebok.github.io/laughing-invention/kemarin.mp3');
//  createCanvas(300, 300);
//  background(255, 0, 0);
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
//    background(255, 0, 0);
  } else {
    song.play();
//    background(0, 255, 0);
  }
}
