# To-do List com Recoil

Lista de tarefas em React cujo estado global (lista e filtro) é gerenciado pelo **Recoil**, com **átomos** e **seletores**. Exercício do Módulo 20 do curso de Front-End da EBAC.

## Funcionalidades

- Adicionar, concluir, remover e **filtrar** tarefas (todas, pendentes, concluídas)
- Contadores em cada filtro
- Interface responsiva (mobile first)

## Como o Recoil foi usado

| Conceito | Arquivo | Função |
|---|---|---|
| `RecoilRoot` | `src/main.jsx` | provedor do estado global |
| átomo `tarefasAtom` | `src/atoms/tarefasAtom.js` | lista de tarefas |
| átomo `filtroAtom` | `src/atoms/filtroAtom.js` | filtro ativo |
| seletor `tarefasFiltradasSelector` | `src/selectors/` | lê os dois átomos e devolve a lista filtrada |
| seletor `estatisticasSelector` | `src/selectors/` | total, pendentes e concluídas |
| `useRecoilState` | `FiltroTarefas.jsx` | lê e altera o filtro |
| `useRecoilValue` | `ListaTarefas.jsx`, `App.jsx` | lê seletores |
| `useSetRecoilState` | `NovaTarefa.jsx`, `ItemTarefa.jsx` | só altera a lista |

## Estrutura

```
src/
├── atoms/          tarefasAtom.js, filtroAtom.js
├── selectors/      tarefasFiltradasSelector.js, estatisticasSelector.js
├── components/     NovaTarefa, FiltroTarefas, ListaTarefas, ItemTarefa
├── App.jsx
├── main.jsx        RecoilRoot
└── estilos.css
```

## Como rodar

```bash
npm install
npm run dev     # http://localhost:5173
npm run build
```

> **Observação sobre a versão do React:** o Recoil (0.7.7) não é compatível com o React 19, por isso o projeto usa o **React 18.3**.

## Tecnologias

React 18 · Recoil · Vite · CSS puro
