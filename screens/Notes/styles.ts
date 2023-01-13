import { Dimensions } from "react-native";
import styled from "styled-components/native";
const { height, width } = Dimensions.get("screen");

const Container = styled.View`
  flex: 1;
  padding: 5%;
  width: ${width * 1};
  min-height: ${height * 1};
`;

const Title = styled.Text`
  color: aliceblue;
  font-weight: 700;
  font-size: ${height * 0.06};
`;

export { Title, Container };
