import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { Note } from "../types/types";

export const listenNotes = (callback: (notes: Note[]) => void) => {
  const q = query(collection(db, "notes"), orderBy("createdAt", "desc"));

  // Realtime listener
  const unsubscribe = onSnapshot(q, (snapshot) => {
    const notes = snapshot.docs.map((doc) => ({
      id: doc.id,
      text: doc.data().text,
      createdAt: doc.data().createdAt,
    }));
    callback(notes);
  });

  return unsubscribe;
};
