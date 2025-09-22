import { Suspense, useState } from "react";
import "./App.css";

import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import NavBar from "./components/NavBar/NavBar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

const playersPromise = fetchPlayers();
function App() {
  const [toggle, setToggle] = useState(true);
  const [purchasedPlayers, setpurchasedPlayers] = useState([]);
  const [availableBalance, setAvailableBalance] = useState(60000000);

  const removePlayer = (p) => {
    const filteredData = purchasedPlayers.filter(
      (ply) => ply.player_name !== p.player_name
    );
    setpurchasedPlayers(filteredData);
    setAvailableBalance(availableBalance + p.price);
  };

  return (
    <>
      <NavBar availableBalance={availableBalance}></NavBar>
      <HeroBanner></HeroBanner>
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl">
          {toggle
            ? "Available Players"
            : `Selected Player (${purchasedPlayers.length}/6)`}
        </h1>
        <div className="font-bold">
          <button
            onClick={() => setToggle(true)}
            className={`py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 ${
              toggle === true ? "bg-[#E7FE29]" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`p-3 border-1 border-gray-400 rounded-r-2xl border-l-0  ${
              toggle === false ? "bg-[#E7FE29]" : ""
            }`}
          >
            Selected <span>{purchasedPlayers.length}</span>
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <AvailablePlayers
            purchasedPlayers={purchasedPlayers}
            setpurchasedPlayers={setpurchasedPlayers}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playersPromise={playersPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          removePlayer={removePlayer}
          purchasedPlayers={purchasedPlayers}
        ></SelectedPlayers>
      )}

      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
