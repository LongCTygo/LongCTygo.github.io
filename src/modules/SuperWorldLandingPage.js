import LevelCard from "../partials/LevelCard";
import { Helmet } from "react-helmet";

const SuperWorldLandingPage = () => {

  let audio = new Audio("/fireworks.ogg")

  const Play = () => {
    audio.play()
  }

  return (
    <div>
      <Helmet>
        <title>Super LongCT_'s World</title>
      </Helmet>
      <div className="flex justify-center items-center h-96 bg-gradient-to-tr bg-base-300" style={{
        backgroundImage: "url('super_world.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}>
        <img className="max-h-96" src="super_world_logo.png" alt="Logo"/>
      </div>
      <div className="text-center py-5 space-y-2 bg-base-200">
      <h1 className="text-5xl font-extrabold mb-5">Bowser has kidnapped Peach, yet again!</h1>
        <p className="text-lg">This time, however, the path to rescue her is populated with a lot of Music challenges.</p>
        <p className="text-lg">Can Mario pass this gaunlet full of music and jams, and defeat Bowser once again?</p>
      </div>
      
      <div className="text-center py-5 space-y-2 bg-secondary text-secondary-content">
        <h2 className="text-2xl font-bold">Featuring:</h2>
        <ul className="list-inside list-disc">
          <li className="text-lg">29 Levels</li>
          <li className="text-lg">30+ Songs of Many Genres</li>
          <li className="text-lg">Levels with a large variety of themes/gimmicks</li>
          <li className="text-lg">Optional Very Challenging Levels</li>
          <li className="text-lg">100% <img className="inline-block" src="wideVIBE.webp"></img></li>
        </ul>
        <button onClick={Play} class="btn btn-active btn-accent text-xl">Play Now: GHG-1BJ-WFG</button>
      </div>
      <h1 className="text-center text-5xl font-extrabold py-5">Check out the levels!</h1>
      <div className="mx-5">
      <div className="card w-full overflow-x-auto bg-base-200 mt-4 mb-4 p-4">
        <h1 className="text-4xl font-bold mb-5">World 1</h1>
        <div className="flex space-x-5">
          <LevelCard levelCode="000000000" levelName="[Intro Auto Level]" />
          <LevelCard levelCode="B5NM4QSDF" levelName="♪ GEMN - Fatale 「【推しの子】 OP2」 ♪" />
          <LevelCard
            levelCode="F2BWG7C1G"
            levelName="♪ Dua Lipa - Hallucinate ♪"
            optional
          />
          <LevelCard
            levelCode="LTS9LTY1G"
            levelName="♪ Yukopi - 強風オールバック ♪"
          />
        </div>
      </div>
      <div className="card w-full overflow-x-auto bg-base-200 mt-4 mb-4 p-4 ">
        <h1 className="text-4xl font-bold mb-5">World 2</h1>
        <div className="flex space-x-5 ">
          <LevelCard
            levelCode="M4KHW47VF"
            levelName="♪ ABBA - Money, Money, Money ♪"
          />
          <LevelCard levelCode="914QY5KWF" levelName="♪ Toadette The First ♪" />
          <LevelCard
            levelCode="W34RPF4PF"
            levelName="♪ Wrecking Ball - Miley Cyrus ♪"
            optional
          />
          <LevelCard
            levelCode="WQL46S3PG"
            levelName="♪ Mario Grazes The Roof ♪ #TJ"
          />
        </div>
      </div>
      <div className="card w-full overflow-x-auto bg-base-200 mt-4 mb-4 p-4 ">
        <h1 className="text-4xl font-bold mb-5">World 3</h1>
        <div className="flex space-x-5 ">
          <LevelCard
            levelCode="82T4TV8QG"
            levelName="♪  Parks and Recreation ♪ v2"
          />
          <LevelCard
            levelCode="45T4NYSKG"
            levelName="♪ Cake By The Ocean - DNCE ♪"
          />
          <LevelCard
            levelCode="00XD3Q1WF"
            levelName="♪ Taylor Swift - Lavender Haze ♪"
            optional
          />
          <LevelCard levelCode="YP56SL3TF" levelName="♪ Red - Taylor Swift ♪" />
        </div>
      </div>
      <div className="card w-full overflow-x-auto bg-base-200 mt-4 mb-4 p-4 ">
        <h1 className="text-4xl font-bold mb-5">World 4</h1>
        <div className="flex space-x-5 ">
          <LevelCard levelCode="0D8NRX8PF" levelName="♪ Meitantei Conan 「名探偵コナン」 ♪" />
          <LevelCard levelCode="SVMKMSF2G" levelName="♪ Love Is an Open Door ♪"/>
          <LevelCard levelCode="VPD9BGS1H" levelName="♪ Spiritfarer - End Titles ♪" optional/>
          <LevelCard levelCode="K61QV95SF" levelName="♪ シカ部 - シカ色デイズ 「しかのこのこのここしたんたん」♪"/>
        </div>
      </div>
      <div className="card w-full overflow-x-auto bg-base-200 mt-4 mb-4 p-4 ">
        <h1 className="text-4xl font-bold mb-5">World 5</h1>
        <div className="flex space-x-5 ">
          <LevelCard levelCode="WMKG3B72H" levelName="♪ New Soup U Deluxe ♪ #TeamJamp" />
          <LevelCard levelCode="P2VGRKHDG" levelName="♪ ヨルシカ - 晴る (Sunny) ♪" />
          <LevelCard levelCode="MX723K41G" levelName="♪Stronger - Kelly Clarkson♪ #TS" optional/>
          <LevelCard levelCode="SL5XR02FF" levelName="♪ The Level That Doesn't End ♪" />
        </div>
      </div>
      <div className="card w-full overflow-x-auto bg-base-200 mt-4 mb-4 p-4 ">
        <h1 className="text-4xl font-bold mb-5">World 6</h1>
        <div className="flex space-x-5 ">
          <LevelCard levelCode="YRQNB3NWG" levelName="♪Moonlight Densetsu 「ムーンライト伝説」♪" />
          <LevelCard levelCode="6M6GPY9FG" levelName="♪ Lady Gaga - Bad Romance ♪" />
          <LevelCard levelCode="SJNJCRFHG" levelName="♪ Call Me Maybe ♪ #TS #TM" optional/>
          <LevelCard levelCode="000000000" levelName="[Boss]" />
        </div>
      </div>
      <div className="card w-full overflow-x-auto bg-base-200 mt-4 mb-4 p-4 ">
        <h1 className="text-4xl font-bold mb-5">World 7</h1>
        <div className="flex space-x-5 ">
        <LevelCard levelCode="BMH128FFF" levelName="♪ iCarly's Theme Song ♪ [Troll]" optional/>
        <LevelCard levelCode="NGLYXB1SF" levelName="♪ Happy Birthday ♪ #TM" optional/>
        <LevelCard levelCode="000000000" levelName="[This Level Is On TeamMusic]" optional/>
        <LevelCard levelCode="XGX15PDJF" levelName="♪ Time Flows Ever Onward ♪" optional/>
        <LevelCard levelCode="000000000" levelName="[Credits Level]" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default SuperWorldLandingPage;
