interface menuProps{
    show: boolean;
    toggleMenu:(e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>void;
    change:(e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>void;

}
function Menu({show, toggleMenu, change}:menuProps){
    const showMenu = show ? "" : "hidden";
    const showButton = show ? "hidden" : "";
    return(
        <div>
            <button className={showButton+" fixed text-2xl m-10 bg-white/75 text-center px-5 py-3"}
                onClick={toggleMenu}>Menu
            </button>
            <div className={showMenu +' fixed w-80 h-lvh bg-white/95 z-10'}>
            <div className='flex flex-col p-10'>
                <button className="w-fit ml-auto text-gray-500"
                        onClick={toggleMenu}>X</button>
                <h3 className="text-3xl my-5">Bonnie & Kevin</h3>
                <button id='0' onClick={change}>Home</button>
                <button id='1' onClick={change}>Program</button>
                <button id='2' onClick={change}>Worship Lyrics</button>
                <button id='3' onClick={change}>Photo Order</button>
                <button id='4' onClick={change}>Map</button>
                <button id='5' onClick={change}>Seating Chart</button>
                <button id='6' onClick={change}>Trivia</button>
                <button id='7' onClick={change}>Photos</button>
            </div>
            </div>
        </div>
    )
}

export default Menu;