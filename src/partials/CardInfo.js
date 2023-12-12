const CardInfo = ({ card }) => {
  if (card.frameType === "link") {
    return (
      <div>
        <h3 className="text-l">{card.type}</h3>
        <h3 className="text-l">
          LINK-{card.linkval} {card.attribute} {card.race}
        </h3>
        <h3>{card.atk} ATK</h3>
      </div>
    );
  } else if (card.frameType === "xyz") {
    return (
      <div>
        <h3 className="text-l">{card.type}</h3>
        <h3 className="text-l">
          Rank {card.level} {card.attribute} {card.race}
        </h3>
        <h3 className="text-l">
          {card.atk} ATK /
          {card.def} DEF
        </h3>
      </div>
    );
  }
  return (
    <div>
        <h3 className="text-l">{card.type}</h3>
        <h3 className="text-l">
          Level {card.level} {card.attribute} {card.race}
        </h3>
        <h3 className="text-l">
          {card.atk} ATK / {card.def} DEF
        </h3>
      </div>
  );
};

export default CardInfo;
