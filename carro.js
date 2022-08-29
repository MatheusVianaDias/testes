//carro
let xCarro = 850
let yCarro = 20
let velocidadeCarro1 = 5.7;

//carro 2
let xCarro2 = 850
let yCarro2 = 220
let velocidadeCarro2 = 5.5;

//carro 3
let xCarro3 = 850
let yCarro3 = 140
let velocidadeCarro3 = 6.2;

//carro 4
let xCarro4 = 850
let yCarro4 = 470
let velocidadeCarro4 = 5.2;

//carro 5
let xCarro5 = 850
let yCarro5 = 390
let velocidadeCarro5 = 4.5;

//carro 6
let xCarro6 = 850
let yCarro6 = 310
let velocidadeCarro6 = 5.0;

function mostraCarro() {
    image(imagemCarro, xCarro, yCarro, 120, 100)
    image(imagemCarro2, xCarro2, yCarro2, 150, 100)
    image(imagemCarro3, xCarro3, yCarro3, 150, 100)
    image(imagemCarro4, xCarro4, yCarro4, 140, 120)
    image(imagemCarro5, xCarro5, yCarro5, 90, 100)
    image(imagemCarro6, xCarro6, yCarro6, 80, 120)

}

function movimentaCarro() {
    xCarro -= velocidadeCarro1
    xCarro2 -= velocidadeCarro2
    xCarro3 -= velocidadeCarro3
    xCarro4 -= velocidadeCarro4
    xCarro5 -= velocidadeCarro5
    xCarro6 -= velocidadeCarro6
}

function voltaPosicaoInicialDoCarro() {
    if (xCarro < -50) {
        xCarro = 850;
    }
    if (xCarro2 < -50) {
        xCarro2 = 850;
    }
    if (xCarro3 < -50) {
        xCarro3 = 850;
    }
    if (xCarro4 < -50) {
        xCarro4 = 850;
    }
    if (xCarro5 < -50) {
        xCarro5 = 850;
    }
    if (xCarro6 < -50) {
        xCarro6 = 850;
    }
}