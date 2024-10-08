import { Helmet } from "react-helmet";
import WorldInfo from "../partials/WorldInfo";

const SuperWorldLandingPage = () => {
  let audio = new Audio("/fireworks.ogg");

  const Play = () => {
    audio.play();
  };

  return (
    <div>
      <Helmet>
        <title>Super #TeamMusic World</title>
      </Helmet>
      <div
        className="flex justify-center items-center h-96 bg-gradient-to-tr bg-base-300"
        style={{
          backgroundImage: "url('super_world_stmw.jpg')",
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
        <p>
          <a
            className="text-sm link link-primary"
            href="https://youtu.be/mfMfYVQkOog"
          >
            Watch the trailer
          </a>
        </p>
        <p>
          <a
            className="text-sm link link-primary"
            href="https://www.youtube.com/playlist?list=PLhL5fiKHw8kRjUIcz26Bmk2OAP8k4E71H"
          >
            Youtube Playlist with all of the songs
          </a>
        </p>
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
      <WorldInfo id="stmw" />
    </div>
  );
};

export default SuperWorldLandingPage;
