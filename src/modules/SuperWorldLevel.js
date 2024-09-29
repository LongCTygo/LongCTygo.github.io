import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { formatLevelCode, loadEntireThumbnail } from "../utilities/helper";

const SuperWorldLevel = () => {
  const { id } = useParams();
  const data = require("../data/levels.json");
  const level = data[id];
  if (level == null) {
    return (
      <div>
        <Helmet>
          <title>Level Not Found</title>
        </Helmet>
        This level's info is not available. Blame the creator.
      </div>
    );
  }
  return (
    <div className="">
      <Helmet>
        <title>{level.levelName}</title>
      </Helmet>
      <img
        className="w-full blur-sm"
        alt="Level Thumbnail"
        src={loadEntireThumbnail(id)}
      />
      <div className="text-center">
        <h1 className="text-3xl font-bold pt-5">{level.levelName}</h1>
        <h2 className="text-2xl font-bold text-secondary pt-5">{formatLevelCode(id)}</h2>
        <h2 className="text-2xl font-bold text-secondary">
          {level.worldLevelName}
        </h2>
        <div className="divider"></div>
        <h2 className="text-2xl font-bold">Links</h2>
        <div>
          <a
            className="link link-accent"
            target="_blank"
            rel="noreferrer"
            href={level.links.songSpotify}
          >
            Listen on Spotify
          </a>
        </div>
        <div>
          <a
            className="link link-accent"
            target="_blank"
            rel="noreferrer"
            href={level.links.songYoutube}
          >
            Listen on Youtube
          </a>
        </div>
        <div>
          <a
            className="link link-accent"
            target="_blank"
            rel="noreferrer"
            href={level.links.clearVideo}
          >
            Watch the clear video
          </a>
        </div>
        <div>
          <a
            className="link link-accent"
            target="_blank"
            rel="noreferrer"
            href={`https://smm2.wizul.us/smm2/level/${id}`}
          >
            View on Wizulus's viewer
          </a>
        </div>
        <div className="pt-2">
          <a
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
            href={level.links.meme}
          >
            Click for Funny video
          </a>
        </div>
      </div>
      <div className="divider"></div>
      <div className="mr-20 ml-20">
        <h2 className="text-2xl font-bold text-center pb-5">Level Info</h2>
        <p className="text-lg">
          <span className="font-bold">Course Style: </span>
          <span className="text-secondary">{level.levelInfo.style}</span>
        </p>
        <p className="text-lg">
          <span className="font-bold">Course Theme: </span>
          <span className="text-secondary">{level.levelInfo.theme}</span>
        </p>
        <p className="text-lg">
          <span className="font-bold">Gimmick: </span>
          <span className="text-secondary">{level.levelInfo.gimmick}</span>
        </p>
        {level.levelInfo.optional === 0 && (
          <div className="badge badge-error gap-5 ">Mandatory</div>
        )}
        {level.levelInfo.optional === 1 && (
          <div className="badge badge-warning gap-5">Optional</div>
        )}
        {level.levelInfo.optional === 2 && (
          <div className="badge badge-info gap-5 ">Branching Path</div>
        )}
        {level.levelInfo.teamMusic && (
          <div className="badge badge-success gap-5">#TeamMusic Certified</div>
        )}
      </div>
      <div className="divider"></div>
      <div className="mr-20 ml-20">
        <h2 className="text-2xl font-bold text-center">Commentary</h2>
        {level.commentary.map((line) => (
          <p className="pt-2">{line}</p>
        ))}
      </div>
      <div className="divider"></div>
      <div className="mr-20 ml-20">
        <h2 className="text-2xl font-bold text-center">Spoilers</h2>
        {level.spoilers.length > 0 && level.spoilers.map((spoiler) => (
          <div>
            <h3 className="text-xl font-bold pb-3">{spoiler.name}</h3>
            {spoiler.hint && (
              <details>
                <summary className="text-secondary">Hint!</summary>
                {spoiler.hint}
              </details>
            )}
            <details>
              <summary className="text-secondary">Solution</summary>
              {spoiler.content}
            </details>
          </div>
        ))}
        {level.spoilers.length === 0 && (<p>There are no spoilers. Or are there?</p>)}
      </div>
    </div>
  );
};

export default SuperWorldLevel;
