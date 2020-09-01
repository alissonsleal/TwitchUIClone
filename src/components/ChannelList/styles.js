import styled from "styled-components/native";

import colors from "../../styles/colors";

export const List = styled.SafeAreaView`
  padding: 0;
  margin-top: -20px;
  /*   background: ${colors.purple};
 */
`;

export const StreamContainer = styled.TouchableOpacity`
  height: 140px;
  flex-direction: row;
`;
export const LeftContainer = styled.View`
  background: ${colors.black};
  width: 128px;
  height: 72px;
  flex-direction: column;
  margin: 10px 10px 10px 0;
`;
export const ThumbnailImage = styled.Image`
  width: 128px;
  height: 72px;
  resize-mode: stretch;
`;

export const ViewerContainer = styled.View`
  position: absolute;
  bottom: 5px;
  left: 5px;
  flex-direction: row;
  align-items: center;
`;

export const RedCircle = styled.View`
  position: absolute;
  background: ${colors.red};
  width: 12px;
  height: 12px;
  border-radius: 12px;
`;

export const ViewerCount = styled.Text`
  color: ${colors.black};
  font-family: roboto_700;
  font-size: 12px;
  margin-left: 15px;
`;
export const RightContainer = styled.View`
  /*   background: ${colors.purple}; */
  flex-direction: column;
  width: 200px;
  height: 110px;
  right: 0;
`;
export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;
export const Avatar = styled.Image`
  left: 0;
  width: 18px;
  height: 18px;
  border-radius: 32px;
`;
export const StreamerName = styled.Text`
  color: ${colors.black};
  font-size: 18px;
  font-family: roboto_700;
  margin-left: 6px;
`;
export const StreamTitle = styled.Text`
  color: ${colors.black};
  font-size: 16px;
  font-family: roboto_500;
  margin-top: 1px;
`;
export const StreamGame = styled.Text`
  color: ${colors.lightGray};
  font-size: 14px;
  font-family: roboto_400;
  margin-top: 3px;
`;
export const StreamTag = styled.View`
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 20px;
  background: ${colors.tag};
  border-radius: 20px;
  margin-top: 10px;
`;
export const TagText = styled.Text`
  color: ${colors.black};
  font-family: roboto_500;
  font-size: 14px;
`;
