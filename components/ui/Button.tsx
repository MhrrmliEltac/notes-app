import { Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles/styles";

interface ButtonProps {
  btnText: string;
  style: [object?, object?];
  onPress: () => void;
}

export function Button({ btnText, style, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={styles.buttonText}>{btnText}</Text>
    </TouchableOpacity>
  );
}
