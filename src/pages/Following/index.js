import React from "react";
//import { FlatList } from "react-native";

import Header from "../../components/Header";
import CategoryList from "../../components/CategoryList";
import ChannelList from "../../components/ChannelList";

import { Wrapper, Container, Main, FollowingText, TitleText } from "./styles";

const Following = () => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>
          <FollowingText>Following</FollowingText>
          <TitleText>Followed Categories</TitleText>
          <CategoryList />

          <TitleText>Live Channels</TitleText>
          <ChannelList />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Following;
