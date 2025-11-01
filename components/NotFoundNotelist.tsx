import { Text, View } from "react-native";
import { styles } from "../styles/styles";

export function NotFoundNotelist() {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyIcon}>📭</Text>
      <Text style={styles.emptyText}>Hələ heç bir notunuz yoxdur</Text>
      <Text style={styles.emptySubtext}>
        Yuxarıdakı inputdan ilk notunuzu əlavə edin
      </Text>
    </View>
  );
}
