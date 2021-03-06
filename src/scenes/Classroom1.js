import game from "../main.js";

export default class Classroom1 extends Phaser.Scene{
    constructor(){
        super("classroom1Scene");
    }


create()
{this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
this.cursors = this.input.keyboard.createCursorKeys();
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '20px',
            //backgroundColor: '#A3C941',
            color: '#ffffff',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
       
        }

        let selectConfig = {
            fontFamily: 'Courier',
            fontSize: '30px',
            //backgroundColor: '#A3C941',
            color: '#00ffff',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
       
        }

    
        
        this.yard = this.add.image(this.scale.width / 2, this.scale.height / 2 - 54,'yard').setOrigin(0.5);
        this.yard.alpha = 0.7
    //this.add.image(100,400,'textbox').setOrigin(0.5);
    this.add.image(this.scale.width / 2 - 10 , this.scale.height / 2 + 130,'speech', menuConfig).setScale(0.65, 0.8).setOrigin(0.5);
    this.add.image(game.config.width/4 - 200 , game.config.height/4 + 20, 'happy', menuConfig).setScale(1).setOrigin(0)
    this.add.image(game.config.width/4 + 360 , game.config.height/4 - 150, 'bar3', menuConfig).setScale(0.6).setOrigin(0)
    //
    
	this.label = this.add.text(100, 300, 'You arrive to class and you sit at your assigned seat in front' ,menuConfig).setInteractive();
    this.label = this.add.text(100, 320, 'of the teachers desk.',menuConfig).setInteractive();
    this.label = this.add.text(100, 340, 'You\'re struggling with the class material and need help.',menuConfig).setInteractive();
    //this.label = this.add.text(100, 320, 'We\'re sending you to the office to be marked tardy.',menuConfig).setInteractive();
    //this.label = this.add.text(100, 340, 'You rummage through your backpack and realize you left it at home.',menuConfig).setInteractive();
    /*this.label.on("pointerdown", () => {
        this.scene.start('menuScene');
        //play student2.js
        }, this);*/
   // this.typewriteText('You wake up in the morning to realize your alarm clock did not go off.\n You\'re late for schoool! Filled with panic, you rush out to get to class before security closes the school gate..');
    //

    //choice 1
    this.label2 = this.add.text(90, 400, '',selectConfig).setInteractive();
    //change text color
    this.label2.on("pointerover",() => {
         this.label2.setStyle({ fill: '#ff0'})});
    this.label2.on("pointerout",() => {
              this.label2.setStyle({ fill: '#00ffff'})});
    //change scene on click
    this.label2.on("pointerdown", () => {
        this.scene.start('friend1Scene');
        //play student2.js
        }, this);
    this.typewriteText2('Ask a Friend for help');

    
   //choice 2
    this.label3 = this.add.text(600, 400, '',selectConfig).setInteractive();
    //change text color
    this.label3.on("pointerover",() => {
         this.label3.setStyle({ fill: '#ff0'})});
    this.label3.on("pointerout",() => {
              this.label3.setStyle({ fill: '#00ffff'})});
    //change scene on click
    this.label3.on("pointerdown", () => {
        this.scene.start('handScene');
        //play student2.js
        }, this);
    this.typewriteText3('Raise your hand');
    
}

typewriteText3(text)
{
	const length = text.length
	let i = 0
    this.time.delayedCall(200, () => { this.time.addEvent({callback: () => {
        this.label3.text += text[i]
        ++i
    },
    repeat: length - 1,
    delay: 100} );
	})
}

typewriteText2(text)
{
	const length = text.length
	let i = 0
    this.time.delayedCall(200, () => { this.time.addEvent({callback: () => {
        this.label2.text += text[i]
        ++i
    },
    repeat: length - 1,
    delay: 100} );
	})
}

update(){
    
}


typewriteText(text)
{
	const length = text.length
	let i = 0
	this.time.addEvent({
		callback: () => {
			this.label.text += text[i]
            ++i
		},
		repeat: length - 1,
		delay: 10
	})
}

update(){
    
}
}