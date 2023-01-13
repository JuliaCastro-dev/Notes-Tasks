import { JSXElement } from "@babel/types";
import { ComponentElement } from "react";
import { View } from "react-native";
import { Text } from "../Themed";
import * as Style from "./styles";

export type Props = {
  note?: string;
  title?: string;
};

export default function Card({ note, title }: Props) {
  let background = "white";
  /*   switch (type) {
    case "life":
      background = "#FF2A5D";
      break;

    case "water":
      background = "#0076F0";
      break;

    case "food":
      background = "#F9A000";
      break;

    case "forest":
      background = "#33D728";
      break;

    default:
      background = "#FF2A5D";
      break;
  } */

  return (
    <Style.Container>
      <Style.Content>
        <Style.TextQuantity>{title}</Style.TextQuantity>
        <Style.TextDescription>{note}</Style.TextDescription>
      </Style.Content>
    </Style.Container>
  );
}
