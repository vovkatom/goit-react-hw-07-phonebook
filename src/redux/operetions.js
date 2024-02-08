import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Встановлення основного URL для запитів Axios
axios.defaults.baseURL = 'https://65b591e241db5efd2867c5e9.mockapi.io/contacts/';

// Асинхронний thunk для отримання всіх контактів
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      // Виконання GET-запиту для отримання всіх контактів
      const response = await axios.get('/contacts');
      return response.data; // Повернення отриманих даних при успішному виконанні
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message); // Відхилення з повідомленням про помилку при невдачі запиту
    }
  }
);

// Асинхронний thunk для додавання нового контакту
export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      // Виконання POST-запиту для додавання нового контакту
      const response = await axios.post('/contacts', contact);
      return response.data; // Повернення даних нового контакту при успішному виконанні
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message); // Відхилення з повідомленням про помилку при невдачі запиту
    }
  }
);

// Асинхронний thunk для видалення контакту за ID
export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      // Виконання DELETE-запиту для видалення контакту за ID
      const response = await axios.delete(`/contacts/${id}`);
      return response.data; // Повернення даних, що підтверджують успішне видалення при успішному виконанні
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message); // Відхилення з повідомленням про помилку при невдачі запиту
    }
  }
);
