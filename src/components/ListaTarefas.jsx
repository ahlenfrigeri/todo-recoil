import { useRecoilValue } from "recoil";
import { filtroAtom } from "../atoms/filtroAtom.js";
import { tarefasFiltradasSelector } from "../selectors/tarefasFiltradasSelector.js";
import ItemTarefa from "./ItemTarefa.jsx";

const mensagensVazias = {
  todas: "Nenhuma tarefa ainda. Adicione a primeira acima!",
  pendentes: "Nada pendente. Bom trabalho! 🎉",
  concluidas: "Nenhuma tarefa concluída ainda.",
};

export default function ListaTarefas() {
  // Lê o SELETOR: a lista já vem filtrada, o componente não precisa filtrar
  const tarefas = useRecoilValue(tarefasFiltradasSelector);
  const filtro = useRecoilValue(filtroAtom);

  if (tarefas.length === 0) {
    return <p className="vazio">{mensagensVazias[filtro]}</p>;
  }

  return (
    <ul className="lista">
      {tarefas.map((tarefa) => (
        <ItemTarefa key={tarefa.id} tarefa={tarefa} />
      ))}
    </ul>
  );
}
