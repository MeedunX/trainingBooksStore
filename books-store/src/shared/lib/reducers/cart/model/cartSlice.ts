import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "../../../../api/cart";

/* interface CartState {
    cart: ICartItem[]
}

const initialState: CartState = {
    cart: []
} */

const initialState: { cart: ICartItem[] } = {
    cart: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        changeItemQuantity: (state, action: PayloadAction<ICartItem>) => {
            const itemIndex = state.cart?.findIndex(
                (item) => item.id === action.payload.id
            )
            state.cart[itemIndex].quantity = action.payload.quantity
        },
        addToCart: (state, action: PayloadAction<ICartItem>) => {
            const itemIndex = state.cart?.findIndex(
                (item) => item.id === action.payload.id
            )
            if (itemIndex === -1) {
                state.cart = [action.payload, ...state.cart]
                return state
            }

            state.cart[itemIndex].quantity += action.payload.quantity
            return state
        },
        removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
            state.cart = state.cart.filter(
                (item) => item.id !== action.payload.id
            )

            return state
        },
    }
})
export const { addToCart, changeItemQuantity, removeFromCart } = cartSlice.actions
export default cartSlice.reducer