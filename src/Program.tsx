import cx from 'classnames'

interface programProps {
  isActive: boolean;
}
function Program({ isActive }: programProps) {
  return (
    <div className={cx("flex flex-col items-center p-10 bg-sky bg-cover", !isActive && "hidden")}>
      <h3 className="pt-20 pb-5">Program</h3>
      <h2>4:30PM - Ceremony Begins</h2>
      <h2>5:30PM- Cocktail hour</h2>
      <h2>6:30PM - Reception Begins</h2>
      <h2>7:00pm - 1st Course</h2>
      <h2>7:45PM - 2nd Course</h2>
      <h2>8:25PM - Cake Cutting</h2>
      <h2>8:45PM - Dessert</h2>
      <h2>9:15PM - Dance floor opens</h2>
      <h2>12:30 - Last call for Bar</h2>
    </div>
  );
}

export default Program;
