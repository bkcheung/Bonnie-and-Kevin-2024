import { useState } from 'react';
import Menu from './Menu';
import Home from './Home';
import Program from './Program';

function App(){
    const [showMenu, setMenuVis] = useState(false);
    const [fontColor, setFontColor] = useState('text-black');

    function toggleMenu(e:React.MouseEvent<HTMLButtonElement,MouseEvent>){
        e.preventDefault();
        setMenuVis(!showMenu);
        if(fontColor==='text-black') setFontColor('text-white');
        else setFontColor('text-black');
    }
    return(
        <>
         <Menu show={showMenu}
               toggleMenu={toggleMenu}>
         </Menu>
         <Home fontColor={fontColor}
               toggleMenu = {toggleMenu}>
         </Home>
         <Program></Program>
        </>
    )
}

export default App;