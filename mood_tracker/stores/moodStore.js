// stores/counterStore.js
import { defineStore } from 'pinia'
import { db } from '@/firebase'
import { collection, addDoc, getDocs, query, serverTimestamp, orderBy, limit } from 'firebase/firestore';

const moods = collection(db, "moods");

export const useMoodStore = defineStore('moods', {
  state: () => ({
    count: 0
  }),
  actions: {
   async insertMood(moodValue){
      try {
        const moodEntry = {
          mood: moodValue,
          timestamp: serverTimestamp()
        };
        await addDoc(moods, moodEntry);
        console.log("added successfully");
      }
      catch(error){
        console.log(error);
      }
    },
    async fetchLastMood(){
      const q = query(moods, orderBy("timestamp", "desc"), limit(1));
      const querySnapshot = await getDocs(q);

      return querySnapshot;
    }
  }
})
