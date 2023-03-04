import { BrowserRouter } from "react-router-dom";
import Foodies from "./components/Foodies";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Foodies />
      </div>
    </BrowserRouter>
  );
}

export default App;
