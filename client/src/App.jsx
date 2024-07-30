import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Router  from "./router/Router";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/*" element={<Router/>} />
        </Routes>    
      </BrowserRouter>
    </div>
  );
}

export default App;
