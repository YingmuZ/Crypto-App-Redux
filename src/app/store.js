import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";

const store = configureStore({
    reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    },

    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(cryptoApi.middleware),
    
});

const storeNews = configureStore({
    reducer: {
  
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },

    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(cryptoNewsApi.middleware),
    
});

export { store, storeNews };

// export default configureStore({
//     reducer: {
//         [cryptoApi.reducerPath]: cryptoApi.reducer,
       
//     },
//     middleware: getDefaultMiddleware => 
//         getDefaultMiddleware().concat(cryptoApi.middleware)
    
// });


