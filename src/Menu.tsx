interface menuProps{
    show: boolean
}
function Menu({show}:menuProps){
    let showMenu = 'hidden';
    if(show){
        showMenu = '';
    }
    return(
        <div className={showMenu+' w-80 h-lvh'}>
            <div className='flex flex-col p-5 bg-white w-80 h-lvh'>
                <h3>Bonnie & Kevin</h3>
                <a>Program</a>
                <a>Worship Lyrics</a>
                <a>Map</a>
                <a>Seating Chart</a>
                <a>Trivia</a>
                <a>Photos</a>
            </div>
        </div>
    )
}

export default Menu;