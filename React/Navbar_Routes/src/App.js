
import { Routes,Route } from "react-router-dom";
import  LayoutP from "./pages/components/layout";
import Home from "./pages/cliente/home"; 
import Bienes from "./pages/cliente/Bienes";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<LayoutP />} >
          <Route path="/" element={<Home />} />
          <Route path="/bienes" element={<Bienes />} />
        </Route>        
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
