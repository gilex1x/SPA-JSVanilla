import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error from '../pages/Error404';
//Establecemos las rutas 
const Routes ={
    '/':Home,
    '/:id': Character,
    '/about': 'Contact',
}
//Manejador o router
const Router =async()=>{
    const header = null || document.getElementById('header');
    const content=null || document.getElementById('content');
    // renderizamos los respectivos elementos en sus contenerdore
    header.innerHTML=await Header();
};


export default Router;