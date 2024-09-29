import { Link } from "react-router-dom";
import { formatLevelCode, loadThumbnail } from "../utilities/helper";
import { useState } from "react";

const LevelCard = (props) => {
  const [isSpoiler, setIsSpoiler] = useState(props.spoiler || false)

  const click = () => {
    setIsSpoiler(false)
  }

  if (isSpoiler){
    return (
      <div className="card card-compact w-80 bg-base-100 shadow-xl" onClick={click}>
        <figure>
          <img
            src="spoiler.png"
            alt="Title"
          />
        </figure>
        <div className="card-body">

        </div>
      </div>
    );
  } else {
    return (
      <div className="card card-compact w-80 bg-base-100 shadow-xl">
        <figure>
          <img
            src={loadThumbnail(props.levelCode)}
            alt="Title"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.levelName}</h2>
          <div>
          <p>
            Level Code: {formatLevelCode(props.levelCode)}
          </p>
          {props.made_by && <p>Creator: <span className="text-secondary font-bold">{props.made_by}</span></p>}
          {props.note && <p><span className="text-accent font-bold">{props.note}</span></p>}
          </div>
          <div className="card-actions justify-end">
            {props.optional && <div className="badge badge-warning gap-2">Optional</div>}
            {props.choice && <div className="badge badge-info gap-2">Choice</div>}
          </div>
          <div className="card-actions justify-end mt-auto">
            <Link
              to={`/smm2/super_world/${props.levelCode}`}
              className="btn btn-primary"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default LevelCard;
