const CardInfo = ({ card }) => {
  //Banlist
  const banlist = [
    ["ban_tcg", "TCG"],
    ["ban_ocg", "OCG"],
  ];
  const banStatus = [];
  banlist.forEach((ban) => {
    const o = ban[0];
    const print = ban[1];
    if (
      card.banlist_info === undefined ||
      card.banlist_info === null ||
      card.banlist_info[o] === undefined
    ) {
      banStatus.push(
        <span className="badge bg-green-500">{print} Unlimited</span>
      );
    } else if (card.banlist_info[o] === "Semi-Limited") {
      banStatus.push(
        <span className="badge bg-yellow-300">{print} Semi-Limited</span>
      );
    } else if (card.banlist_info[o] === "Limited") {
      banStatus.push(
        <span className="badge bg-orange-500">{print} Limited</span>
      );
    } else if (card.banlist_info[o] === "Banned") {
      banStatus.push(
        <span className="badge bg-red-500">{print} Forbidden</span>
      );
    }
  });

  if (card.frameType === "link") {
    return (
      <div>
        <h3 className="text-l">{card.type}</h3>
        <h3 className="text-l">
          LINK-{card.linkval} {card.attribute} {card.race}
        </h3>
        <h3>{card.atk} ATK</h3>
        <div>{banStatus}</div>
      </div>
    );
  } else if ((card.frameType === "xyz") | (card.frameType === "xyz_pendulum")) {
    return (
      <div>
        <h3 className="text-l">{card.type}</h3>
        <h3 className="text-l">
          Rank {card.level} {card.attribute} {card.race}{" "}
          {card.scale === undefined ? "" : `| Scale ${card.scale}`}
        </h3>
        <h3 className="text-l">
          {card.atk} ATK / {card.def} DEF
        </h3>
        <div>{banStatus}</div>
      </div>
    );
  } else if (card.frameType === "spell" || card.frameType === "trap") {
    return (
      <div>
        <h3 className="text-l">
          {card.race} {card.type}
        </h3>
        <div>{banStatus}</div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-l">{card.type}</h3>
      <h3 className="text-l">
        Level {card.level} {card.attribute} {card.race}{" "}
        {card.scale === undefined ? "" : `| Scale ${card.scale}`}
      </h3>
      <h3 className="text-l">
        {card.atk} ATK / {card.def} DEF
      </h3>
      <div>{banStatus}</div>
    </div>
  );
};

export default CardInfo;
