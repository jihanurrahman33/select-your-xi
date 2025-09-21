import React, { use } from "react";
import manIcon from "../../assets/man.png";
import flagImg from "../../assets/country.png";

const AvailablePlayers = ({ playersPromise }) => {
  const playerData = use(playersPromise);
  console.log(playerData);
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      {playerData.map((player) => (
        <div className="card bg-base-100  shadow-sm p-4">
          <figure>
            <img
              className="w-full h-[300px] object-cover"
              src={player.image}
              alt="Shoes"
            />
          </figure>
          <div className="mt-4">
            <div className="flex">
              <img src={manIcon} alt="" />
              <h2 className="card-title ml-2">{player.player_name}</h2>
            </div>
            <div className="flex justify-between mt-4 pb-1 border-gray-400 border-b-2">
              <div className="flex items-center">
                <img className="w-[20px] h-[20px]" src={flagImg} alt="" />
                <span className="ml-2">{player.player_country}</span>
              </div>
              <button className="btn">{player.playing_role}</button>
            </div>
            <div className="flex justify-between font-bold">
              <span>Rating</span>
              <span>{player.rating}</span>
            </div>

            <div className="flex justify-between mt-4">
              <span className="font-bold">{player.batting_style}</span>
              <span>{player.bowling_style}</span>
            </div>

            <div className="card-actions mt-4 flex justify-between items-center">
              <p className="font-bold">Price: ${player.price}</p>
              <button className="btn ">Choose Player</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;
