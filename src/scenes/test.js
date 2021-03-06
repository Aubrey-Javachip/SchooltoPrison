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
    //this.add.image(600,120,'student2').setOrigin(0,0);
	this.label = this.add.text(100, 100, '',menuConfig);
    this.typewriteText('Welcome to the Prison Pipeline.');
    //
    this.label2 = this.add.text(300, 200, '',menuConfig);
    this.typewriteText2('Choose a student');

    //this.start = this.add.image(game.config.width/4 + 100, game.config.height/4 + 150, 'student1', menuConfig).setScale(0.5).setOrigin(0).setInteractive();
    this.start1 = this.add.image(game.config.width/4 + 70, game.config.height/4 + 150, 'student1', menuConfig).setScale(0.2).setOrigin(0).setInteractive();
    
    //change pic opacity
    this.start1.on("pointerover",() => {
         this.start1.alpha = (0.5)});
    this.start1.on("pointerout",() => {
              this.start1.alpha = (1)});
    this.start1.on("pointerdown", () => {
                // this.game.scene.scenes.forEach(scene => {
                //     if (this.gameManager && scene.key && scene.key.includes("_")){
                //         this.gameManager.destroyScene(scene);
                //     }
                // })

        this.scene.start('student1Scene');
        //play student1.js
        }, this);

    ///////////////////////////////////////////////////////////////////////    
    this.start2 = this.add.image(game.config.width/4 + 320, game.config.height/4 +150, 'student2', menuConfig).setScale(0.2).setOrigin(0).setInteractive();
  //  this.start = this.add.image('student2', menuConfig).setOrigin(0,0).setInteractive();
    this.start2.on("pointerover",() => {
        this.start2.alpha = (0.5)});
    this.start2.on("pointerout",() => {
            this.start2.alpha = (1)});
    this.start2.on("pointerdown", () => {
                // this.game.scene.scenes.forEach(scene => {
                //     if (this.gameManager && scene.key && scene.key.includes("_")){
                //         this.gameManager.destroyScene(scene);
                //     }
                // })

        this.scene.start('student2Scene');
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
