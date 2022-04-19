import prompt from "prompt-sync";
import fs from "fs";
import { exit } from "process";

const perguntar = prompt();

rodarFrame("no-trabalho", 1);
rodarFrame("no-ponto", 1);
rodarFrame("onibus-chegando", 12);

async function rodarFrame(frame: string, quantidadeDeFrames: number) {
  for (let i = 1; i <= quantidadeDeFrames; i++) {
    if (quantidadeDeFrames > 1) { 
      await new Promise(r => setTimeout(r, 640));
      console.clear();
    }

    let frameTexto = fs.readFileSync(`./frames/${frame}${i}`);
    console.log(frameTexto.toString() + "\n\n");
  }

  let quisContinuar = perguntar("Aperte 'y' para continuar...");

  if (quisContinuar === "y") {
    return;

  } else {
    console.log("Voce escolheu sair do jogo...");
    exit(1);
  }
}