// store/CartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id && item.size === newItem.size);

            if (existingItem) {
                existingItem.quantity += newItem.quantity;
            } else {
                state.items.push(newItem);
            }
        },
        removeFromCart(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        increaseQuantity(state, action) {
            const { id, size } = action.payload;
            const item = state.items.find(item => item.id === id && item.size === size);
            if (item) {
                item.quantity += 1;
            }
        },

        decreaseQuantity(state, action) {
            const { id, size } = action.payload;
            const item = state.items.find(item => item.id === id && item.size === size);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        }
    }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
