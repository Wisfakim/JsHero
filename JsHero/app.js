// ObjetJSON- GAME - contantes
const GAME_PATH = "/JsHero/games/game_0.json";
let GAME_IMG_PATH ;
// let GAME = [];
// let GAME_DURATION;
// let GAME_NAME;
// // lines
// let GAME_LINES = [];
// // line
// let GAME_LINE;
// let GAME_LINE_DURATION ;
// let GAME_LINE_TAPS = [];
// // tap
// let GAME_LINE_TAP = [];
fetch(GAME_PATH)
  .then(function(response){
    return response.json();
  })
  .then(function(game){
    startGame(game);
  })
  .catch(e=>console.log("error", e))
// function getJsonGame () {
//   $.getJSON(GAME_PATH, function(data) {
//     GAME = [];
//     GAME_LINES = [];
//     $.each(data , function(i , game){
//       return JSON.stringify(game);
//       // Definitoion de la durée , du nom et de la liste de lines du jeu
//       // GAME_DURATION = game.durationGame;
//       // GAME_NAME = game.name;
//       // GAME_LINE = [];
//       // $.each(game.lines, function(j, line){
//       //   GAME_LINE.push(j);
//       //   GAME_LINE.push(line.duration);
//       //   GAME_LINE_TAPS = [];
//       //   // Defintion des taps
//       //   $.each(line.taps, function(k, tap){
//       //     GAME_LINE_TAP = [];
//       //     GAME_LINE_TAP.push(k);
//       //     GAME_LINE_TAP.push(tap.delay);
//       //     GAME_LINE_TAPS.push(GAME_LINE_TAP);
//       //   })
//       //   GAME_LINE.push(GAME_LINE_TAPS),
//       //   GAME_LINES.push(GAME_LINE);
//       // })
//       // GAME.push(GAME_DURATION , GAME_NAME , GAME_LINES);
//     })
//   //console.log(GAME);
// //  startGame(DATA);
//   })
//   .done(()=>console.log("Seconde sucess"));
//   .fail(()=>console.log("FAIIIIIIl"))
//   .always(()=>console.log("Complete"));
// }
