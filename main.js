function init(){

    //stars
  
    var style = ["style1", "style2", "style3", "style4"];
    var tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
    var opacity = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];
  
    function getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  
    var star = "";
    var qtystars = 250;
    var night = document.querySelector(".cosmos");
    var widthWindow = window.innerWidth;
    var heightWindow = window.innerHeight;
  
    for (var i = 0; i < qtystars; i++) {
      star += "<span class='star " + style[getRandomArbitrary(0, 4)] + " " + opacity[getRandomArbitrary(0, 6)] + " "
      + tam[getRandomArbitrary(0, 5)] + "' style='animation-delay: ." +getRandomArbitrary(0, 9)+ "s; left: "
      + getRandomArbitrary(0, widthWindow) + "px; top: " + getRandomArbitrary(0, heightWindow) + "px;'></span>";
    }
  
    night.innerHTML = star;
  
    //meteors
  
    var randomint = 5000;
  
    setTimeout(function(){
      dspMeteor();
    }, randomint);
  
    function dspMeteor(){
      setTimeout(dspMeteor, randomint);
      randomint = getRandomArbitrary(5000, 10000);
      var meteor = "<div class='meteor "+ style[getRandomArbitrary(0, 4)] +"'></div>";
      document.getElementsByClassName('meteorshower')[0].innerHTML = meteor;
      setTimeout(function(){
        document.getElementsByClassName('meteorshower')[0].innerHTML = "";
      }, 1000);
    }
  
  }
  
  window.onload = init;