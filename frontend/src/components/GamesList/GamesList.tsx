import React, { FC } from "react";
import { List, Typography, Image, Card } from "antd";
import { Link } from "react-router-dom";
import { GAME } from "../../types";
import { formDate } from "../../utils/formDate";

const { Paragraph, Title } = Typography;

interface GamesListProps {
  data: GAME[];
  loading: boolean;
}

const GamesList: FC<GamesListProps> = ({ data, loading }) => {
  return (
    <List
      itemLayout="vertical"
      grid={{ gutter: 8, column: 4, xs: 1, md: 3 }}
      dataSource={data}
      size="small"
      loading={loading}
      renderItem={(item) => (
        <List.Item key={item.id}>
          <Link to={`/game/${item.id}`}>
            <Card hoverable={true}>
            <Image style={{
              marginBottom: '15px'
              }} src={item.thumbnail} alt={item.title} />
              <Title level={3} style={{
                fontSize: '16px',
              }}>{item.title}</Title>
              <Paragraph>
                Дата релиза: {String(formDate(item.release_date))}
              </Paragraph>
              <Paragraph>Издатель: {item.publisher}</Paragraph>
              <Paragraph>Жанр: {item.genre}</Paragraph>
            </Card>
          </Link>
        </List.Item>
      )}
    />
  );
};

export default GamesList;
