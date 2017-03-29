
// followed examples from github @therewasaguy https://github.com/therewasaguy/p5-music-viz
//LRC files using a converter: https://github.com/justan/lrc (MIT License)
//Music by and lyrics by Gabriel Kahane's Craigslistlieder

var audioEl, audioEl_2, audioEl_3, audioEl_4, audioEl_5, audioEl_6, audioEl_7, audioEl_8;
var currentLyric = '';
var lyricDiv;
var lrcString, lrcString_2, lrcString_3, lrcString_4, lrcString_5, lrcString_6, lrcString_7, lrcString_8;


function preload() {

  // loadStrings returns an array of strings.
  lrcString = loadStrings('../assets/You_Looked_Sexy.lrc');
  lrcString_2 = loadStrings('../assets/Im_sorry.lrc');
  lrcString_3 = loadStrings('../assets/Half_a_Box_of_Condoms.lrc');
  lrcString_4 = loadStrings('../assets/Neurotic_And_Lonely.lrc');
  lrcString_5 = loadStrings('../assets/Today_I_Met.lrc');
  lrcString_6 = loadStrings('../assets/Assless_Chaps.lrc');
  lrcString_7 = loadStrings('../assets/If_Anyone_Knows.lrc');
  lrcString_8 = loadStrings('../assets/Opera_Scene.lrc');
  
}

function setup() {
  noCanvas();
  // createCanvas(500,100);
  // background(0, 130, 130);

  audioEl = createAudio('../assets/You_Looked_Sexy.mp3');
  audioEl.showControls();
  
  audioEl_2 = createAudio('../assets/Im_sorry.mp3');
  audioEl_2.showControls();
  
  audioEl_3 = createAudio('../assets/Half_a_Box_of_Condoms.mp3');
  audioEl_3.showControls();
  
  audioEl_4 = createAudio('../assets/Neurotic_And_Lonely.mp3');
  audioEl_4.showControls();
  
  audioEl_5 = createAudio('../assets/Today_I_Met.mp3');
  audioEl_5.showControls();
  
  audioEl_6 = createAudio('../assets/Assless_Chaps.mp3');
  audioEl_6.showControls();
  
  audioEl_7 = createAudio('../assets/If_Anyone_Knows.mp3');
  audioEl_7.showControls();
  
  audioEl_8 = createAudio('../assets/Opera_Scene.mp3');
  audioEl_8.showControls();
  
  // turn the array of strings into one big string, separated by line breaks.
  lrcString_8 = lrcString_8.join('\n');
  

  // lrc.js library converts Strings to JSON
  var lrcJSON = new Lrc(lrcString_8);
  
  // iterate through each line of the LRC file to get a Time and Lyric
  for (var i = 0; i < lrcJSON.lines.length; i++) {
    var time = lrcJSON.lines[i].time;
    var lyric = lrcJSON.lines[i].txt.valueOf();


    // schedule events to trigger at specific times during audioEl playback
    audioEl_8.addCue(time, showLyric, lyric);

  }

  // create a <div> to hold the lyrics and give it some style
  lyricDiv = createDiv('');
    lyricDiv.style('font-size', '48px')
    lyricDiv.style('padding', '10px')
    lyricDiv.style('margin', 'auto')

}


// callback specified by addCue(time, callback, value).
function showLyric(value) {
  var lyric = value;

  // if lyric is empty, clear the lyricDiv
  if (lyric === '') {
    lyricDiv.html('');
    return;
  }

  // othewrwise, create a new <span> with the lyric, followed by a space
  currentLyric = lyric + ' ';
  var newLyric = createSpan(currentLyric);

  // give it a random color
  newLyric.style('color', 'rgba(' + int(random(0, 255)) + ', ' + int(random(0, 255)) + ', ' + int(random(0, 255)) + ', 255)');

  // append newLyric to the lyricDiv
  lyricDiv.child(newLyric);
}

// function audioEl_1(){
//   stroke(30, 120, 190);
//   fill(175);
//   rectMode(CENTER);
//   rect(mouseX, mouseY, 20, 20);
// }


