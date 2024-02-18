var config = {
    type: Phaser.AUTO,

    //define o espaço ocupado na tela, nesse caso, 800 de largura e 600 de altura
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

var game = new Phaser.Game(config);

//cria uma variável chamada peixinho
var peixinho

//carrega as coisas dentro da página
function preload() {
    this.load.image('mar', 'assets/bg_azul-claro.png');
    this.load.image('logo', 'assets/logo-inteli_azul.png');
    this.load.image('peixe', 'assets/peixes/tartaruga.png');
    this.load.image('concha', 'assets/peixes/concha.png');
    this.load.image('crustaceo', 'assets/peixes/crustaceo.png');
}

//coloca as imagens dentro da página
function create() {
    this.add.image(400, 300, 'mar')
    this.add.image(400,525, 'logo').setScale(0.5);
    this.add.image(100,225, 'concha').setScale(1.5);
    this.add.image(700,125, 'crustaceo').setScale(0.5);

    //É uma variável controlável
    peixinho = this.add.image(400,300, 'peixe');
    peixinho.setFlip(true, false);
}

//trabalha como o while atualizando as informções dentro da página, nesse caso faz a tartaruguinha seguir a seta do mouse
function update() {
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}