const CardNameRow = ({ row }) => {
  const badges = [];

  if (row.frameType === "spell") {
    badges.push(<span className="badge bg-emerald-500 text-black">Spell</span>);
    if (row.race !== "Normal") {
      badges.push(
        <span className="badge bg-emerald-500 text-black">{row.race}</span>
      );
    }
  } else if (row.frameType === "trap") {
    badges.push(<span className="badge bg-fuchsia-800 text-white">Trap</span>);
    if (row.race !== "Normal") {
      badges.push(
        <span className="badge bg-fuchsia-800 text-white">{row.race}</span>
      );
    }
  } else {
    const splits = row.frameType.split("_");
    const monsterType = splits[0];
    const isPendulum = splits.length > 1;
    let monsterColor = "red-400";
    let textColor = "text-black";
    if (monsterType === "effect") {
      monsterColor = "orange-400";
    } else if (monsterType === "normal") {
      monsterColor = "yellow-400";
    } else if (monsterType === "ritual") {
      monsterColor = "blue-400";
    } else if (monsterType === "fusion") {
      monsterColor = "purple-800";
    } else if (monsterType === "synchro") {
      monsterColor = "stone-200";
    } else if (monsterType === "xyz") {
      monsterColor = "stone-900";
      textColor = "text-white";
    } else if (monsterType === "link") {
      monsterColor = "blue-800";
    } else if (monsterType === "token") {
      monsterColor = "zinc-600";
      textColor = "text-white";
    } else {
      console.error(`WARN: Invalid Card Type: ${monsterType}.`);
    }
    const types = row.cardType.split(" ");
    if (isPendulum) {
      types.forEach((type) => {
        if (type === "Monster") {
          return;
        }
        badges.push(
          <span
            className={`badge bg-gradient-to-r from-${monsterColor} to-emerald-500 ${textColor}`}
          >
            {type}
          </span>
        );
      });
    } else {
      types.forEach((type) => {
        if (type === "Monster") {
          return;
        }
        badges.push(
          <span className={`badge bg-${monsterColor} ${textColor}`}>
            {type}
          </span>
        );
      });
    }
  }

  return (
    <td className="">
      {row.cardName} {badges}
    </td>
  );
};

export default CardNameRow;
