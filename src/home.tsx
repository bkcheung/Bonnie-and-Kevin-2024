interface homeProps{
    fontColor: string;
    toggleMenu:(e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>void;
}

function Home({fontColor, toggleMenu}:homeProps){
    // let textVis = 'text-white'
    // if(showMenu){
    //     textVis = 'text-black';
    // }
    return(
        <div className="bg-home-page bg-cover bg-top w-lvw h-lvh flex-col">
            <button className={fontColor + " text-2xl m-10 opacity-75"}
                    onClick={toggleMenu}>Menu</button>
            <div className={fontColor + " text-4xl mx-20 my-5 text-center"}>
                 We're so glad you're here!</div>
        </div>
    )
}

export default Home;