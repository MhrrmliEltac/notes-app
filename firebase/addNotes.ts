import { Alert } from "react-native";
import { Note } from "../types/types";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseConfig";

export async function addNotes(note: Omit<Note, "id">) {
  try {
    await addDoc(collection(db, "notes"), note);
  } catch (error) {
    Alert.alert("Xəta", "Not əlavə edilərkən xəta baş verdi");
  }
}
