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
        
    this.add.image(this.scale.width / 2, this.scale.height / 2 - 54,'yard').setOrigin(0.5);
    //this.add.image(100,400,'textbox').setOrigin(0.5);
    this.add.image(this.scale.width / 2, this.scale.height / 2 + 100,'textbox', menuConfig).setOrigin(0.5);
	this.label = this.add.text(100, 300, '',menuConfig);
    this.typewriteText('Welcome to the Prison Pipeline.');
    //
    this.label2 = this.add.text(100, 400, '',menuConfig);
    this.typewriteText2('Choose a student');
    
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