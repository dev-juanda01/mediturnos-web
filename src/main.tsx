import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalProvider } from "./context/global/GlobalProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <GlobalProvider>
        <App />
    </GlobalProvider>
);
