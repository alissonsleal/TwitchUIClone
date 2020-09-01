import styled from "styled-components/native";
import Constants from "expo-constants";

import colors from "../../styles/colors";

const statusBarHeight =
  Platform.OS === "android" ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
  background: ${colors.primary};
  flex: 1;
  padding-top: ${statusBarHeight + "px"};
`;
export const Container = styled.ScrollView`
  padding-left: 14px;
`;

export const Main = styled.View``;

export const FollowingText = styled.Text`
  color: ${colors.black};
  font-family: "roboto_500";
  font-size: 40px;
  margin-top: 10px;
`;

export const TitleText = styled.Text`
  color: ${colors.gray};
  font-family: "roboto_500";
  text-transform: uppercase;
  font-size: 14px;
  margin-top: 42px;
  margin-bottom: 20px;
`;
