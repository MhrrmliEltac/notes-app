import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export async function editNotes(id: string, updatedData: any) {
  try {
    const noteItem = doc(db, "notes", id);
    await updateDoc(noteItem, updatedData);
  } catch (error) {
    console.log(error);
  }
}
