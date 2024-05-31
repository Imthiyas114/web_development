function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");
   
    if(menuBtn.className === "menu"){
      menuBtn.className += "hai";
    } else {
      menuBtn.className = "menu";
    }
  }