import NoteCard from "../../components/NoteCard";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import * as Style from "./styles";

export default function Notes({ navigation }: RootTabScreenProps<"Notes">) {
  return (
    <Style.Container>
      <Style.Title>Notes</Style.Title>
      <NoteCard title="Goals" note="-English -Fitness" />
    </Style.Container>
  );
}
