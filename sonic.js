var SONIC_DIREITA = 1;
var SONIC_ESQUERDA = 2;

function Sonic(context, teclado, imagem){
    this.context = context;
    this.teclado = teclado;
    this.x = 0;
    this.y = 0
    this.velocidade = 10;

    this.sheet = Sprintsheet(context,imagem,3,8);
    this.sheet.intervalo = 60;

    this.andado = false;
    this.direcao = SONIC_DIREITA;
}

Sonic.prototype = {

    atualizar: function(){
        if(this.teclado.pressionada(SETA_DIREITA)){
            if( !this.andado || this.direcao != SONIC_DIREITA){
                this.sheet.linha = 1;
                this.sheet.coluna = 0;
            }

            this.andando = true;
            this.direcao = SONIC_DIREITA;

            this.sheet.proximoQuadro();

            this.x += this.velocidade;
        }
        else if(this.teclado.pressionada(SETA_ESQUERDA)){
            if( !this.andado || this.direcao != SONIC_ESQUERDA){
                this.sheet.linha = 2;
                this.sheet.coluna = 0;
            }

            this.andando = true;
            this.direcao = SONIC_ESQUERDA;
            this.sheet.proximoQuadro();
            this.x -= this.velocidade;
        }

        else{
            if(this.direcao == SONIC_DIREITA)
                this.sheet.coluna = 0;
            else if(this.direcao == SONIC_ESQUERDA)
                this.sheet.coluna = 1;

            this.sheet.linha = 0;

            this.andado = false;
        }
    },

    desenhar: function(){
        this.sheet.desenhar(this.x,this.y);
    }
}