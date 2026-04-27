
import Perfil from "./Components/Paginas/Perfil";
import Conf from "./Components/Paginas/Conf";
import Story from "./Components/Paginas/Story";
import Layout from "./Components/Layout/Layout";
import Calculo from "./Components/Paginas/Calculo";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Footer from "./Components/Rodape/Footer";


function App() {

 
  return (
   
     <BrowserRouter>
      <div className="appy">

           <Routes>
                <Route path="/" element={<Layout/>}/>
                <Route path="/Calculo" element={<Calculo/>}/>
                 <Route path="/Story" element={<Story/>}/>
                <Route path="/Conf" element={<Conf/>}/>
                <Route path="/Perfil" element={<Perfil/>}/>
            </Routes>
            
                  <Footer/> 
             
                   
       </div>
      
     </BrowserRouter>
   

 
         
   
  );
}

export default App;
