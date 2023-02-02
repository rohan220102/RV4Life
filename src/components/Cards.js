import Card from "./Card";

const Cards = ({ data, onSelect, onBtnClick }) => {
  return (
    <>
      {data.map(({ id, title, rating, detour, visited, temp, selected }) => (
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
        />
      ))}
    </>
  );
};

export default Cards;
