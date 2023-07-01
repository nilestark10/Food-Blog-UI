import { Box, Button, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import "./latestArticles.css";
import ArticleCard from "../components/articleCard";
import grilledTomatoes from "../images/grilledTomatoes.png";
import snackForTravel from "../images/snackForTravel.png";
import postWorkOutRecepie from "../images/postWorkoutRecepie.png";
import grilledCorn from "../images/grilledCorn.png";
import crunchWrap from "../images/crunchWrap.png";
import brocolli from "../images/broccoli.png";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const LatestArticles = () => {
  //   const pageNumber = 1;
  const [pageNumber, setPageNumber] = useState(1);
  function nextPage() {
    if (pageNumber !== 2) setPageNumber(pageNumber + 1);
  }
  const prevPage = () => {
    if (pageNumber !== 1) setPageNumber(pageNumber - 1);
  };

  const FirstPage = (
    <>
      <ArticleCard
        imageAddress={grilledTomatoes}
        alt="grilled Tomatoes"
        headerText="Grilled  Tomatoes at Home"
        subText="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
      />
      <ArticleCard
        imageAddress={snackForTravel}
        alt="snack for travel"
        headerText="Snacks for Travel"
        subText="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
      />
      <ArticleCard
        imageAddress={postWorkOutRecepie}
        alt="post-workout recepie"
        headerText="Post-workout Recipes"
        subText="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
      />
    </>
  );

  const SecondPage = (
    <>
      <ArticleCard
        imageAddress={grilledCorn}
        alt="grilled Corn"
        headerText="How To Grill Corn"
        subText="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
      />
      <ArticleCard
        imageAddress={crunchWrap}
        alt="Crunchwrap Supreme"
        headerText="Crunchwrap Supreme"
        subText="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
      />
      <ArticleCard
        imageAddress={brocolli}
        alt="Broccoli Cheese Soup"
        headerText="Broccoli Cheese Soup"
        subText="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
      />
    </>
  );
  return (
    <Box className="latest-article">
      <Text className="header-text">Latest Articles</Text>
      <HStack className="blog-stack">
        {pageNumber === 1 ? FirstPage : SecondPage}
      </HStack>
      <HStack>
        <Box className="actions">
          <Button className="action-buttons" onClick={prevPage}>
            <ChevronLeftIcon />
          </Button>
          {pageNumber}/2
          <Button className="action-buttons" onClick={nextPage}>
            <ChevronRightIcon />
          </Button>
        </Box>
      </HStack>
    </Box>
  );
};

export default LatestArticles;
