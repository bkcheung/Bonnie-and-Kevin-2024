interface menuProps{
    show: boolean;
    toggleMenu:(e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>void;

}
function Menu({show, toggleMenu}:menuProps){
    const showMenu = show ? "" : "hidden"
    return(
        <div className={showMenu +' fixed w-80 h-lvh bg-white/95'}>
            <div className='flex flex-col p-10'>
                <button className="w-fit ml-auto text-gray-500"
                        onClick={toggleMenu}>X</button>
                <h3 className="text-3xl my-5">Bonnie & Kevin</h3>
                <a>Home</a>
                <a>Program</a>
                <a>Worship Lyrics</a>
                <a>Photo Order</a>
                <a>Map</a>
                <a>Seating Chart</a>
                <a>Trivia</a>
                <a>Photos</a>
            </div>
        </div>
    )
}

export default Menu;