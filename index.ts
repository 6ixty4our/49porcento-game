import prompt from "prompt-sync";
import fs from "fs";
import { exit } from "process";
import open from "open";

const perguntar = prompt();

rodarFrame("no-trabalho", 1);
rodarFrame("no-ponto", 1);
rodarFrame("chegando", 12);
rodarFrame("onibus-casa", 37);
rodarFrame("em-casa", 7);
rodarFrame("sus-dentro", 7, true);

function rodarFrame(frame: string, quantidadeDeFrames: number, acabou?: boolean) {
  for (let i = 1; i <= quantidadeDeFrames; i++) {
    if (quantidadeDeFrames > 1) {
      sleep(640);
      console.clear();
    }

    let frameTexto = fs.readFileSync(`./frames/${frame}${i}`);
    console.log(frameTexto.toString() + "\n\n");
  }

  if (acabou) {
    console.log("Obrigado por jogar")
    sleep(1000);

    console.clear();

    let frameTexto = fs.readFileSync(`./frames/bigSUS`);
    console.log(frameTexto.toString());

    sleep(500);

    open('https://www.youtube.com/watch?v=9QiQMScgFS8');

    exit(1);
  } else {
    let quisContinuar = perguntar("Aperte 'y' para continuar... (y/n): ");

    if (quisContinuar === "y") {
      return;

    } else {
      console.log("Voce escolheu sair do jogo...");
      exit(1);
    }
  }
}

function sleep(milliseconds: number) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}