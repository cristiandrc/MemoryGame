import Home from "./pages/Home";
import { ContextProvider } from "./context/Context";
import "./App.css";

function App() {
  return (
    <ContextProvider>
      <Home />
    </ContextProvider>
  );
}

export default App;
