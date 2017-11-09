let GAME_DURATION_PERLINE;
let GAME_NAME;
let GAME_LINES_LIST;
function startGame(stringGame){
  GAME = stringGame;
  GAME_LINES = [];
  console.log("GAMEJS START");
  console.log(GAME);
  console.log(GAME.name);
      //Definitoion de la durée , du nom et de la liste de lines du jeu
    for (i=1;i<=4;i++){
      var selecteur = ".column" + i + " > .hint_cube";
      $(selecteur).hide();
    }
    cutImage(GAME.numberOfLines);
    startTapping(GAME.lines);
    GAME_DURATION_PERLINE = (GAME.durationGame * 1000) / (GAME.numberOfLines);
    console.log("GAME_JS" , GAME_DURATION_PERLINE);
}
function startTapping(lines){
  $.each(lines , function(i, line){
      setTimeout(function(){
        startLine(i , line.taps);
      },line.duration)
  })
}
function startLine(lineName,taps){
  console.log("startLine");
  for( tap in taps){
      //alert(lineName);
      let actualTap = taps[tap];
      let actualColumn = actualTap['column'];
      let actualTapDelay = actualTap['delay'];
    //  console.log(taps[tap]['column']);
      var heightForSlideDown = $(".hint_line").height();
      var selecteur = ".column" + actualColumn + " > .hint_cube";
      $(selecteur).show();
      // console.log(selecteur);
      $(selecteur).animate({
        marginTop : heightForSlideDown
      },actualTapDelay,function(){
        addAndRemoveListener(actualColumn);
        resetStyleHintCube(actualColumn);
      })
  }
}
function addAndRemoveListener(column){

  // Definit la touche a ecoute
  let keyToListen ;
  switch(column){
    case 1 :
      keyToListen = 37;
      keyString = "keyleft";
      break;
    case 2 :
      keyToListen = 38;
      keyString = "keyup";
      break;
    case 3 :
      keyToListen = 39;
      keyString = "keyright";
      break;
    case 4 :
      keyToListen = 40;
      keyString = "keydown";
      break;
    default:
      console.log("ERRRRRRRRREUR DEFINITION ECOUTEUR");
    }
    var press = false;
    $(document).on(keyString, function(){
      if (!press){
        $(".textWin").append("WIN");
        press = true;
      }
      if (press)
      {
        console.log("Abuse pas");
      }
    })
    setTimeout(function(){
      $(document).off();
    },500)
    console.log("KEYYYYYY : " , keyString);
}
function cutImage(numberOfLines){
  let widthOfEachBlock = GAME.pngFile.width;
  let heightOfEachBlock = GAME.pngFile.height / numberOfLines;
  $('.dynamic_image').css({
    width :`${widthOfEachBlock}px`,
    height : `${heightOfEachBlock}px`,
    backgroundImage : `url(${_prepath}games/${GAME.pngFile.path})`,
    backgroundRepeat : "no-repeat",
    backgroundPosition : "bottom",
    border : "1px solid black"
  })
  var instantWidth = 0;
  for(i=0;i<numberOfLines;i++)
  {
    //console.log("cutImage for", i);
    instantWidth = instantWidth + heightOfEachBlock;
  //  console.log(instantWidth);
    $('.dynamic_image').animate({
      width :`${widthOfEachBlock}px`,
      height : `${instantWidth}px`
    }).delay(2000)

  }
}
function resetStyleHintCube(column){
    var selecteur = ".column" + column + " > .hint_cube";
    $(selecteur).hide();
    $(selecteur).animate({
      marginTop : "0"
    })
  }
