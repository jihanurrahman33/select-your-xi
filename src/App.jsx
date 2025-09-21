import { Suspense } from "react";
import "./App.css";

import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import NavBar from "./components/NavBar/NavBar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import HeroBanner from "./components/HeroBanner/HeroBanner";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const playersPromise = fetchPlayers();
  return (
    <>
      <NavBar></NavBar>
      <HeroBanner></HeroBanner>

      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>

      <SelectedPlayers></SelectedPlayers>
    </>
  );
}

export default App;
