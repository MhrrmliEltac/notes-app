import { deleteDoc, doc } from "firebase/firestore";
import { Alert } from "react-native";
import { db } from "./firebaseConfig";

export async function deleteNote(id: string) {
  try {
    await deleteDoc(doc(db, "notes", id));
  } catch (error) {
    Alert.alert("Xəta", "Not əlavə edilərkən xəta baş verdi");
  }
}
