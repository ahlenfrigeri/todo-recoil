import { useRecoilValue } from "recoil";
import { estatisticasSelector } from "./selectors/estatisticasSelector.js";
import NovaTarefa from "./components/NovaTarefa.jsx";
import FiltroTarefas from "./components/FiltroTarefas.jsx";
import ListaTarefas from "./components/ListaTarefas.jsx";

export default function App() {
  const { pendentes } = useRecoilValue(estatisticasSelector);

  return (
    <main className="app">
      <header className="app__cabecalho">
        <h1 className="app__titulo">To-do com Recoil</h1>
        <p className="app__resumo">
          {pendentes === 1 ? "1 tarefa pendente" : `${pendentes} tarefas pendentes`}
        </p>
      </header>

      <NovaTarefa />
      <FiltroTarefas />
      <ListaTarefas />
    </main>
  );
}
