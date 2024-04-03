import './App.css';
import Home from './pages/Home/Home';
import Animais from './pages/Animais/Animais';
import Fotos from './pages/Fotos/Fotos';
import Depoimento from './pages/Depoimentos/Depoimentos';
import Login from './pages/Login/Login';
import {BrowserRouter as Roteador, Routes, Route} from 'react-router-dom';



function App() {

  return (
    <>
    
<Roteador>
     <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/animais' Component={Animais}/>
        <Route exact path='/fotos' Component={Fotos}/>
        <Route exact path='/depoimento'Component={Depoimento}/>
        <Route exact path='/login' Component={Login}/>
     </Routes>
     </Roteador>
  
      

     
    </>
  );
}

export default App