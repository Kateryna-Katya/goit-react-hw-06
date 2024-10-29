import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { configureStore } from "@reduxjs/toolkit";


import contactsReducer from "./contactsSlice/contactsSlice.js"
import filtersReducer from "./filtersSlice/filtersSlice.js"






const contactsConfig = {
    key: 'contacts',
    storage,
    whitelist: ['items'],

}
const persistedContactsReducer = persistReducer(contactsConfig, contactsReducer);
const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filters: filtersReducer,
    }
})
export const persistor = persistStore(store);
export default store;