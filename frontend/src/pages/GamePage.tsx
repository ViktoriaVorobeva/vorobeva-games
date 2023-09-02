import React, { FC, useEffect, useState } from "react";
import { GAME } from "../types";
import { useParams } from "react-router-dom";
import { Card, Image, Typography, Carousel, List } from "antd";
import useTypedSelector from "../utils/hooks/useTypedSelector";
import useAppDispatch from "../utils/hooks/useAppDispatch";
import { getGame } from "../store/actions";
import { formDate } from "../utils/formDate";
import { BackButton } from "../components/BackButton/BackButton";
import { updateLocalStorageGames } from "../utils/localStogage/updateLocalStorageGames";
import { useLocalStorageGames } from "../utils/localStogage/useLocalStorageGames";
import "./game.css";

const { Paragraph, Title } = Typography;

const GamePage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { cashedGames, currentCashGame, cashed } = useLocalStorageGames(id);
  const loading = useTypedSelector((state) => state.loading);
  const error = useTypedSelector((state) => state.error);
  const game = useTypedSelector((state) => state.currentGame);

  const dispatch = useAppDispatch();

  const [currentGame, setCurrentGame] = useState(currentCashGame || game);

  useEffect(() => {
    if (cashed) {
      dispatch(getGame(id!));
    }
  }, []);

  useEffect(() => {
    const data: GAME | null = game ? game : currentCashGame;
    data && updateLocalStorageGames(cashedGames, id!, data);
    setCurrentGame(game || currentCashGame || undefined);
  }, [game, currentCashGame]);

  const screenshoots = currentGame?.screenshots?.map((screenshot) => (
    <Image src={screenshot.image} alt={currentGame?.title}></Image>
  ));

  return (
    <div className="content">
      <BackButton />
      {error && !loading && (
        <div className="error">Такой страницы не существует</div>
      )}
      {currentGame && (
        <Card title={currentGame?.title} loading={loading}>
          <div className="game__container">
            <div>
              <Paragraph>
                Дата релиза: {String(formDate(currentGame?.release_date ?? ""))}
              </Paragraph>
              <Paragraph>Издатель: {currentGame?.publisher}</Paragraph>
              <Paragraph>Разработчик: {currentGame?.developer}</Paragraph>
              <Paragraph>Жанр: {currentGame?.genre}</Paragraph>
            </div>
            <Image src={currentGame?.thumbnail} alt={currentGame?.title} />
          </div>
          <Title level={4}>Минимальные системные требования: </Title>
          <List>
            <List.Item>
              ОС: {currentGame?.minimum_system_requirements?.os ?? "-"}
            </List.Item>
            <List.Item>
              Процессор:{" "}
              {currentGame?.minimum_system_requirements?.processor ?? "-"}
            </List.Item>
            <List.Item>
              Память: {currentGame?.minimum_system_requirements?.memory ?? "-"}
            </List.Item>
            <List.Item>
              Графический процессор:{" "}
              {currentGame?.minimum_system_requirements?.graphics ?? "-"}
            </List.Item>
            <List.Item>
              Хранилище:{" "}
              {currentGame?.minimum_system_requirements?.storage ?? "-"}
            </List.Item>
          </List>
          <Carousel>{screenshoots}</Carousel>
        </Card>
      )}
    </div>
  );
};

export default GamePage;
