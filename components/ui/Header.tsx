import { Text, View } from "react-native";
import { styles } from "../../styles/styles";
import { Note } from "../../types/types";

export function Header({ notes }: { notes: Note[] | null }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>📝 Notlarım</Text>
      <Text style={styles.headerSubtitle}>
        Cəmi {notes && notes.length} not
      </Text>
    </View>
  );
}
