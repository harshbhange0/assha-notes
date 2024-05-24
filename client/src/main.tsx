import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import RecoilContextProvider from "./providers/recoil.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilContextProvider>
        <App />
      </RecoilContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
