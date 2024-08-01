import { songs } from "./data";
import cx from "classnames";

interface worshipProps {
  isActive: boolean;
}

function Worship({ isActive }: worshipProps) {
  const songLyrics = songs.map((song) => (
    <div key={song.id}>
      <h2 className="text-2xl text-center my-5">{song.title}</h2>
      <div className="whitespace-break-spaces text-lg text-center">
        {song.lyrics}
      </div>
    </div>
  ));
  return (
    <div
      className={cx("p-10 bg-sky bg-cover bg-bottom", !isActive && "hidden")}
    >
      <h3 className="text-center pt-20 pb-5">Worship Lyrics</h3>
      {songLyrics}
    </div>
  );
}

export default Worship;
