import cx from "classnames";

interface menuProps {
  show: boolean;
  toggleMenu: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  change: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
function Menu({ show, toggleMenu, change }: menuProps) {
  return (
    <div>
      <button
        className={cx(
          "fixed text-2xl m-10 bg-white/75 text-center px-5 py-3 z-50",
          show && "hidden",
        )}
        onClick={toggleMenu}
      >
        Menu
      </button>
      <div
        className={cx(
          "fixed w-80 h-lvh bg-white/95 z-10",
          show ? "show" : "hidden",
        )}
      >
        <div id="menu" className="flex flex-col p-10">
          <button
            className="w-fit ml-auto text-gray-500 p-0"
            onClick={toggleMenu}
          >
            x
          </button>
          <button id="0" onClick={change} className="text-3xl">
            Bonnie & Kevin
          </button>
          <button id="1" onClick={change}>
            Program
          </button>
          <button id="2" onClick={change}>
            Worship Lyrics
          </button>
          <button id="3" onClick={change}>
            Photo Order
          </button>
          <button id="4" onClick={change}>
            Seating Chart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
