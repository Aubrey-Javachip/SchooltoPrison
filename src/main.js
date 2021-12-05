/*
    Creators:Aubrey Schelbauer
    Title: "Prison Pipeline"
    Completed: 12/7/21
   
*/


import Menu from "./scenes/Menu.js";
import Instructions from "./scenes/Instructions.js";
import Credits from "./scenes/Credits.js";
import Play from "./scenes/Play.js";
import Load from "./scenes/Load.js";
import Test from "./scenes/test.js";
import Student1 from "./scenes/Student1.js";
import Student2 from "./scenes/Student2.js";
import Security1 from "./scenes/Security1.js";
import Security2 from "./scenes/Security2.js";
import Securitygood from "./scenes/Securitygood.js";
import Securitybad from "./scenes/Securitybad.js";
import Securityfight from "./scenes/Securityfight.js";

let config = {
    parent: "phaser-game",
    type: Phaser.AUTO,
    width: 960,
    height: 480,
    scene: [Load, Menu, Test, Student1, Student2, Security1, Security2, Securitygood, Securitybad, Securityfight, Instructions, Credits, Play],
    scale: {
        // mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 1500,
            },
            // debug: true,
        },
    },
    // pixelArt: true,
    antiAlias: false,
    fps: 60,
}

//let game
let game  = new Phaser.Game(config);


//export default game = new Phaser.Game(config);

// set UI sizes 
/*
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
*/
let keyLeft;
export default game;