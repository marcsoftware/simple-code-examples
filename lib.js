//-----------------------------------------------------------------------------
// german has special letters like äöüßÄÖÜ 
// this function takes m`ar`s and turns it to mäß
//  example : m`ar`s => mäß
//-----------------------------------------------------------------------------
function interpolate(text){
    text=text.replace(";a","ä");
    text=text.replace(";o","ö");
    text=text.replace(";u","ü");
    text=text.replace(";s","ß");
    text=text.replace(";A","Ä");
    text=text.replace(";O","ß");
    text=text.replace(";U","Ü");
    return text;
}

//-----------------------------------------------------------------------------
// play audio
//-----------------------------------------------------------------------------
function playAudio(word){
    word=word.replace(/📢/g,"");
    word=word.trim();
  var audio = new Audio("audio-de/"+word.trim()+".wav");
  try{
    audio.play();
  }catch(e){
    console.log("USER MUST ENABLE AUTO PLAY!!!!!!!!!!!!!!!!");
    console.log(e);
  }

}


//-----------------------------------------------------------------------------
//
//-----------------------------------------------------------------------------
function compare(left,right){
    left=left.replace(/[^a-zA-ZäöüßÄÖÜ]/g,"");
    right=right.replace(/[^a-zA-ZäöüßÄÖÜ]/g,"");


    feedback(left);
    left=left.toLowerCase().trim();
    right=right.toLowerCase().trim();
    return left === right;
}

//-----------------------------------------------------------------------------
//
//-----------------------------------------------------------------------------
/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}