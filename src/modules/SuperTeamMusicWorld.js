import { useEffect, useState } from "react";
import LevelCard from "../partials/LevelCard";
import { Helmet } from "react-helmet";

const SuperWorldLandingPage = () => {
  const [superWorld, setSuperWorld] = useState({ courses: [] });
  const [shouldNotCallAPI, setShouldNotCallAPI] = useState(
    () => JSON.parse(localStorage.getItem("shouldCallAPI")) || false
  );
  const [loadingStats, setLoadingStats] = useState(false)

  useEffect(() => {
    const fetchSuperWorldData = async () => {
      const fetchCourses = async () => {
        try {
          setLoadingStats(true)
          const response = await fetch(
            "https://tgrcode.com/mm2/super_world/4a4d240294b5abe4_20240928213150917649"
          );
          const data = await response.json();
          setSuperWorld(data);
        } catch (error) {
          console.error("Error fetching courses data:", error);
        } finally {
          setLoadingStats(false)
        }
      };
      if (!shouldNotCallAPI){
        fetchCourses();
      } else {
        setSuperWorld({ courses: [] });
      }
      
    };
    fetchSuperWorldData();
  }, [shouldNotCallAPI]);

  const getWorldLevelInfo = (code) => {
    let index = superWorld.courses.findIndex((c) => c.course_id === code);
    if (index === -1) {
      return null;
    }
    let course = superWorld.courses[index];
    return {
      index: index,
      likes: course.likes,
      plays: course.plays,
      ninjis: superWorld.ninjis[index],
      difficulty: course.difficulty
    };
  };

  let audio = new Audio("/fireworks.ogg");

  const Play = () => {
    audio.play();
  };

  const handleToggle = () => {
    setShouldNotCallAPI((prev) => {
      const newValue = !prev;
      localStorage.setItem("shouldCallAPI", JSON.stringify(newValue));
      return newValue;
    });
  };

  return (
    <div>
      <Helmet>
        <title>Super #TeamMusic World</title>
      </Helmet>
      <div
        className="flex justify-center items-center h-96 bg-gradient-to-tr bg-base-300"
        style={{
          backgroundImage: "url('super_world.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <img className="max-h-96" src="super_world_logo.png" alt="Logo"/> */}
      </div>
      <div className="text-center py-5 space-y-2 bg-base-200">
        <h1 className="text-5xl font-extrabold mb-5">
          The Largest Mario Maker 2 Music Collaboration Project!
        </h1>
        <p className="text-lg">
          Every levels have banging musics, created by some of the most talented
          creators.
        </p>
        <p className="text-lg">
          Will you be able to jam through all of the levels to the very end?
        </p>
        <a
          className="text-sm link link-primary"
          href="https://www.youtube.com/playlist?list=PLhL5fiKHw8kRjUIcz26Bmk2OAP8k4E71H"
        >
          Youtube Playlist with all of the songs
        </a>
      </div>

      <div className="text-center py-5 space-y-2 bg-secondary text-secondary-content">
        <h2 className="text-2xl font-bold">Featuring:</h2>
        <ul className="list-inside list-disc">
          <li className="text-lg">39 Levels</li>
          <li className="text-lg">27 Creators</li>
          <li className="text-lg">
            100%{" "}
            <img alt="VIBE" className="inline-block" src="wideVIBE.webp"></img>
          </li>
        </ul>
        <button onClick={Play} class="btn btn-active btn-accent text-xl">
          Play Now: N0N-75X-JNG
        </button>
      </div>
      <h1 className="text-center text-5xl font-extrabold py-5">
        Check out the levels!
      </h1>
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
        {loadingStats && <span><span className="loading loading-dots loading-sm"></span> Loading Stats...</span>}
      </div>
      <div className="mx-5">
        <div className="card w-full overflow-x-auto bg-base-200 mt-4 mb-4 p-4">
          <h1 className="text-4xl font-bold mb-5">World 1</h1>
          <div className="flex space-x-5">
            <LevelCard
              levelCode="M3PHKJQWG"
              levelName="♪TMW♪ 1-1 but it's #TeamMusic!"
              made_by="Barnstormя"
              stats={getWorldLevelInfo("M3PHKJQWG")}
            />
            <LevelCard
              levelCode="5X1FM41RG"
              levelName="♪TMW♪ Kai Highway: Mystical Ninja"
              made_by="Triiskade"
              stats={getWorldLevelInfo("5X1FM41RG")}
            />
            <LevelCard
              levelCode="FBQCNFNNG"
              levelName="♪TMW♪ Metal Cap Maze"
              made_by="shearwater & Barnstormя"
              stats={getWorldLevelInfo("FBQCNFNNG")}
            />
            <LevelCard
              levelCode="WTGKSHN9G"
              levelName="♪TMW♪ In the End"
              made_by="Ryl_MM2"
              stats={getWorldLevelInfo("WTGKSHN9G")}
            />
            <LevelCard
              levelCode="F078TC38G"
              levelName="♪TMW♪ Contra: Jungle"
              made_by="CathyBeef & Barnstormя"
              stats={getWorldLevelInfo("F078TC38G")}
            />
          </div>
        </div>
        <div className="card w-full overflow-x-auto bg-base-200 mt-4 mb-4 p-4">
          <h1 className="text-4xl font-bold mb-5">World 2</h1>
          <div className="flex space-x-5">
            <LevelCard
              levelCode="F0YK2S7MF"
              levelName="♪TMW♪ Wham! Everything She Wants"
              made_by="DocJuice"
              stats={getWorldLevelInfo("F0YK2S7MF")}
            />
            <LevelCard
              levelCode="5XH24Y9HF"
              levelName="♪TMW♪ Wood Man"
              made_by="♪★Miracle★♪"
              stats={getWorldLevelInfo("5XH24Y9HF")}
            />
            <LevelCard
              levelCode="FXKJL3JXG"
              levelName="♪TMW♪ Duckburg: Quackshot"
              made_by="Triiskade"
              stats={getWorldLevelInfo("FXKJL3JXG")}
            />
            <LevelCard
              levelCode="1612WL5RF"
              levelName="♪TMW♪ Blaster Master"
              made_by="Barnstormя"
              stats={getWorldLevelInfo("1612WL5RF")}
            />
            <LevelCard
              levelCode="TD2XYH3JF"
              levelName="♪TMW♪ Wandering Ghosts"
              made_by="Skelthane"
              stats={getWorldLevelInfo("TD2XYH3JF")}
            />
          </div>
        </div>
        <div className="card w-full overflow-x-auto bg-base-200 mt-4 mb-4 p-4">
          <h1 className="text-4xl font-bold mb-5">World 3</h1>
          <div className="flex space-x-5">
            <LevelCard
              levelCode="KLM4J8LSG"
              levelName="♪TMW♪ Asayake"
              made_by="PressPrexx"
              stats={getWorldLevelInfo("KLM4J8LSG")}
            />
            <LevelCard
              levelCode="KLHSMG5HG"
              levelName="♪TMW♪ Dark Circus"
              made_by="GlenReacts & SegaDisneyUniverse"
              stats={getWorldLevelInfo("KLHSMG5HG")}
            />
            <LevelCard
              levelCode="TNSYPHN9G"
              levelName="♪TMW♪ Los Peces en el Rio"
              made_by="Fehwul & SmPiano"
              stats={getWorldLevelInfo("TNSYPHN9G")}
            />
            <LevelCard
              levelCode="TBF6R7J6G"
              levelName="♪TMW♪ Koopahari Desert"
              made_by="Naydropz & Barnstormя"
              stats={getWorldLevelInfo("TBF6R7J6G")}
            />
            <LevelCard
              levelCode="3FQCT811G"
              levelName="♪TMW♪ The Ruins of Sarasaland"
              made_by="SquinkATL"
              stats={getWorldLevelInfo("3FQCT811G")}
            />
          </div>
        </div>
        <div className="card w-full overflow-x-auto bg-base-200 mt-4 mb-4 p-4">
          <h1 className="text-4xl font-bold mb-5">World 4</h1>
          <div className="flex space-x-5">
            <LevelCard
              levelCode="C312QRSDG"
              levelName="♪TMW♪ Factory Inspection"
              made_by="wSacha"
              stats={getWorldLevelInfo("C312QRSDG")}
            />
            <LevelCard
              levelCode="73X9M7J6G"
              levelName="♪TMW♪ My Time in Cerulean City"
              made_by="GlenReacts & SquinkATL"
              stats={getWorldLevelInfo("73X9M7J6G")}
            />
            <LevelCard
              levelCode="RW87PTS1G"
              levelName="♪TMW♪ Dusty Dune Dilemma"
              made_by="Propelyzz & Barnstormя"
              stats={getWorldLevelInfo("RW87PTS1G")}
            />
            <LevelCard
              levelCode="HHGXRQQSF"
              levelName="♪TMW♪ Come Along With Me"
              made_by="SquinkATL"
              stats={getWorldLevelInfo("HHGXRQQSF")}
            />
            <LevelCard
              levelCode="YBLWV2WJF"
              levelName="♪TMW♪ Polyester Girl"
              made_by="Triiskade"
              stats={getWorldLevelInfo("YBLWV2WJF")}
            />
          </div>
        </div>
        <div className="card w-full overflow-x-auto bg-base-200 mt-4 mb-4 p-4">
          <h1 className="text-4xl font-bold mb-5">World 5</h1>
          <div className="flex space-x-5">
            <LevelCard
              levelCode="HFT6KG5HG"
              levelName="♪TMW♪ Rapper's Delight"
              made_by="SpankyNutz & Barnstormя"
              stats={getWorldLevelInfo("HFT6KG5HG")}
            />
            <LevelCard
              levelCode="HRX9R4GYF"
              levelName="♪TMW♪ Scooby Doo"
              made_by="Triiskade"
              stats={getWorldLevelInfo("HRX9R4GYF")}
            />
            <LevelCard
              levelCode="RT7HT5YRF"
              levelName="♪TMW♪ Nitro Rider"
              made_by="Barnstormя"
              stats={getWorldLevelInfo("RT7HT5YRF")}
            />
            <LevelCard
              levelCode="RHVPVWSNF"
              levelName="♪TMW♪ Psycho Killer"
              made_by="SquinkATL & CathyBeef"
              stats={getWorldLevelInfo("RHVPVWSNF")}
            />
            <LevelCard
              levelCode="9B7MXH3JF"
              levelName="♪TMW♪ Vanilla Thunderdome"
              made_by="Donkeymint & Barnstormя"
              stats={getWorldLevelInfo("9B7MXH3JF")}
            />
          </div>
        </div>
        <div className="card w-full overflow-x-auto bg-base-200 mt-4 mb-4 p-4">
          <h1 className="text-4xl font-bold mb-5">World 6</h1>
          <div className="flex space-x-5">
            <LevelCard
              levelCode="98Q7L1YHG"
              levelName="♪TMW♪ Title Screen Music Level"
              made_by="Barnstormя"
              stats={getWorldLevelInfo("98Q7L1YHG")}
            />
            <LevelCard
              levelCode="FN9GJS97G"
              levelName="♪TMW♪ Piranha Lullaby - Mario 64"
              made_by="Triiskade"
              stats={getWorldLevelInfo("FN9GJS97G")}
            />
            <LevelCard
              levelCode="FBXNKJ54G"
              levelName="♪TMW♪ BRODYQUEST"
              made_by="Greenheroes / God Cactus"
              stats={getWorldLevelInfo("FBXNKJ54G")}
            />
            <LevelCard
              levelCode="WHFFM4GYF"
              levelName="♪TMW♪ Got Your Money"
              made_by="Sp3ti & Barnstormя"
              stats={getWorldLevelInfo("WHFFM4GYF")}
            />
            <LevelCard
              levelCode="P2V2P9JTF"
              levelName="♪TMW♪ The Beautiful People"
              made_by="MrAllGamesAllDay & CathyBeef"
              stats={getWorldLevelInfo("P2V2P9JTF")}
            />
          </div>
        </div>
        <div className="card w-full overflow-x-auto bg-base-200 mt-4 mb-4 p-4">
          <h1 className="text-4xl font-bold mb-5">World 7</h1>
          <div className="flex space-x-5">
            <LevelCard
              levelCode="PNYWCK7QG"
              levelName="♪TMW♪ Hyperspace Hop"
              made_by="SaucePowder & Barnstormя"
              stats={getWorldLevelInfo("PNYWCK7QG")}
            />
            <LevelCard
              levelCode="Y2NVDVVMG"
              levelName="♪TMW♪ Creative Exercise"
              made_by="SquinkATL"
              stats={getWorldLevelInfo("Y2NVDVVMG")}
            />
            <LevelCard
              levelCode="7HBTF5JKG"
              levelName="♪TMW♪ Love Dramatic 「かぐや様OP1」"
              made_by="LongCT_"
              stats={getWorldLevelInfo("7HBTF5JKG")}
            />
            <LevelCard
              levelCode="YDW9HBLFG"
              levelName="♪TMW♪ Pipe Land"
              made_by="Loop Hazard & Barnstormя"
              stats={getWorldLevelInfo("YDW9HBLFG")}
            />
            <LevelCard
              levelCode="7TK8JM7CG"
              levelName="♪TMW♪ Price is Right: Splendido!"
              made_by="DTSpies"
              stats={getWorldLevelInfo("7TK8JM7CG")}
            />
          </div>
        </div>
        <div className="card w-full overflow-x-auto bg-base-200 mt-4 mb-4 p-4">
          <h1 className="text-4xl font-bold mb-5">World 8</h1>
          <div className="flex space-x-5">
            <LevelCard
              levelCode="FXCTVSQFF"
              levelName="♪TMW♪ Chainsaw Blood"
              made_by="Cerisse & CathyBeef"
              stats={getWorldLevelInfo("FXCTVSQFF")}
            />
            <LevelCard
              levelCode="RWN7B730H"
              levelName="♪TMW♪ Pain the Universe"
              made_by="Triiskade, Barnstormя & SquinkATL"
              note="Boss Arena inspired by GlenReacts"
              stats={getWorldLevelInfo("RWN7B730H")}
            />
            <LevelCard
              levelCode="HT7QCD5VG"
              levelName="♪TMW♪ Roll Credits"
              made_by="SquinkATL & Barnstormя"
              stats={getWorldLevelInfo("HT7QCD5VG")}
            />
            <LevelCard
              levelCode="HHVXD41RG"
              levelName="♪TMW♪ Chrono Trigger - Boss 2"
              made_by="com_poser"
              spoiler
              stats={getWorldLevelInfo("HHVXD41RG")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperWorldLandingPage;
