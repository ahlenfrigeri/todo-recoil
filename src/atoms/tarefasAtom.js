import { atom } from "recoil";

// Átomo: um pedaço de estado global. Todo componente que o ler
// é atualizado automaticamente quando ele mudar.
export const tarefasAtom = atom({
  key: "tarefas", // identificador único em toda a aplicação
  default: [
    { id: 1, texto: "Configurar o RecoilRoot", concluida: true },
    { id: 2, texto: "Criar os átomos", concluida: false },
    { id: 3, texto: "Criar o seletor de tarefas filtradas", concluida: false },
  ],
});
