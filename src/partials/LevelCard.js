import { Link } from "react-router-dom";
import { formatLevelCode, loadThumbnail } from "../utilities/helper";
import { useState } from "react";

const LevelCard = (props) => {
  const [isSpoiler, setIsSpoiler] = useState(props.spoiler || false);
  

  const click = () => {
    setIsSpoiler(false);
  };

  const difficulty = props.stats ? props.stats.difficulty : -1

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
            <p>Level Code: <span className="font-bold">{formatLevelCode(props.levelCode)}</span></p>
            {props.made_by && (
              <p>
                Creator:{" "}
                <span className="text-secondary font-bold">
                  {props.made_by}
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
                <span>Difficulty:&nbsp;
                  {difficulty === 0 && <span className="text-success font-bold">Easy</span> }
                  {difficulty === 1 && <span className="text-info font-bold">Normal</span> }
                  {difficulty === 2 && <span className="text-warning font-bold">Expert</span> }
                  {difficulty === 3 && <span className="text-error font-bold">Super Expert</span> }
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
                  <div className="stat-value text-primary">{props.stats.likes}</div>
                </div>
                <div className="stat place-items-center">
                  <div className="stat-title text-secondary font-bold">Ninjis</div>
                  <div className="stat-value text-secondary">{props.stats.ninjis}</div>
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
