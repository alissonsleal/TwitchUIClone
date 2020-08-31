import React from "react";
import { Text } from "react-native";

import Header from "../../components/Header";

import { Wrapper, Container, Main } from "./styles";

const Following = () => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Main />
      </Container>
    </Wrapper>
  );
};

export default Following;
