let GAME_DURATION_PERLINE;
let GAME_NAME;
let GAME_LINES_LIST;
function startGame(stringGame){
  GAME = stringGame;
  GAME_LINES = [];
  console.log("GAMEJS START");
  console.log(GAME);
  console.log(GAME.name);
    // Definitoion de la durée , du nom et de la liste de lines du jeu
    cutImage(GAME.numberOfLines);
    startTapping(GAME.lines);
    GAME_DURATION_PERLINE = (GAME.durationGame * 1000) / (GAME.numberOfLines);
    console.log("GAME_JS" , GAME_DURATION_PERLINE);
    // GAME_NAME = game.name;
    // GAME_LINE = [];
    // $.each(game.lines, function(j, line){
    //   // GAME_LINE.push(j);
    //   // GAME_LINE.push(line.duration);
    //   // GAME_LINE_TAPS = [];
    //   // Defintion des taps
    //   $.each(line.taps, function(k, tap){
    //     // GAME_LINE_TAP = [];
    //     // GAME_LINE_TAP.push(k);
    //     // GAME_LINE_TAP.push(tap.delay);
    //     // GAME_LINE_TAPS.push(GAME_LINE_TAP);
    //   })
    //   // GAME_LINE.push(GAME_LINE_TAPS),
    //   // GAME_LINES.push(GAME_LINE);
    // })
    // GAME.push(GAME_DURATION , GAME_NAME , GAME_LINES);
}
function startTapping(lines){
  $.each(lines , function(i, line){
    startLine(line.taps , line.duration);
  })
}
function startLine(taps,duration){
  console.log("startLine");
  console.log(taps);
  $.each(taps, function(j, tap)
  {
    setTimeout(function(){
      var selecteur = ".column" + tap.column + " > .hint_cube";
      $(selecteur).toggle(".nouse");
      $('.game-name').text($('.game-name').text() + j);
      $(selecteur).animate({
        marginTop : "20.5rem"
      },tap.delay)
      resetStyleHintCube();
      $(selecteur).toggle(".nouse");
    },duration)
    })
}

function cutImage(numberOfLines){
  let widthOfEachBlock = GAME.pngFile.width;
  let heightOfEachBlock = GAME.pngFile.height / numberOfLines;
  $('.dynamic_image').css({
    width :`${widthOfEachBlock}px`,
    height : `${heightOfEachBlock}px`,
    backgroundImage : `url(/games/${GAME.pngFile.path})`,
    backgroundRepeat : "no-repeat",
    backgroundPosition : "bottom",
    border : "1px solid black"
  })
  var instantWidth = 0;
  for(i=0;i<numberOfLines;i++)
  {
    console.log("cutImage for", i);
    instantWidth = instantWidth + heightOfEachBlock;
    console.log(instantWidth);
    $('.dynamic_image').animate({
      width :`${widthOfEachBlock}px`,
      height : `${instantWidth}px`
    }).delay(2000)
  }
}
function resetStyleHintCube(){
  for (i = 0 ; i<=4 ; i++){
    var selecteur = ".column" + column + " > .hint_cube";
    $(selecteur).css({
      marginTop : "0"
    })

  }
}
// let $hint_cube = $(".hint_cube");
// for ($cube of $hint_cube){
//   $($cube).on('click', function(event){
//     var $elmCube = $(event.target);
//     $elmCube.animate({
//       marginTop : "20.5rem",
//       animationDuration : "2s",
//     }, 5000);
//   });
// };
