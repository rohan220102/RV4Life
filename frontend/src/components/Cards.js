import Card from "./Card";

/* displays a list of card components
 * arguments:
 *   - data: array of data objects (see getResults.js)
 *   - onSelect: callback function for when a card is selected
 *   - onBtnClick: callback function for when the button is clicked
 */
const Cards = ({ data, onSelect, onBtnClick, btnText }) => {
  return (
    <>
      {data.features.length !== 0 &&
        data.features.map(
          ({
            properties: { id, title, rating, detour, visited, temp, selected },
          }) => (
            <Card
              key={id}
              title={title}
              rating={rating}
              detour={detour}
              visited={visited}
              temp={temp}
              id={id}
              selected={selected}
              onSelect={onSelect}
              onBtnClick={onBtnClick}
              btnText={btnText}
            />
          )
        )}
    </>
  );
};

export default Cards;
