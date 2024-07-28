import { useState } from 'react';
import Menu from './Menu';
import Home from './home';

function App(){
    const [showMenu, setMenuVis] = useState(false);

    function toggleMenu(e:React.MouseEvent<HTMLButtonElement,MouseEvent>){
        e.preventDefault();
        setMenuVis(!showMenu);
        console.log(showMenu);
    }
    return(
        <>
         <Home toggleMenu = {toggleMenu}></Home>
         <Menu show={showMenu}></Menu>
        </>
    )
}

export default App;