import songs from "./lyrics";

function Worship(){
    const songLyrics = songs.map(song =>
        <div key={song.id}>
            <h2 className="text-2xl text-center my-5">{song.title}</h2>
            <div className="whitespace-break-spaces text-lg">{song.lyrics}</div>
        </div>
    )

    return(
        <div className='m-10'>
            <h3 className="text-center">Worship Lyrics</h3>
            {songLyrics}
        </div>
    )
}

export default Worship;