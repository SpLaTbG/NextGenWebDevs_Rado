console.log("Buton")
var content = document.getElementById("ime")
var button = document.getElementById("show-more")

button.onclick = function ( ){
    
    if(content.className == "open"){ 
        content.className = "ime";
        button.innerHTML = " Click to show name"
    } else{
        content.className = "open"
        button.innerHTML = "Reset"
    


    }
 }