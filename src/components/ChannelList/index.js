import React from "react";
import { Text, View } from "react-native";

import data from "./data";

import {
  List,
  StreamContainer,
  LeftContainer,
  ThumbnailImage,
  ViewerContainer,
  RedCircle,
  ViewerCount,
  RightContainer,
  TitleContainer,
  Avatar,
  StreamerName,
  StreamTitle,
  StreamGame,
  StreamTag,
  TagText,
} from "./styles";

const ChannelList = () => {
  const StreamItem = ({ item }) => (
    <List>
      <StreamContainer>
        <LeftContainer>
          <ThumbnailImage source={item.source}></ThumbnailImage>
          <ViewerContainer>
            <RedCircle />
            <ViewerCount>
              {Math.floor(Math.random() * Math.floor(60)) +
                "." +
                Math.floor(Math.random() * Math.floor(9)) +
                "K"}
            </ViewerCount>
          </ViewerContainer>
        </LeftContainer>

        <RightContainer>
          <TitleContainer>
            <Avatar />
            <StreamerName numberOfLines={1}>{item.name}</StreamerName>
          </TitleContainer>

          <StreamTitle numberOfLines={1}>Stream Title goes Here</StreamTitle>
          <StreamGame>{item.game}</StreamGame>
          <StreamTag>
            <TagText>English</TagText>
          </StreamTag>
        </RightContainer>
      </StreamContainer>
    </List>
  );

  return (
    <List>
      <Text></Text>
      {data.map((item) => (
        <StreamItem key={item.name} item={item} />
      ))}
    </List>
  );
};

export default ChannelList;
