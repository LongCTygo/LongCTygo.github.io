import { useEffect, useState } from "react";
import LevelCard from "../partials/LevelCard";
import { formatLevelCode } from "../utilities/helper";

const WorldInfo = (props) => {
  const [superWorld, setSuperWorld] = useState({ courses: [] });
  const [shouldNotCallAPI, setShouldNotCallAPI] = useState(
    () => JSON.parse(localStorage.getItem("shouldCallAPI")) || false
  );
  const [loadingStats, setLoadingStats] = useState(false);
  const data = require(`../data/super_world/${props.id}.json`)

  useEffect(() => {
    const fetchSuperWorldData = async (super_world_id) => {
      const fetchCourses = async (super_world_id) => {
        try {
          setLoadingStats(true);
          const response = await fetch(
            `https://tgrcode.com/mm2/super_world/${super_world_id}`
          );
          if (response.ok){
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
    let index = superWorld.courses.findIndex((c) => formatLevelCode(c.course_id) === formatLevelCode(code));
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
      attempts: course.attempts
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
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WorldInfo
