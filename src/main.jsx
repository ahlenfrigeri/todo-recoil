import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App.jsx";
import "./estilos.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* RecoilRoot: provedor do estado global. Átomos e seletores só
        funcionam em componentes que estão dentro dele. */}
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </StrictMode>
);
