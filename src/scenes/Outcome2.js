import game from "../main.js";

export default class Outcome2 extends Phaser.Scene{
    constructor(){
        super("outcome2Scene");
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
        
    
    //this.add.image(this.scale.width / 4,this.scale.height/4,'student1').setOrigin(0,0);
    //this.add.image(600,120,'student2').setOrigin(0,0);
	//this.label = this.add.text(100, 100, '',menuConfig);
    //this.typewriteText('talk about white privlidge.');
    //this.add.text(50, 100, 'Due to the series of events involving intensive sercurity and',menuConfig);
    this.add.text(50, 120, 'Due to white privilege and social constructs This student was not',menuConfig);
    this.add.text(50, 140,'effected by the school-to-prison pipeline while other students',menuConfig);
    this.add.text(50, 160, 'were. Due to the social constructs, racial inequality and prejudice that',menuConfig);
    this.add.text(50, 180, 'is integrated into our public school systems; young minority students,', menuConfig);
    this.add.text(50, 200, 'especially Black students, are not given the proper help and', menuConfig);
    this.add.text(50, 220, 'attention to succeed. Polices such as these are only perpetuating', menuConfig);
    this.add.text(50, 240, 'the growing mass incarceration in the United States.', menuConfig);
    //
    //this.label2 = this.add.text(300, 200, '',menuConfig);
    //this.typewriteText2('');

    //this.start = this.add.image(game.config.width/4 + 100, game.config.height/4 + 150, 'student1', menuConfig).setScale(0.5).setOrigin(0).setInteractive();
    /*this.start1 = this.add.image(game.config.width/4 + 70, game.config.height/4 + 150, 'student1', menuConfig).setScale(0.2).setOrigin(0).setInteractive();
    
    //change pic opacity
  
        */
        this.cursors.space.on('down', () => {/*this.sfx_start.play();*/ this.scene.start('endScene', this.bgm)});
    
}
/*
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

*/
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