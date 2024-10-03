import { Link } from "react-router-dom";
import { formatLevelCode, loadThumbnail } from "../utilities/helper";
import { useState } from "react";

const LevelCard = (props) => {
  const [isSpoiler, setIsSpoiler] = useState(props.spoiler || false);

  const click = () => {
    setIsSpoiler(false);
  };

  const getMadeBy = (made_by) => {
    if (made_by.length === 0) {
      return <></>;
    }
    if (made_by.length === 1) {
      return getCreatorSection(made_by[0]);
    }
    if (made_by.length === 2) {
      return (
        <>
          {getCreatorSection(made_by[0])} & {getCreatorSection(made_by[1])}
        </>
      );
    }
    const lastCreator = made_by[made_by.length - 1];
    const otherCreators = made_by.slice(0, -1);
    return (
      <>
        {otherCreators.map((creator, index) => (
          <span key={index}>
            {getCreatorSection(creator)}
            {index < otherCreators.length - 1 ? ", " : " & "}
          </span>
        ))}
        {getCreatorSection(lastCreator)}
      </>
    );
  };

  const getCreatorSection = (creator) => {
    if (creator.creator_code) {
      return (
        <span
          className="tooltip tooltip-primary"
          data-tip={creator.creator_code}
        >
          {creator.creator_name}
        </span>
      );
    }
    return <span>{creator.creator_name}</span>;
  };

  const difficulty = props.stats ? props.stats.difficulty : -1;

  if (isSpoiler) {
    return (
      <div
        className="card card-compact w-80 bg-base-100 shadow-xl"
        onClick={click}
      >
        <figure>
          <img src="spoiler.png" alt="Title" />
        </figure>
        <div className="card-body"></div>
      </div>
    );
  } else {
    return (
      <div className="card card-compact w-80 bg-base-100 shadow-xl">
        <figure>
          <img src={loadThumbnail(props.levelCode)} alt="Title" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.levelName}</h2>
          <div>
            <p>
              Level Code:&nbsp;
              <a href={`https://smm2.wizul.us/smm2/course/${props.levelCode}`} target="_blank" rel="noreferrer" className="font-bold hover:underline">
                {formatLevelCode(props.levelCode)}
              </a>
            </p>
            {props.made_by && (
              <p>
                Creator:&nbsp;
                <span className="text-secondary font-bold">
                  {getMadeBy(props.made_by)}
                </span>
              </p>
            )}
            {props.note && (
              <p>
                <span className="text-accent font-bold">{props.note}</span>
              </p>
            )}
            {difficulty > -1 && (
              <p>
                <span>
                  Difficulty:&nbsp;
                  {difficulty === 0 && (
                    <span className="text-success font-bold tooltip tooltip-success" data-tip={`${props.stats.clear_rate} (${props.stats.clears}/${props.stats.attempts})`}>Easy</span>
                  )}
                  {difficulty === 1 && (
                    <span className="text-info font-bold tooltip tooltip-info" data-tip={`${props.stats.clear_rate} (${props.stats.clears}/${props.stats.attempts})`}>Normal</span>
                  )}
                  {difficulty === 2 && (
                    <span className="text-warning font-bold tooltip tooltip-warning" data-tip={`${props.stats.clear_rate} (${props.stats.clears}/${props.stats.attempts})`}>Expert</span>
                  )}
                  {difficulty === 3 && (
                    <span className="text-error font-bold tooltip tooltip-error" data-tip={`${props.stats.clear_rate} (${props.stats.clears}/${props.stats.attempts})`}>Super Expert</span>
                  )}
                </span>
              </p>
            )}
          </div>
          <div className="card-actions justify-end mt-auto mb-0">
            {props.optional && (
              <div className="badge badge-warning gap-2">Optional</div>
            )}
            {props.choice && (
              <div className="badge badge-info gap-2">Choice</div>
            )}
          </div>
          <div className="card-actions justify-center mt-auto">
            {props.showButton && (
              <Link
                to={`/smm2/super_world/${props.levelCode}`}
                className="btn btn-primary"
              >
                See Details
              </Link>
            )}
            {props.stats && (
              <div className="stats shadow">
                <div className="stat place-items-center">
                  <div className="stat-title text-primary font-bold">Likes</div>
                  <div className="stat-value text-primary">
                    {props.stats.likes}
                  </div>
                </div>
                <div className="stat place-items-center">
                  <div className="stat-title text-secondary font-bold">
                    Ninjis
                  </div>
                  <div className="stat-value text-secondary">
                    {props.stats.ninjis}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default LevelCard;
