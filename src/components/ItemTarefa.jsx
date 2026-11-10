import { useSetRecoilState } from "recoil";
import { tarefasAtom } from "../atoms/tarefasAtom.js";

export default function ItemTarefa({ tarefa }) {
  const setTarefas = useSetRecoilState(tarefasAtom);

  const alternar = () =>
    setTarefas((atuais) =>
      atuais.map((t) => (t.id === tarefa.id ? { ...t, concluida: !t.concluida } : t))
    );

  const remover = () => setTarefas((atuais) => atuais.filter((t) => t.id !== tarefa.id));

  return (
    <li className={`item ${tarefa.concluida ? "item--concluida" : ""}`}>
      <label className="item__rotulo">
        <input
          type="checkbox"
          className="item__check"
          checked={tarefa.concluida}
          onChange={alternar}
        />
        <span className="item__texto">{tarefa.texto}</span>
      </label>
      <button
        type="button"
        className="item__remover"
        onClick={remover}
        aria-label={`Remover a tarefa ${tarefa.texto}`}
        title="Remover"
      >
        ✕
      </button>
    </li>
  );
}
