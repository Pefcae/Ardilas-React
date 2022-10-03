
import React  from "react"
import './App.css'
import Navbar from './Componentes/Navbar/Navbar'
//import {ComponenteBoton} from './ComponenteBoton'
//import {ComponenteTitulo} from './ComponenteTitulo'
import {ItemListContainer} from './ItemListContainer'
//<fragment>

//<Navbar nombreUsuario={login}/>

export const App = () => {
  const login="Pablo Federiconi";
  const mensaje ="Bienvenido al ecommerce de Adidas"
  return (
    <> 
    
    <Navbar nombreUsuario={login}>
    </Navbar>
    <ItemListContainer Greeting={mensaje}>
    </ItemListContainer>
  </>
  )
  
}

export const MiCompronente=()=>{
}

//<ComponenteBoton/>
//<ComponenteTitulo/>

  
//return <h1  className="rojo">Hola Mundo 2</h1>

//export default App
/*
const nodoPadre = document.getElementById("padre"
const p = document.createElement("p")
p.innerHTML="holamundo"
nodoPadre.appendChild(p)
esto es reemplazado por 
<p>Hola Mundo</p>
jsx combina ambos mundos
*/






/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Mundo
         </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

/*
function mifuncion
return null
*/