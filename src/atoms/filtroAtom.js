import { atom } from "recoil";

export const FILTROS = {
  todas: "Todas",
  pendentes: "Pendentes",
  concluidas: "Concluídas",
};

// Átomo com o filtro ativo: "todas" | "pendentes" | "concluidas"
export const filtroAtom = atom({
  key: "filtro",
  default: "todas",
});
