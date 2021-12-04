import game from "../main.js";

export default class Test extends Phaser.Scene{
    constructor(){
        super("testScene");
    }


create()
{this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
this.cursors = this.input.keyboard.createCursorKeys();
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '40px',
            //backgroundColor: '#A3C941',
            color: '#ffffff',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
       
        }
        
   // this.add.image(this.scale.width / 2, this.scale.height / 2 - 54,'yard').setOrigin(0.5);
    //this.add.image(100,400,'textbox').setOrigin(0.5);
    //this.add.image(this.scale.width / 2, this.scale.height / 2 + 100,'textbox', menuConfig).setOrigin(0.5);
    //this.add.image(this.scale.width / 4,this.scale.height/4,'student1').setOrigin(0,0);
    this.add.image(600,120,'student2').setOrigin(0,0);
	this.label = this.add.text(100, 100, '',menuConfig);
    this.typewriteText('Welcome to the Prison Pipeline.');
    //
    this.label2 = this.add.text(300, 200, '',menuConfig);
    this.typewriteText2('Choose a student');

    this.start = this.add.image(game.config.width/4 + 100, game.config.height/4 + 150, 'student1', menuConfig).setScale(0.5).setOrigin(0).setInteractive();
    this.start.on("pointerdown", () => {
                // this.game.scene.scenes.forEach(scene => {
                //     if (this.gameManager && scene.key && scene.key.includes("_")){
                //         this.gameManager.destroyScene(scene);
                //     }
                // })

        this.scene.start('menuScene');
        //play student1.js
        }, this);

    ///////////////////////////////////////////////////////////////////////    
    this.start = this.add.image(game.config.width/4 + 300, game.config.height/4 +150, 'student2', menuConfig).setScale(0.5).setOrigin(0).setInteractive();
    this.start.on("pointerdown", () => {
                // this.game.scene.scenes.forEach(scene => {
                //     if (this.gameManager && scene.key && scene.key.includes("_")){
                //         this.gameManager.destroyScene(scene);
                //     }
                // })

        this.scene.start('menuScene');
        //play student2.js
        }, this);
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
		delay: 100
	})
}

update(){
    
}
}
