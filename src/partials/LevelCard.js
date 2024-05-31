import { Link } from "react-router-dom";
import { formatLevelCode, loadThumbnail } from "../utilities/helper";
const LevelCard = (props) => {


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
        <p>
          Level Code: {formatLevelCode(props.levelCode)}
        </p>
        <div className="card-actions justify-end">
          {props.optional && <div className="badge badge-warning gap-2">Optional</div>}
          {props.choice && <div className="badge badge-info gap-2">Choice</div>}
        </div>
        <div className="card-actions justify-end">
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
};

export default LevelCard;
