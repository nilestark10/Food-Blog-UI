import { Box, Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import "./App.css";
import ExploreNow from "./pages/exploreNow";
import AboutUs from "./pages/aboutUs";
import LatestArticles from "./pages/latestArticles";
import ContactUs from "./pages/contactUs";

function App() {
  return (
    <div className="App">
      <ExploreNow />
      <AboutUs />
      <LatestArticles />
      <ContactUs />
    </div>
  );
}

export default App;
