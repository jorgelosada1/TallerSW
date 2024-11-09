import { create } from 'zustand';
import axios from 'axios';

const useStore = create((set) => ({
  items: [],
  fetchItems: async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/items');
      set({ items: response.data });
    } catch (error) {
      console.error('Error al obtener los items:', error);
    }
  },
  addItem: async (newItem) => {
    try {
      await axios.post('http://127.0.0.1:5000/api/items', newItem);
      set((state) => ({ items: [...state.items, newItem] }));
    } catch (error) {
      console.error('Error al agregar el item:', error);
    }
  }
}));

export default useStore;
