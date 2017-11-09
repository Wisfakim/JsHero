// ObjetJSON- GAME - contantes
const GAME_PATH = _prepath + "games/game_0.json";
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
