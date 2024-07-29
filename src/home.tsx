interface homeProps{
    isActive: boolean;
}

function Home({isActive}:homeProps){
    const state = isActive ? '':'hidden';
    return(
        <div className={state+" bg-home-page bg-cover bg-top w-lvw h-lvh flex-col"}>
            <div className={"absolute top-32 text-4xl px-20 text-center"}>
                 We're so glad you're here!</div>
        </div>
    )
}

export default Home;