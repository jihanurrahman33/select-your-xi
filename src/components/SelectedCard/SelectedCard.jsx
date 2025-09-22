import React from "react";
import deleteIcon from "../../assets/delete.png";
const SelectedCard = ({ player, removePlayer }) => {
  const handleRemove = () => {
    removePlayer(player);
  };
  return (
    <div className="border-2 border-gray-400 p-3 rounded-xl mt-2 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src={player.image}
          className="h-[50px] w-[50px] rounded-xl"
          alt=""
        />
        <div className="ml-2">
          <h1>{player.player_name}</h1>
          <p className="text-xs">{player.playing_role}</p>
        </div>
      </div>
      <div onClick={handleRemove}>
        <img src={deleteIcon} alt="" />
      </div>
    </div>
  );
};

export default SelectedCard;
