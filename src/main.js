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
import Tardy from "./scenes/Tardy.js";
import Classroom1 from "./scenes/Classroom1.js";
import Classroom2 from "./scenes/Classroom2.js";
import Friend1 from "./scenes/Friend1.js";
import Friend2 from "./scenes/Friend2.js";
import Hand from "./scenes/Hand.js";
import Zone from "./scenes/Zone.js";
import Lunch1 from "./scenes/Lunch1.js";
import Lunch2 from "./scenes/Lunch2.js";
import Fight1 from "./scenes/Fight1.js";
import Fight2 from "./scenes/Fight2.js";
import Class from "./scenes/class.js";
import Bag from "./scenes/Bag.js";
import No from "./scenes/No.js";
import End from "./scenes/End.js";
import Outcome from "./scenes/Outcome.js";
import Outcome2 from "./scenes/Outcome2.js";

let config = {
    parent: "phaser-game",
    type: Phaser.AUTO,
    width: 960,
    height: 480,
    scene: [Load, Menu, Test, Student1, Student2, Security1, Security2, Securitygood, Securitybad, Securityfight, Tardy,
         Classroom1, Classroom2, Friend1, Friend2, Hand, Zone, Lunch1, Lunch2, Fight1, Fight2, Class, Bag, No, End, Outcome, Outcome2, Instructions, Credits, Play],
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