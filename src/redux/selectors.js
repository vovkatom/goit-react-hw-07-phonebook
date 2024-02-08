// Селектор для отримання всіх контактів
export const selectContacts = state => state.phonebook.contacts.items;

// Селектор для отримання значення фільтра
export const selectFilter = state => state.phonebook.filter;

// Селектор для отримання видимих контактів відповідно до поточного фільтра
export const selectVisibleContacts = state => {
  const currentFilter = state.phonebook.filter;
  const currentContacts = state.phonebook.contacts.items;

  if (currentFilter !== '') {
    const normalizedFilter = currentFilter.toLowerCase();
    // Фільтрація контактів за ім'ям на основі нормалізованого фільтра
    return currentContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
  // Повернення всіх контактів, якщо фільтр не встановлено
  return currentContacts;
};

// Селектор для отримання помилки
export const selectError = state => state.phonebook.error;

// Селектор для отримання операції (наприклад, 'add', 'delete') зі стану
export const selectOperetion = state => state.phonebook.operetion;
