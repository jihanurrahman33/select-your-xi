import React, { useState } from "react";
import manIcon from "../../assets/man.png";
import flagImg from "../../assets/country.png";
import { toast } from "react-toastify";
const PlayerCard = ({
  player,
  setAvailableBalance,
  availableBalance,
  purchasedPlayers,
  setpurchasedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelected = () => {
    if (availableBalance >= player.price) {
      setIsSelected(true), setAvailableBalance(availableBalance - player.price);
      if (purchasedPlayers.length === 6) {
        toast("Six players already added");
      } else {
        setpurchasedPlayers([...purchasedPlayers, player]);
      }
    } else {
      toast("Not enough Coins");
      return;
    }
  };
  return (
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
          <button
            disabled={isSelected}
            onClick={handleSelected}
            className="btn "
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
