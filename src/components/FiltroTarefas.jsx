import { useRecoilState, useRecoilValue } from "recoil";
import { FILTROS, filtroAtom } from "../atoms/filtroAtom.js";
import { estatisticasSelector } from "../selectors/estatisticasSelector.js";

export default function FiltroTarefas() {
  // useRecoilState: lê E escreve (igual ao useState, mas global)
  const [filtro, setFiltro] = useRecoilState(filtroAtom);
  // useRecoilValue: só lê (aqui, um seletor)
  const { total, pendentes, concluidas } = useRecoilValue(estatisticasSelector);
  const numeros = { todas: total, pendentes, concluidas };

  return (
    <div className="filtros" role="group" aria-label="Filtrar tarefas">
      {Object.entries(FILTROS).map(([chave, rotulo]) => (
        <button
          key={chave}
          type="button"
          className={`filtros__botao ${filtro === chave ? "filtros__botao--ativo" : ""}`}
          aria-pressed={filtro === chave}
          onClick={() => setFiltro(chave)}
        >
          {rotulo} <span className="filtros__numero">{numeros[chave]}</span>
        </button>
      ))}
    </div>
  );
}
