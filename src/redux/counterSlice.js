import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 1
    },
    reducers: {
        increment: state => {
            if (state.value === 100) {
                state.value = 1
            } else {
                state.value += 1
            }

        },
        decrement: state => {
            if (state.value === 1) {
                state.value = 100
            } else {
                state.value -= 1
            }

        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const counterReducer = counterSlice.reducer