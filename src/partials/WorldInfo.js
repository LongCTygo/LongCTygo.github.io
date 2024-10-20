import { useEffect, useState } from "react";
import LevelCard from "../partials/LevelCard";
import { formatLevelCode } from "../utilities/helper";
import { Link } from "react-router-dom";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WorldInfo = (props) => {
  const [superWorld, setSuperWorld] = useState({ courses: [] });
  const [shouldNotCallAPI, setShouldNotCallAPI] = useState(
    () => JSON.parse(localStorage.getItem("shouldCallAPI")) || false
  );
  const [loadingStats, setLoadingStats] = useState(false);
  const data = require(`../data/super_world/${props.id}.json`);

  useEffect(() => {
    const fetchSuperWorldData = async (super_world_id) => {
      const fetchCourses = async (super_world_id) => {
        try {
          setLoadingStats(true);
          const response = await fetch(
            `https://tgrcode.com/mm2/super_world/${super_world_id}`
          );
          if (response.ok) {
            const data = await response.json();
            setSuperWorld(data);
          }
        } catch (error) {
          console.error("Error fetching courses data:", error);
        } finally {
          setLoadingStats(false);
        }
      };
      if (!shouldNotCallAPI) {
        fetchCourses(super_world_id);
      } else {
        setSuperWorld({ courses: [] });
      }
    };
    fetchSuperWorldData(data.super_world_id);
  }, [shouldNotCallAPI, data]);

  const getWorldLevelInfo = (code) => {
    let index = superWorld.courses.findIndex(
      (c) => formatLevelCode(c.course_id) === formatLevelCode(code)
    );
    if (index === -1) {
      return null;
    }
    let course = superWorld.courses[index];
    return {
      index: index,
      likes: course.likes,
      plays: course.plays,
      ninjis: superWorld.ninjis[index] || 0,
      difficulty: course.difficulty,
      clear_rate: course.clear_rate_pretty,
      clears: course.clears,
      attempts: course.attempts,
    };
  };

  const handleToggle = () => {
    setShouldNotCallAPI((prev) => {
      const newValue = !prev;
      localStorage.setItem("shouldCallAPI", JSON.stringify(newValue));
      return newValue;
    });
  };

  return (
    <>
      <div className="form-control w-52 mx-5">
        <label className="label cursor-pointer">
          <span className="label-text">Display Stats</span>
          <input
            type="checkbox"
            className="toggle toggle-accent"
            checked={!shouldNotCallAPI}
            onChange={handleToggle}
          />
        </label>
        {loadingStats && (
          <span>
            <span className="loading loading-dots loading-sm"></span> Loading
            Stats...
          </span>
        )}
      </div>
      <div className="mx-5">
        {data.worlds.map((world) => (
          <div className="card w-full overflow-x-auto bg-base-200 mt-4 mb-4 p-4">
            <h1 className="text-4xl font-bold mb-5">{world.world_name}</h1>
            <div className="flex space-x-5">
              {world.courses.map((course) => (
                <LevelCard
                  levelCode={course.levelCode}
                  levelName={course.levelName}
                  made_by={course.made_by}
                  stats={getWorldLevelInfo(course.levelCode)}
                  spoiler={course.spoiler}
                  optional={course.optional}
                  videos={course.videos}
                />
              ))}
            </div>
          </div>
        ))}
        {data.playthroughs && data.playthroughs.length > 0 && (
          <div className="bg-base-100 p-4 rounded-lg mt-6">
            <h2 className="text-3xl font-bold mb-4">Playthroughs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {data.playthroughs.map((playthrough, index) => (
                <div
                  key={index}
                  className="card bg-base-200 shadow-lg p-4 space-y-2 flex flex-col items-center"
                >
                  {/* Circular Profile Picture */}
                  <img
                    src={playthrough.profile_picture}
                    alt={`${playthrough.player}'s profile`}
                    className="rounded-full w-24 h-24 object-cover"
                  />
                  <a href={playthrough.video_link} target="_blank" rel="noreferrer" className="text-xl font-semibold mt-2 link link-hover">
                    {playthrough.player} 
                    <span className="ml-1">{playthrough.type === 0 && (<FontAwesomeIcon icon={faYoutube}/>)}</span>
                  </a>
                  {/* Link as Button */}
                </div>
              ))}
            </div>
          </div>
        )}

        {data.promo && (
          <div className="bg-gradient-to-r from-primary via-secondary to-accent text-base-100 text-center py-4 mt-10 rounded-lg">
            <h2 className="text-2xl font-bold">
              Like this Super World? Also check out{" "}
              <Link className="link" to={`/smm2/${data.promo.to}`}>
                {data.promo.name}
              </Link>
              !
            </h2>
            <p>
              Want a page like this for your own super world? Send me a DM on
              Twitter or Discord!
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default WorldInfo;
