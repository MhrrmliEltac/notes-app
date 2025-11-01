import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Note } from "../types/types";
import { Dispatch } from "react";
import { styles } from "../styles/styles";
import { Button } from "./ui/Button";

export function NoteList({
  item,
  editingId,
  editText,
  setEditText,
  startEdit,
  saveEdit,
  cancelEdit,
  handleDelete,
}: {
  item: Note | null;
  editingId: string | null;
  editText: string;
  setEditText: Dispatch<React.SetStateAction<string>>;
  startEdit: (note: Note) => void;
  saveEdit: (id: string) => void;
  cancelEdit: () => void;
  handleDelete: (id: string) => void;
}) {
  const isEditing = editingId === item?.id;

  return (
    <View style={styles.noteCard}>
      {isEditing ? (
        <View>
          <TextInput
            style={styles.editInput}
            value={editText}
            onChangeText={setEditText}
            multiline
            autoFocus
            placeholder="Notu redaktə edin..."
            placeholderTextColor="#9ca3af"
          />
          <View style={styles.editButtons}>
            <Button
              btnText="✓ Saxla"
              onPress={() => saveEdit(item.id)}
              style={[styles.button, styles.saveButton]}
            />
            <Button
              btnText="✕ Ləğv et"
              style={[styles.button, styles.cancelButton]}
              onPress={cancelEdit}
            />
          </View>
        </View>
      ) : (
        <View>
          <Text style={styles.noteText}>{item?.text}</Text>
          <Text style={styles.dateText}>{item?.createdAt}</Text>
          <View style={styles.actionButtons}>
            <Button
              btnText="✎ Redaktə"
              style={[styles.button, styles.editButton]}
              onPress={() => startEdit(item!)}
            />
            <Button
              btnText="🗑 Sil"
              style={[styles.button, styles.deleteButton]}
              onPress={() => item?.id && handleDelete(item.id)}
            />
          </View>
        </View>
      )}
    </View>
  );
}
