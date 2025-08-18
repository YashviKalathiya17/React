import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    list: savedNotes,
    searchTerm: "",
    categoryFilter: "All",
  },
  reducers: {
    addNote: (state, action) => {
      state.list.push(action.payload);
      localStorage.setItem("notes", JSON.stringify(state.list));
    },
    deleteNote: (state, action) => {
      state.list = state.list.filter(note => note.id !== action.payload);
      localStorage.setItem("notes", JSON.stringify(state.list));
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setCategoryFilter: (state, action) => {
      state.categoryFilter = action.payload;
    }
  },
});

export const { addNote, deleteNote, setSearchTerm, setCategoryFilter } = notesSlice.actions;


//Store
export const store = configureStore({
    reducer:{
        notes:notesSlice.reducer
    }
})