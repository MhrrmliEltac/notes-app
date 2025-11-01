import { TextInput, View } from "react-native";
import { styles } from "../../styles/styles";
import { Dispatch } from "react";
import { Button } from "./Button";

interface InputProps {
  inputText: string;
  setInputText: Dispatch<React.SetStateAction<string>>;
  addNote: () => void;
}

export function Input({ inputText, setInputText, addNote }: InputProps) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Yeni not əlavə edin..."
        placeholderTextColor="#9ca3af"
        value={inputText}
        onChangeText={setInputText}
        multiline
      />

      <Button
        btnText="+ Əlavə et"
        style={[styles.addButton]}
        onPress={addNote}
      />
    </View>
  );
}
