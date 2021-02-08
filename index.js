


//---------------------------------------------------
window.onload=init;

//---------------------------------------------------
//
//---------------------------------------------------
function init(){
        getCookies();
}


//---------------------------------------------------
//
//---------------------------------------------------
function getRadio(){

}

//---------------------------------------------------
// save the radio button that is checked.
// so that the user doesnt have to remember to  re-press it 
// after retarted browser
//---------------------------------------------------
function setRadio(){

}
//----------------------------------------------------
// forward to user to another page
//----------------------------------------------------
function forward(handle){
    var filename =handle.innerHTML.trim();
    var mode = getRadioSelection();
    window.location.href = `file:///C:/Users/marc/Desktop/simple-code-examples/${mode}.html?name=${filename}`
}



//----------------------------------------------------
// get value of radio button
//----------------------------------------------------

function getRadioSelection() { 
    var ele = document.getElementsByName('mode'); 
      
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked) 
            return ele[i].value; 
    } 
} 









//-----------------------------------------------------------------------------
// save the text in the textareas
//-----------------------------------------------------------------------------
function setCookie(handle) {
  
  localStorage.setItem(handle.id,handle.value);

}


//-----------------------------------------------------------------------------
// make it easier for the user to make prettier text
//-----------------------------------------------------------------------------
function linter(text){
    text= text.replace(/`/g,"✓");
    text= text.replace(/~~/g,"☐");
    return text;    
}

//-----------------------------------------------------------------------------
// load the saved textback in to the textareas
// precondition: hardcode the ids into list array.
//-----------------------------------------------------------------------------
function getCookies() {

  //list all textarea ids here.
  var list = "easy,concepts,springboot,restapi,javacore,react,java8";
  list = list.split(",");

  for(var i=0;i<list.length;i++){
    var name = list[i].trim();

     var p = localStorage.getItem(name); 
     if(!p){
        continue;
     }
     p=linter(p);
    document.getElementById(name).value=p;

  }
 
  
}



//-----------------------------------------------------------------------------
//
//-----------------------------------------------------------------------------
var global_length=0;
 async  function doGet(url) {

     url = "study_material/"+url;
    if(url.includes(".")){

    }else{
        url+='.txt';
    }


   url=url.replace(/%2F/g,"/");
   
      let response = await fetch(url);

   
   

    if (response.status === 200) {
        let data = await response.text();
         //file = data.split("\n"); 
         //file.shift();/ / shift() deletes the empty element.
        //alert(data.length);

        document.querySelector("#hoverlength").innerHTML=data.length;
        global_length=data.length;
        return data.length;
  
        // handle data
    }
}


//-----------------------------------------------------------------------------
// reads localstorate to get user progress
//-----------------------------------------------------------------------------
function reportProgress(name){
    document.getElementById('report').innerHTML="";
    var modes="easy,braintyper,easydone,braintyperdone".split(",");
    for(var i=0;i<modes.length;i++){
        var num = getCookie(name,modes[i]);
        document.getElementById('report').innerHTML+=`<tr><td>${modes[i]}</td> <td>${num}</td> <td class='percent'>${calculateProgress(num,global_length,modes[i])}</td></tr>`;
    }
}


//-----------------------------------------------------------------------------
// calculate percentcomplete 
//-----------------------------------------------------------------------------
function calculateProgress(num,total,mode){
  num=parseInt(num);
  total=parseInt(total);
    if(mode==='easy'){ //braintyper cookie is saved to remaining charecters instead of done charecters.
        num=(num-total);
    }

    var list=" ,🌑,🌒,🌓,🌔,🌕".split(",");
    if(mode.includes("done")){
        
        if( num>=0 && num <list.length){
            
            
            return list[num];
        
        }else{
            return list[list.length-1];
        }
    }
    return (((num/total)).toFixed(2))+"%";
    //return (num/total);
}


//-----------------------------------------------------------------------------
//
//-----------------------------------------------------------------------------
function getCookie(name,mode) {
    name=name.replace(/\//g,"%2F");
  var p = localStorage.getItem(name+mode); 
  
  if( p==='NaN' || !p){
    
    p=0;
  }
  return p; 
  //localStorage.setItem(`${book_name}lineNumber`,pageNumber*PAGE_SIZE );

}


//-----------------------------------------------------------------------------
// return the legnth of charecter in the file.
//-----------------------------------------------------------------------------
function getCharLength(handle){
    var el = document.querySelector("#hover");
    var name = handle.innerHTML;
    el.innerHTML=name;
    doGet(name);
    reportProgress(name);

}

