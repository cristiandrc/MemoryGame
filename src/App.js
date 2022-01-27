import Home from "./pages/Home";
import "./App.css";
import { getData } from "./utils/getData";

getData();
function App() {
  return <Home />;
}

export default App;
