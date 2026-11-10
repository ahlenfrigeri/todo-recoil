import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { tarefasAtom } from "../atoms/tarefasAtom.js";

export default function NovaTarefa() {
  const [texto, setTexto] = useState(""); // estado local: só o campo
  const [erro, setErro] = useState("");
  // useSetRecoilState: só ESCREVE no átomo (este componente não precisa ler a lista)
  const setTarefas = useSetRecoilState(tarefasAtom);

  function handleSubmit(evento) {
    evento.preventDefault();
    const limpo = texto.trim();
    if (!limpo) {
      setErro("Digite uma tarefa antes de adicionar.");
      return;
    }
    // Sempre um array NOVO: o Recoil (como o React) não aceita mutação
    setTarefas((atuais) => [...atuais, { id: Date.now(), texto: limpo, concluida: false }]);
    setTexto("");
    setErro("");
  }

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <label className="visualmente-oculto" htmlFor="nova-tarefa">
        Nova tarefa
      </label>
      <input
        id="nova-tarefa"
        className="formulario__campo"
        placeholder="O que você precisa fazer?"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        maxLength={120}
        autoComplete="off"
      />
      <button className="botao" type="submit">
        Adicionar
      </button>
      {erro && (
        <p className="formulario__erro" role="alert">
          {erro}
        </p>
      )}
    </form>
  );
}
