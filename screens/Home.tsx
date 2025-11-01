import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { FlatList, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { NoteList } from "../components/Notelist";
import { NotFoundNotelist } from "../components/NotFoundNotelist";
import { Header } from "../components/ui/Header";
import { Input } from "../components/ui/Input";
import { addNotes } from "../firebase/addNotes";
import { deleteNote } from "../firebase/deleteNotes";
import { editNotes } from "../firebase/editNotes";
import { listenNotes } from "../firebase/listenNotes";
import { styles } from "../styles/styles";
import { Note } from "../types/types";

const Home = () => {
  const [notes, setNotes] = useState<Note[] | null>([]);
  const [inputText, setInputText] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");

  const addNote = async () => {
    if (inputText.trim() === "") {
      Alert.alert("Xəta", "Zəhmət olmasa not daxil edin");
      return;
    }

    const newNote: Omit<Note, "id"> = {
      text: inputText,
      createdAt: new Date().toLocaleString("az-AZ"),
    };

    setInputText("");

    try {
      await addNotes(newNote);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id: string) => {
    Alert.alert("Silinsin?", "Bu notu silmək istədiyinizdən əminsiniz?", [
      { text: "Xeyr", style: "cancel" },
      {
        text: "Bəli",
        style: "destructive",
        onPress: () => deleteNote(id),
      },
    ]);
  };

  const startEdit = (note: Note) => {
    setEditingId(note.id);
    setEditText(note.text);
  };

  const saveEdit = async (id: string) => {
    if (editText.trim() === "") {
      Alert.alert("Xəta", "Not boş ola bilməz");
      return;
    }

    await editNotes(id, { text: editText });
    setEditingId(null);
    setEditText("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  useEffect(() => {
    const unsubscribe = listenNotes((fetchedNotes) => {
      setNotes(fetchedNotes);
    });

    return () => unsubscribe();
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar style="light" />

      {/* Header */}
      <Header notes={notes} />

      {/* Input Section */}
      <Input
        inputText={inputText}
        setInputText={setInputText}
        addNote={addNote}
      />

      {/* Notes List */}
      {notes && notes.length === 0 ? (
        <NotFoundNotelist />
      ) : (
        <FlatList
          data={notes}
          renderItem={({ item }) => (
            <NoteList
              item={item}
              cancelEdit={cancelEdit}
              editText={editText}
              setEditText={setEditText}
              editingId={editingId}
              startEdit={startEdit}
              saveEdit={saveEdit}
              handleDelete={handleDelete}
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      )}
    </KeyboardAvoidingView>
  );
};

export default Home;
