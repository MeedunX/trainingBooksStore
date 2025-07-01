import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { bookListReducer } from "../reducers/book/bookList/";
import { cartReducer } from "../reducers/cart/";

/* const rootReducer = combineReducers({
    bookList: bookListReducer,
    cart: cartReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer : rootReducer
    })
} */

export const store = configureStore({
    reducer: {
        bookList: bookListReducer,
        cart: cartReducer,
    },
});

/* export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'] */

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;