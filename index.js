"use strict";
exports.__esModule = true;
var prompt_sync_1 = require("prompt-sync");
var fs_1 = require("fs");
var process_1 = require("process");
var open_1 = require("open");
var perguntar = prompt_sync_1();
console.clear();
rodarFrame("no-trabalho", 1);
console.clear();
rodarFrame("no-ponto", 1);
console.clear();
rodarFrame("chegando", 12);
console.clear();
rodarFrame("onibus-casa", 37);
console.clear();
rodarFrame("em-casa", 7);
console.clear();
rodarFrame("sus-dentro", 7, true);
function rodarFrame(frame, quantidadeDeFrames, acabou) {
    for (var i = 1; i <= quantidadeDeFrames; i++) {
        if (quantidadeDeFrames > 1) {
            sleep(640);
            console.clear();
        }
        var frameTexto = fs_1.readFileSync("./frames/".concat(frame).concat(i));
        console.log(frameTexto.toString() + "\n\n");
    }
    if (acabou) {
        console.log("Obrigado por jogar");
        sleep(1000);
        console.clear();
        var frameTexto = fs_1.readFileSync("./frames/bigSUS");
        console.log(frameTexto.toString());
        sleep(500);
        open_1('https://www.youtube.com/watch?v=9QiQMScgFS8');
    }
    else {
        var quisContinuar = perguntar("Aperte 'y' para continuar... (y/n): ");
        if (quisContinuar === "y") {
            return;
        }
        else {
            console.log("Voce escolheu sair do jogo...");
            process_1.exit(1);
        }
    }
}
function sleep(milliseconds) {
    var date = Date.now();
    var currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
