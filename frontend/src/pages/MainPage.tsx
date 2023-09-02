import React, { FC, useCallback, useEffect, useState } from "react";
import { Typography, Select } from "antd";
import GamesList from "../components/GamesList/GamesList";
import useTypedSelector from "../utils/hooks/useTypedSelector";
import { getGames, sortGames } from "../store/actions";
import useAppDispatch from "../utils/hooks/useAppDispatch";
import "./sort.css";
import { removeLocalStorageGames } from "../utils/localStogage/removeLocalStorageGames";

const { Title, Paragraph } = Typography;

const MainPage: FC = () => {
  const games = useTypedSelector((state) => state.games);
  const loading = useTypedSelector((state) => state.loading);
  const error = useTypedSelector((state) => state.error);

  const [platform, filterPlatform] = useState("All Platforms");
  const [genre, filterGenre] = useState("All Genres");
  const [sort, filterSort] = useState("Relevance");

  const dispatch = useAppDispatch();

  const sortByPlatform = (event: string) => {
    filterPlatform(event);
  };

  const sortByGenre = (event: string) => {
    filterGenre(event);
  };

  const sortBySort = (event: string) => {
    filterSort(event);
  };

  const sortGamesBy = useCallback(() => {
    dispatch(sortGames(platform, genre, sort));
  }, [platform, genre, sort]);

  const loadGames = useCallback(() => {
    dispatch(getGames());
  }, []);

  useEffect(() => {
    loadGames();
  }, []);

  useEffect(() => {
    sortGamesBy();
  }, [platform, genre, sort]);

  useEffect(() => {
    removeLocalStorageGames();
  }, []);

  return (
    <div className="content">
      <Title>Games</Title>
      <div className="sort">
        <div className="sort__container">
          <Paragraph
            style={{
              margin: '0',
              marginRight: "15px",
            }}
          >
            Платформа:{" "}
          </Paragraph>
          <Select
            onChange={sortByPlatform}
            style={{ width: 165 }}
            defaultValue={platform}
            options={[
              { value: "pc", label: "Windows (PC)" },
              { value: "browser", label: "Browser (Web)" },
              { value: "games", label: "All Platforms" },
            ]}
          />
        </div>
        <div className="sort__container">
          <Paragraph
            style={{
              margin: '0',
              marginRight: "15px",
            }}
          >
            Жанр:{" "}
          </Paragraph>
          <Select
            onChange={sortByGenre}
            defaultValue={genre}
            style={{ width: 165 }}
            options={[
              { value: "mmo", label: "MMO" },
              { value: "mmorpg", label: "MMORPG" },
              { value: "shooter", label: "Shooter" },
              { value: "strategy", label: "Strategy" },
              { value: "moba", label: "Moba" },
              { value: "games", label: "Card Games" },
              { value: "racing", label: "Racing" },
              { value: "sports", label: "Sports" },
              { value: "social", label: "Social" },
              { value: "fighting", label: "Fighting" },
              { value: "games", label: "All Genres" },
            ]}
          />
        </div>
        <div className="sort__container">
          <Paragraph
            style={{
              margin: '0',
              marginRight: "15px",
            }}
          >
            Сортировка:{" "}
          </Paragraph>
          <Select
            onChange={sortBySort}
            defaultValue={sort}
            style={{ width: 165 }}
            options={[
              { value: "relevance", label: "Relevance" },
              { value: "popularity", label: "Popularity" },
              { value: "release-date", label: "Release Date" },
              { value: "alphabetical", label: "Alphabetical" },
            ]}
          />
        </div>
      </div>
      {error && !loading && <div className="error">Такой страницы не существует</div>}
      {games && <GamesList data={games} loading={loading} />}
    </div>
  );
};

export default MainPage;
