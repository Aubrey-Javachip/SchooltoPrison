import game from "../main.js";

export default class Student1 extends Phaser.Scene{
    constructor(){
        super("student1Scene");
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
    this.add.image(this.scale.width / 2, this.scale.height / 2 + 100,'textbox', menuConfig).setOrigin(0.5);
    //
    
	this.label = this.add.text(100, 300, 'You wake up in the morning to realize your alarm clock did not go off.' ,menuConfig).setInteractive();
    this.label = this.add.text(100, 320, 'You\'re late for schoool! Filled with panic, you rush out to get to ',menuConfig).setInteractive();
    this.label = this.add.text(100, 340, 'class before security closes the school gate...',menuConfig).setInteractive();
    /*this.label.on("pointerdown", () => {
        this.scene.start('menuScene');
        //play student2.js
        }, this);*/
   // this.typewriteText('You wake up in the morning to realize your alarm clock did not go off.\n You\'re late for schoool! Filled with panic, you rush out to get to class before security closes the school gate..');
    //

    //
    this.label2 = this.add.text(100, 400, '',selectConfig).setInteractive();
    this.label2.on("pointerover",() => {
         this.label2.setStyle({ fill: '#ff0'})});
    this.label2.on("pointerout",() => {
              this.label2.setStyle({ fill: '#00ffff'})});
    
    this.label2.on("pointerdown", () => {
        this.scene.start('menuScene');
        //play student2.js
        }, this);
    this.typewriteText2('Go to school');

   /* this.label3 = this.add.text(300, 400, '',menuConfig).setInteractive();
    this.label3.on("pointerdown", () => {
        this.scene.start('menuScene');
        //play student2.js
        }, this);
    this.typewriteText3('Choose a student');
    
}

typewriteText3(text)
{
	const length = text.length
	let i = 0
    this.time.delayedCall(3000, () => { this.time.addEvent({callback: () => {
        this.label3.text += text[i]
        ++i
    },
    repeat: length - 1,
    delay: 100} );
	})
}

update(){
    */
}
typewriteText2(text)
{
	const length = text.length
	let i = 0
    this.time.delayedCall(3000, () => { this.time.addEvent({callback: () => {
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