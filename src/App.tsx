import { useState } from 'react';
import Menu from './Menu';
import Home from './Home';
import Program from './Program';
import Worship from './Worship';

function App() {
    const [activePage, setPage] = useState(0);
    const [showMenu, setMenuVis] = useState(false);

    function toggleMenu(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        setMenuVis(!showMenu);
    }
    function changePage(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        const page = e.target as HTMLElement;
        setPage(Number(page.id));
        toggleMenu(e);
    }
    return (
        <>
            <Menu show={showMenu}
                  toggleMenu={toggleMenu}
                  change={changePage}>
            </Menu>
            <Home isActive={activePage===0}></Home>
            <Program isActive={activePage===1}></Program>
            <Worship isActive={activePage===2}></Worship>
        </>
    )
}

export default App;