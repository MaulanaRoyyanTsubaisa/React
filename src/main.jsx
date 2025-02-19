import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./App.jsx";
import { HeroUIProvider } from "@heroui/react";
import { BrowserRouter } from "react-router-dom";
import { reducers } from "./store";
import { Provider } from "react-redux";
import { createStore } from "redux";
const store = createStore(reducers);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <HeroUIProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HeroUIProvider>
    </Provider>
  </StrictMode>
);
