interface homeProps{
    toggleMenu:(e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>void;
}

function Home({toggleMenu}:homeProps){
    return(
        <div className="bg-home-page bg-cover bg-top w-lvw h-lvh flex-col">
            <button className="text-2xl m-5 opacity-75"
                    onClick={toggleMenu}>Menu</button>
            <div className="text-4xl mx-20 my-5 text-center text-black">We're so glad you're here!</div>
        </div>
    )
}

export default Home;