console.log("Buton")
var content = document.getElementById("ime")
var button = document.getElementById("show-more")

button.onclick = function ( ){
    
    if(content.className == "open"){ 
        content.className = "";
        button.innerHTML = "Click me daddy"
    } else{
        content.className = "open"
        button.innerHTML = "Reset me daddy "
    


    }
 }