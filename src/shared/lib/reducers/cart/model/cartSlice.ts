import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "../../../../api/cart";

/* interface CartState {
    cart: ICartItem[]
}

const initialState: CartState = {
    cart: []
} */
const loadCartFromLocalStorage = (): ICartItem[] => {
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
        try {
            return JSON.parse(storedCart)
        } catch (e) {
            console.error(e)
        }
    }
    return [];
};

const initialState: { cart: ICartItem[] } = {
    cart: loadCartFromLocalStorage(),
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
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        addToCart: (state, action) => {
            const itemIndex = state.cart.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex === -1) {
                state.cart.push(action.payload);
            } else {
                state.cart[itemIndex].quantity += action.payload.quantity;
            }
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
            state.cart = state.cart.filter(
                (item) => item.id !== action.payload.id
            )
            localStorage.setItem('cart', JSON.stringify(state.cart))
            return state
        },
        clearCart: (state, action) => {
            state.cart = []
            localStorage.removeItem('cart')
        }
    }
})
export const { addToCart, changeItemQuantity, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer