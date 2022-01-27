import React from "react";
import Header from "../components/Home/Header";
import HomeBtn from "../components/Home/HomeBtn";
import HomeTitle from "../components/Home/HomeTitle";
import NavBar from "../components/Home/NavBar/NavBar";

const HomePage = () => {
  return (
    <Header>
      <NavBar />
      <HomeTitle />
      <HomeBtn />
    </Header>
  );
};

export default HomePage;
