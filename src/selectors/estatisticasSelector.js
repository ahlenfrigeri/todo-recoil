import { selector } from "recoil";
import { tarefasAtom } from "../atoms/tarefasAtom.js";

// Outro seletor derivado: números para os contadores
export const estatisticasSelector = selector({
  key: "estatisticas",
  get: ({ get }) => {
    const tarefas = get(tarefasAtom);
    const concluidas = tarefas.filter((t) => t.concluida).length;
    return { total: tarefas.length, concluidas, pendentes: tarefas.length - concluidas };
  },
});
