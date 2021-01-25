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


//-----------------------------------------------------------------------------
//
//-----------------------------------------------------------------------------
function getCookie(cname) {
  var name = file_name+cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }


  return 0;
}



//-----------------------------------------------------------------------------
//
//-----------------------------------------------------------------------------
var global_length='';
var global_file='';
 async  function doGet(url) {
    url = "study_material/"+url;
    if(url.includes(".java")){

    }else{
        url+='.txt';
    }

    url=url.replace(/%2F/g,"/");
    
      let response = await fetch(url);

   

    if (response.status === 200) {
        let data = await response.text();

         file = data.split("\n"); 
         //data = data.replace(/[\n\r][\n\r][\n\r]+/g,"\n\n");
         
         //file.shift();// shift() deletes the empty element.

         // parse the [] to make mini-quizes
         
         global_length=file.length;
         
         
         global_file=data;
         

         document.getElementById('data').innerHTML=data;
         
        
        
        // handle data
    }
}
