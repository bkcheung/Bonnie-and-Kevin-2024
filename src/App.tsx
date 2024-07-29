import { useState } from 'react';
import Menu from './Menu';
import Home from './Home';
import Program from './Program';
import Worship from './Worship';

function App() {
    const [showMenu, setMenuVis] = useState(false);
    const [fontColor, setFontColor] = useState('text-black');

    function toggleMenu(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        setMenuVis(!showMenu);
        fontColor==='text-black' ? setFontColor('text-white') : setFontColor('text-black');
    }
    return (
        <>
            <Menu show={showMenu}
                  toggleMenu={toggleMenu}>
            </Menu>
            <Home fontColor={fontColor}
                  toggleMenu={toggleMenu}>
            </Home>
            <Program></Program>
            <Worship></Worship>
        </>
    )
}

export default App;