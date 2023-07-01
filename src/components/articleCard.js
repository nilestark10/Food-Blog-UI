import {
  Box,
  Button,
  Card,
  CardBody,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import "./articleCard.css";

const ArticleCard = (props) => {
  return (
    <Card className="article-card" variant="outline">
      <CardBody>
        <Stack className="article-card-stack">
          <Image
            src={props.imageAddress}
            alt={props.imageAlt}
            className="article-image"
          />
          <Box className="text-box">
            <Text className="article-header">{props.headerText}</Text>
            <Text className="article-sub">{props.subText}</Text>
            <Button className="read-more">Read More</Button>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ArticleCard;
