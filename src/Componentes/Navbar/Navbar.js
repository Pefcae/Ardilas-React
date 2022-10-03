import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
//import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {styles} from './Navbar.style'
import {CartWidget} from './CartWidget'


//const Navbar =(props)=>{
    //children es una palabra reservada para traer los componentes
//const Navbar =( { login , children} )=>{
    const Navbar =(  props  )=>{


    const categorias = [
        {nombre:"River Plate", id:0,ruta:"#"},
        {nombre:"Boca Juniors", id:1,ruta:"#"},
        {nombre:"Selección Argentina", id:2,ruta:"#"},
        {nombre:"Ropa Femenina", id:3,ruta:"#"},
        {nombre:"Ropa Masculina", id:4,ruta:"#"},
    ];
  //  const { nombreUsuario, apellidoUsuario } = props
    return(
    <header style={styles.container}>
        <img style={styles.imagenes}src={logo} alt="tienda online" />
        <h1>Adidas</h1>
        <nav>
            {
                categorias.map((categoria)=>{
                    return <a key={categoria.id} style={styles.a} href={categoria.ruta}>{categoria.nombre}</a>

                })
            }
        <a style={styles.a} href="">{props.nombreUsuario } </a>
        </nav>
        
        <CartWidget/>
        
    </header>)
}
//{children[0]}

export default Navbar

/*const style = {
container:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
    width: '100%',
},
imagenes:{
    height:'90%',
},
a:{
    margin:10,
    color:'red',
}

}

//siempre que se renderiza se debe poner la key con el ID

const array=[1,2,3];
*/
/*const uno=array[0]
const dos=array[1]
const tres=array[2]*/

//es equivalente a esto

/*const [uno,dos,tres]=array

const objeto = {
    x:1,
    y:2,
}
*/
/*const x=objeto.x
const y=objeto.y
*/

//const {x:x,y:y} = objeto
/*const {x,y} = objeto

console.log(x)
console.log(y)

*/

//categorias.foreach((categoria)=>{
//el problema es que esto no devuelve nada, no es una expresión porque no tiene un retorno
//})




/*<a style={styles.a} href="">River Plate</a>
<a style={styles.a} href="">Boca Juniors</a>
<a style={styles.a} href="">Selección Argentina</a>
<a style={styles.a} href="">Ropa Femenina</a>
<a style={styles.a} href="">Ropa Masculina</a>
*/

//<button>
//<ShoppingCartIcon color="primary" sx={{ fontSize: 40 }}/>
//</button>
