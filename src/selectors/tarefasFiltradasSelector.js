import { selector } from "recoil";
import { tarefasAtom } from "../atoms/tarefasAtom.js";
import { filtroAtom } from "../atoms/filtroAtom.js";

// Seletor: estado DERIVADO. Lê os dois átomos e devolve a lista já filtrada.
// O Recoil recalcula sozinho quando a lista ou o filtro mudam.
export const tarefasFiltradasSelector = selector({
  key: "tarefasFiltradas",
  get: ({ get }) => {
    const tarefas = get(tarefasAtom);
    const filtro = get(filtroAtom);

    if (filtro === "pendentes") return tarefas.filter((t) => !t.concluida);
    if (filtro === "concluidas") return tarefas.filter((t) => t.concluida);
    return tarefas;
  },
});
