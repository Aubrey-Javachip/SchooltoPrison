import game from "../main.js";

export default class Friend2 extends Phaser.Scene{
    constructor(){
        super("friend2Scene");
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

    
        
    this.add.image(this.scale.width / 2, this.scale.height / 2 - 54,'yard').setOrigin(0.5);
    //this.add.image(100,400,'textbox').setOrigin(0.5);
    this.add.image(this.scale.width / 2 - 10 , this.scale.height / 2 + 130,'speech', menuConfig).setScale(0.65, 0.8).setOrigin(0.5);
    //
    
	this.label = this.add.text(100, 260, 'You talk to your friend sitting next to you during class for fun.' ,menuConfig).setInteractive();
    this.label = this.add.text(100, 300,'Teacher: Please keep the chatting outside of the classroom.',menuConfig).setInteractive();
    this.label = this.add.text(100, 340, 'You stop talking and continue to sit through class until...',menuConfig).setInteractive();
   // this.label = this.add.text(100, 360, 'You rummage through your backpack and realize you left it at home.',menuConfig).setInteractive();
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
        this.scene.start('lunch2Scene');
        //play student2.js
        }, this);
    this.typewriteText2('Time for lunch');

    
  /*  //choice 2
    this.label3 = this.add.text(500, 400, '',selectConfig).setInteractive();
    //change text color
    this.label3.on("pointerover",() => {
         this.label3.setStyle({ fill: '#ff0'})});
    this.label3.on("pointerout",() => {
              this.label3.setStyle({ fill: '#00ffff'})});
    //change scene on click
    this.label3.on("pointerdown", () => {
        this.scene.start('menuScene');
        //play student2.js
        }, this);
    this.typewriteText3('Go to school');
    */
}
/*
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
*/
typewriteText2(text)
{
	const length = text.length
	let i = 0
    this.time.delayedCall(200, () => { this.time.addEvent({callback: () => {
        this.label2.text += text[i]
        ++i
    },
    repeat: length - 1,
    delay: 50} );
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