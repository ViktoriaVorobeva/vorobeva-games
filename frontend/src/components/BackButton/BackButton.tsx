import React, { FC, useCallback } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

import { Pagesroutes } from "../../utils/routers";

export const BackButton: FC = () => {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate(Pagesroutes.MAIN);
  }, []);

  return (
    <Button
      onClick={onClick}
      type="primary"
      size="large"
      icon={<ArrowLeftOutlined />}
    >
      Back to games
    </Button>
  );
};
