import { Dimensions } from "react-native";
import styled from "styled-components/native";
const { height, width } = Dimensions.get("screen");

const Container = styled.View`
  width: ${width * 0.45};
  display: flex;
  flex-direction: row;
  align-self: center;
  align-items: center;
  height: ${height * 0.25};
  justify-content: space-between;
  border-radius: 10%;
  padding: 5%;
  background-color: #ff2a5d;
`;
const Content = styled.View`
  width: 85%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-self: center;
  align-items: flex-start;
  justify-content: flex-start;
`;

const TextQuantity = styled.Text`
  color: aliceblue;
  font-weight: 900;
  font-size: ${height * 0.03};
`;

const TextDescription = styled.Text`
  color: aliceblue;
  font-weight: 600;
  margin-left: 3%;
  font-size: ${height * 0.03};
  width: 100%;
  height: 90%;
  padding: 2%;
`;

export { Container, Content, TextQuantity, TextDescription };
