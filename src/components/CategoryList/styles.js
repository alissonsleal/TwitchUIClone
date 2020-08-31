import styled from "styled-components/native";

import colors from "../../styles/colors";

export const Container = styled.View``;

export const List = styled.ScrollView.attrs({
  horizontal: true,
})`
  padding: 0;
`;
export const CategoryContainer = styled.TouchableOpacity`
  margin-right: 10px;
`;
export const CategoryImage = styled.Image`
  width: 100px;
  height: 134px;
`;
export const CategoryName = styled.Text`
  font-family: roboto_700;
  font-size: 14px;
  color: ${colors.black};
  max-width: 100px;
  margin-top: 5px;
`;
export const CategoryStatus = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const RedCircle = styled.View`
  background: ${colors.red};
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin-right: 5px;
`;
export const Info = styled.Text`
  padding-bottom: 2px;
  color: ${colors.gray};
  font-family: roboto_500;
`;
