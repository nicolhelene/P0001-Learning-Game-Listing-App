/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import GameByGenreId from "../Components/GameByGenreId";

export default function Home() {
  // eslint-disable-next-line no-undef
  const [allGameList, setAllGameList] = useState();
  const [gameListByGenre, setGameListByGenre] = useState([]);
  useEffect(() => {
    getAllGamesList();
    getGameListByGenreId();
  }, []);

  const getAllGamesList = () => {
    GlobalApi.getAllGames()
      .then((resp) => {
        setAllGameList(resp.data.results);
        setGameListByGenre(resp.data.results); // Corrected from gameListByGenre(resp.data.results);
      })
      .catch((error) => console.error("Error fetching all games:", error));
  };
  const getGameListByGenreId = (id) => {
    GlobalApi.getGameListByGenreId(4).then((resp) => {
      console.log("Game List by Genres", resp.data.results);
    });
  };
  return (
    <div className="grid grid-cols-4 p-5">
      <div className="hidden md:block">
        <GenreList setGenresId={(setGenresId) => getGameListByGenreId} />
      </div>
      <div className="col-span-4 md:col-span-3 col-span-3">
        {allGameList?.length > 0 ? (
          <div>
            <Banner gameBanner={allGameList[0]} />
            <TrendingGames gameList={allGameList} />
            <GameByGenreId gameList={gameListByGenre} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
