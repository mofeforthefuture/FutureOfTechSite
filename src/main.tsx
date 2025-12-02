import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { HeroUIProvider } from "@heroui/system";

import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <HeroUIProvider>
    <App />
  </HeroUIProvider>
);
