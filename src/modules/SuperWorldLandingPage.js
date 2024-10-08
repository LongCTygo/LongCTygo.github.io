import { Helmet } from "react-helmet-async";
import WorldInfo from "../partials/WorldInfo";

const SuperWorldLandingPage = () => {
  let audio = new Audio("/fireworks.ogg");

  const Play = () => {
    audio.play();
  };

  return (
    <div>
      <Helmet prioritizeSeoTags>
        <title>Super LongCT_'s World</title>
        <meta name="description" content="A challenging 29-levels Super World containing only music levels in Mario Maker 2, made by LongCT_."></meta>
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
        <img className="max-h-96" src="super_world_logo.png" alt="Logo" />
      </div>
      <div className="text-center py-5 space-y-2 bg-base-200">
        <h1 className="text-5xl font-extrabold mb-5">
          Bowser has kidnapped Peach, yet again!
        </h1>
        <p className="text-lg">
          This time, however, the path to rescue her is populated with a lot of
          Music challenges.
        </p>
        <p className="text-lg">
          Can Mario pass this gaunlet full of music and jams, and defeat Bowser
          once again?
        </p>
        <p>
          <a className="text-sm link link-primary" href="/">
            Watch the trailer
          </a>
        </p>
        <p>
          <a
            className="text-sm link link-primary"
            href="https://open.spotify.com/playlist/6gXfMBRz7uHhNry7BUt71N?si=gRSJ7KWiSVaWSMVk3iCwVw"
          >
            Listen on Spotify
          </a>
        </p>
      </div>

      <div className="text-center py-5 space-y-2 bg-secondary text-secondary-content">
        <h2 className="text-2xl font-bold">Featuring:</h2>
        <ul className="list-inside list-disc">
          <li className="text-lg">29 Levels</li>
          <li className="text-lg">30+ Songs of Many Genres</li>
          <li className="text-lg">
            Levels with a large variety of themes/gimmicks
          </li>
          <li className="text-lg">Optional Very Challenging Levels</li>
          <li className="text-lg">
            100%{" "}
            <img className="inline-block" src="wideVIBE.webp" alt="VIBE"></img>
          </li>
        </ul>
        <button onClick={Play} class="btn btn-active btn-accent text-xl">
          Play Now: GHG-1BJ-WFG
        </button>
      </div>
      <h1 className="text-center text-5xl font-extrabold py-5">
        Check out the levels!
      </h1>
      <WorldInfo id="longct" />
    </div>
  );
};

export default SuperWorldLandingPage;
